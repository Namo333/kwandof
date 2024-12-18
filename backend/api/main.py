from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routers import form_router

app = FastAPI()

origins = [
    "http://51.250.33.109/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

app.include_router(form_router.router)