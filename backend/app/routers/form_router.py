from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from app.schemas.form_schema import ApplicationForm
from app.services.email_service import send_email

router = APIRouter()

@router.post("/submit-form/")
async def submit_form(form_data: ApplicationForm):
    try:
        send_email(form_data)
        return JSONResponse(status_code=200, content={"message": "Форма успешно отправлена!"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка отправки формы: {str(e)}")
