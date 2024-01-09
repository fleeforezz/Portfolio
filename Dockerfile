# FROM node:18-alpine AS base

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 9463

# ENV PORT 9463

# ENV HOSTNAME "0.0.0.0"

# # Start the app
# CMD ["npm", "run", "dev"]

# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 9463
ENV PORT 9463
ENV HOSTNAME "0.0.0.0"

# Set the environment variable for production
ENV NODE_ENV production

# Start the Next.js app
CMD ["npm", "start"]
