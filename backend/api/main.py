from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routers import form_router

app = FastAPI()

# origins = [
#     "http://localhost:3000",
#     "https://kwandof-1iev.vercel.app/"
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

app.include_router(form_router.router)
