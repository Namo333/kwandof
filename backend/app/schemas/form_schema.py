from pydantic import BaseModel, EmailStr

class ApplicationForm(BaseModel):
    service: str
    amount: float
    creditHistory: str
    incomeConfirmation: str
    lastName: str
    firstName: str
    email: str
    phone: str
    message: str