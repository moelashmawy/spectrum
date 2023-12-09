FROM node:20-slim as build-dependencies

WORKDIR /usr/src/app

# Add IS_DOCKER to determine if the app is running in docker
ARG IS_DOCKER=true
ENV IS_DOCKER=$IS_DOCKER

# Copy package files and install
COPY package*.json ./
COPY . .

# Build app
RUN npm run build

# Prune all the dev dependencies
RUN npm prune

EXPOSE 3000

CMD ["npm", "start"]
