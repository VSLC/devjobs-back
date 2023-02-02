
FROM node:16.19.0

RUN npm config set cache /tmp --global

WORKDIR /usr/src

COPY package.json .

EXPOSE 5000

RUN npm i

COPY . .

RUN npx prisma generate

RUN apt-get update && apt-get install -y wget

CMD ["npm","start"]