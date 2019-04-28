FROM node:10

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 3001

ENV NODE_ENV=development

CMD ["npm", "run", "start:dev"]
