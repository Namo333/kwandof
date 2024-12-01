# Stage 1: Install dependencies and build the project
FROM node:alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в рабочую директорию контейнера
COPY . .

# Строим проект Next.js
RUN npm run build

# Stage 2: Production image
FROM node:alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только необходимые файлы из текущей директории
COPY ./.next ./.next
COPY ./public ./public
COPY ./next.config.js ./next.config.js
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

# Устанавливаем только production зависимости
RUN npm install --production

# Экспонируем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
