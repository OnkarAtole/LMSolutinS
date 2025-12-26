from fastapi import APIRouter, HTTPException
from models import ContactMessage
from database import contact_collection
from models import CareerApplication
from database import career_collection
from datetime import datetime
import os, shutil, uuid

from models import ContactMessage, CareerApplication
from database import (
    contact_collection,
    career_collection,
    job_applications
)




from fastapi import UploadFile, File, Form
from database import job_applications
import os
import shutil
import uuid

router = APIRouter()

UPLOAD_DIR = "uploads/resumes"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# ---------------- CONTACT ----------------
@router.post("/contact")
def submit_message(data: ContactMessage):
    doc = data.dict()
    doc["created_at"] = datetime.utcnow()
    contact_collection.insert_one(doc)
    return {"message": "Saved successfully"}

@router.get("/contacts")
def get_contacts():
    return list(contact_collection.find({}, {"_id": 0}))

# ---------------- CAREERS ----------------
@router.post("/careers")
def submit_career_application(data: CareerApplication):
    payload = data.dict()
    payload["created_at"] = datetime.utcnow()
    career_collection.insert_one(payload)
    return {"message": "Application submitted successfully"}

# ---------------- JOB APPLY ----------------
@router.post("/jobs/apply")
def apply_for_job(
    job_id: str = Form(...),
    name: str = Form(...),
    email: str = Form(...),
    experience: str = Form(...),
    linkedin: str = Form(None),
    resume: UploadFile = File(...)
):
    if resume.content_type not in [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ]:
        raise HTTPException(status_code=400, detail="Invalid resume format")

    file_ext = resume.filename.split(".")[-1]
    filename = f"{uuid.uuid4()}.{file_ext}"
    file_path = os.path.join(UPLOAD_DIR, filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    job_applications.insert_one({
        "job_id": job_id,
        "name": name,
        "email": email,
        "experience": experience,
        "linkedin": linkedin,
        "resume_path": file_path,
        "created_at": datetime.utcnow()
    })

    return {"message": "Application submitted successfully"}
