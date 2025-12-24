from pydantic import BaseModel, EmailStr

class ContactMessage(BaseModel):
    full_name: str
    email: EmailStr
    message: str
