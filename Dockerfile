FROM node:16.20.0

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install sax --force

COPY . .

EXPOSE 4888

CMD ["npm", "start"]
