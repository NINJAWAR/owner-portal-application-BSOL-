FROM node:16.20.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --f

COPY . .

RUN npm run build

EXPOSE 4888

CMD ["npm", "start"]
