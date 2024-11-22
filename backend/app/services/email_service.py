import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.schemas.form_schema import ApplicationForm

from get_env import SENDER, RECEIVER, SMTP_SERVER, PORT, LOGIN, PASSWORD

def send_email(form_data: ApplicationForm):
    sender = SENDER
    receiver = RECEIVER
    smtp_server = SMTP_SERVER
    port = PORT
    login = LOGIN
    password = PASSWORD

    # Создание MIMEMultipart сообщения
    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Новая заявка на кредит"
    msg["From"] = sender
    msg["To"] = receiver

    # Создание текстового и HTML-тела письма
    text = f"""\
Новая заявка на кредит:
- Услуга: {form_data.service}
- Сумма: {form_data.amount}
- Кредитная история: {form_data.creditHistory}
- Подтверждение дохода: {form_data.incomeConfirmation}
- Фамилия: {form_data.lastName}
- Имя: {form_data.firstName}
- Почта: {form_data.email}
- Телефон: {form_data.phone}
- Сообщение: {form_data.message}
"""

    html = f"""\
<html>
  <body>
    <h1>Новая заявка на кредит</h1>
    <ul>
      <li><b>Услуга:</b> {form_data.service}</li>
      <li><b>Сумма:</b> {form_data.amount}</li>
      <li><b>Кредитная история:</b> {form_data.creditHistory}</li>
      <li><b>Подтверждение дохода:</b> {form_data.incomeConfirmation}</li>
      <li><b>Фамилия:</b> {form_data.lastName}</li>
      <li><b>Имя:</b> {form_data.firstName}</li>
      <li><b>Почта:</b> {form_data.email}</li>
      <li><b>Телефон:</b> {form_data.phone}</li>
      <li><b>Сообщение:</b> {form_data.message}</li>
    </ul>
  </body>
</html>
"""

    # Добавление текстового и HTML-тела в сообщение
    part1 = MIMEText(text, "plain")
    part2 = MIMEText(html, "html")
    msg.attach(part1)
    msg.attach(part2)

    try:
        # Установление соединения и отправка
        with smtplib.SMTP(smtp_server, port) as server:
            server.login(login, password)  # Авторизация
            server.sendmail(sender, receiver, msg.as_string())  # Отправка письма
        print("Email успешно отправлен.")
    except Exception as e:
        raise Exception(f"Ошибка отправки email: {str(e)}")
