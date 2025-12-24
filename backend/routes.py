from fastapi import APIRouter, HTTPException
from models import ContactMessage
from database import contact_collection
from datetime import datetime

router = APIRouter()

@router.post("/contact")
def submit_message(data: ContactMessage):
    try:
        doc = data.dict()
        doc["created_at"] = datetime.utcnow()

        result = contact_collection.insert_one(doc)

        print("INSERTED:", result.inserted_id)

        return {"message": "Saved successfully"}

    except Exception as e:
        print("ERROR:", e)
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/contacts")
def get_contacts():
    return list(contact_collection.find({}, {"_id": 0}))
