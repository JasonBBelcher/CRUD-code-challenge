FROM node:10

WORKDIR /app

RUN npm install -g @angular/cli

COPY package.json package.json


RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
