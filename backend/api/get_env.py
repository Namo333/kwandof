import os
from dotenv import load_dotenv

# Загрузка .env файла
load_dotenv()

# Чтение переменных окружения
LOGIN = os.getenv("LOGIN")
PASSWORD = os.getenv("PASSWORD")
