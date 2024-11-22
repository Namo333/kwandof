import os
from dotenv import dotenv_values

SENDER = os.getenv("SENDER")
RECEIVER = os.getenv("RECEIVER")
SMTP_SERVER = os.getenv("SMTP_SERVER")
PORT = os.getenv("PORT")
LOGIN = os.getenv("LOGIN")
PASSWORD = os.getenv("PASSWORD")