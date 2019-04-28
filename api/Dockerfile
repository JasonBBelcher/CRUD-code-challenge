# Create image based on the official Node 6 image from the dockerhub
FROM node:10


# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install nodemon
RUN npm install

# set environment variable
ENV NODE_ENV=development

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3001


# Serve the app
CMD ["npm","run", "start:dev"]
