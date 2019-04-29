#!/bin/bash

docker pull mongo
docker run -d -p 27017:27017 --name mongo mongo:latest

wait

cd api

npm i
export NODE_ENV=developmentlive
npm run start:dev

