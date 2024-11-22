from pydantic import BaseModel, EmailStr

class ApplicationForm(BaseModel):
    service: str
    amount: float
    creditHistory: str
    incomeConfirmation: str
    lastName: str
    firstName: str
    email: EmailStr
    phone: str
    message: str

class ApplicationForm2(BaseModel):
    lastName: str
    firstName: str
    email: EmailStr
    phone: str
    message: str