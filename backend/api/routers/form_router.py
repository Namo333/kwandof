from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from app.schemas.form_schema import ApplicationForm, ApplicationForm2
from app.services.email_service import send_email, send_email_simple

router = APIRouter()

@router.post("/api/submit-form/")
async def submit_form(form_data: ApplicationForm):
    try:
        send_email(form_data)
        return JSONResponse(status_code=200, content={"message": "Форма успешно отправлена!"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка отправки формы: {str(e)}")
    
@router.post("/api/submit-simple-form/")
async def submit_simple_form(form_data: ApplicationForm2):
    try:
        send_email_simple(form_data)
        return JSONResponse(status_code=200, content={"message": "Форма успешно отправлена!"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ошибка отправки формы: {str(e)}")
