FROM node:17

RUN npm config set cache /tmp --global

WORKDIR /app

COPY package.json .
COPY prisma ./prisma/

EXPOSE 5000

RUN npm i

COPY . ./app

RUN npx prisma generate


RUN apt-get update && apt-get install -y wget

CMD ["npm","run","dev:migrate"]
