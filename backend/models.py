from pydantic import BaseModel, EmailStr
from typing import Optional

class ContactMessage(BaseModel):
    full_name: str
    email: EmailStr
    message: str

class CareerApplication(BaseModel):
    full_name: str
    email: EmailStr
    domain: str
    experience_level: str

class JobApplication(BaseModel):
    name: str
    email: EmailStr
    experience: str
    linkedin: Optional[str] = None
    job_id: str
    resume_path: str
    
