import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.get_env import SENDER, RECEIVER, SMTP_SERVER, PORT, LOGIN, PASSWORD

def send_email(form_data):
    # Настройки
    sender = SENDER
    receiver = RECEIVER
    smtp_server = SMTP_SERVER
    port = PORT
    login = LOGIN
    password = PASSWORD

    # Формируем текстовое и HTML содержимое
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

    # Формируем сообщение
    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Новая заявка на кредит"
    msg["From"] = sender
    msg["To"] = receiver
    msg.attach(MIMEText(text, "plain"))
    msg.attach(MIMEText(html, "html"))

    # Отправка письма
    try:
        with smtplib.SMTP(smtp_server, port) as server:
            server.login(login, password)
            server.sendmail(sender, receiver, msg.as_string())
        print("Email успешно отправлен.")
    except Exception as e:
        print(f"Ошибка отправки email: {str(e)}")


def send_email_simple(form_data):
    sender = SENDER
    receiver = RECEIVER
    smtp_server = SMTP_SERVER
    port = PORT
    login = LOGIN
    password = PASSWORD

    text = f"""\
Новая заявка:
- Фамилия: {form_data.lastName}
- Имя: {form_data.firstName}
- Почта: {form_data.email}
- Телефон: {form_data.phone}
- Сообщение: {form_data.message}
"""

    html = f"""\
<html>
  <body>
    <h1>Новая заявка</h1>
    <ul>
      <li><b>Фамилия:</b> {form_data.lastName}</li>
      <li><b>Имя:</b> {form_data.firstName}</li>
      <li><b>Почта:</b> {form_data.email}</li>
      <li><b>Телефон:</b> {form_data.phone}</li>
      <li><b>Сообщение:</b> {form_data.message}</li>
    </ul>
  </body>
</html>
"""

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Новая заявка"
    msg["From"] = sender
    msg["To"] = receiver
    msg.attach(MIMEText(text, "plain"))
    msg.attach(MIMEText(html, "html"))

    try:
        with smtplib.SMTP(smtp_server, port) as server:
            server.login(login, password)
            server.sendmail(sender, receiver, msg.as_string())
        print("Email успешно отправлен.")
    except Exception as e:
        print(f"Ошибка отправки email: {str(e)}")
