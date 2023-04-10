FROM node:16.20

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 4888

CMD ["npm", "start"]
