FROM node:alpine AS build

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./

RUN npm install

COPY frontend ./

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install --production

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["npm", "start"]
