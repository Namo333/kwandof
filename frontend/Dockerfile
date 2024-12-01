# Stage 1: Install dependencies and build the project
FROM node:alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Строим проект Next.js
RUN npm run build

# Stage 2: Production image
FROM node:alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только необходимые файлы из текущей директории
COPY --from=build /app/.next ./.next
COPY ./public ./public
COPY ./next.config.mjs ./next.config.mjs
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

# Устанавливаем только production зависимости
RUN npm install --production

# Экспонируем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
