FROM node:20.16.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

RUN npm i -g @nestjs/cli 

# COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]