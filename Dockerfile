FROM node:16-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

RUN npm i ts-node -g

COPY . ./

CMD ["npm", "start"]