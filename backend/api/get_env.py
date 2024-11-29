import os
from dotenv import load_dotenv

load_dotenv()

SENDER = os.getenv("SENDER")
RECEIVER = os.getenv("RECEIVER")
SMTP_SERVER = os.getenv("SMTP_SERVER")
PORT = int(os.getenv("PORT"))
LOGIN = os.getenv("LOGIN")
PASSWORD = os.getenv("PASSWORD")
