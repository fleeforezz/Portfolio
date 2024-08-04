# Use node 18 alpine image as base
FROM node:22.3.0-alpine3.19 AS BUILD

# Set local directory in docker
WORKDIR /app

# Copy package.json and package-lock.json into docker workdir
COPY package*.json ./

# Update npm to latest version
RUN npm install -g npm@latest

# Install dependencies
RUN npm install

# Copy src file to docker
COPY . .

FROM alpine:latest

COPY /app /app

# Expose docker to port 9463
EXPOSE 9463

# Set env port to 9463
ENV PORT 9463

# Set default hostname to 0.0.0.0 (accept all hosts)
ENV HOSTNAME "0.0.0.0"

# Start the app
CMD ["npm", "start"]
