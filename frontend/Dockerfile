# Stage 1: Install dependencies and build the project
FROM node:alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы в рабочую директорию
COPY . .

# Строим проект Next.js
RUN npm run build

# Stage 2: Production image
FROM node:alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем зависимости для production-окружения
COPY package.json package-lock.json ./
RUN npm install --production

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./next.config.js

# Экспонируем порт
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]
