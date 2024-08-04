# Stage 1: Build the application
FROM node:22.3.0-alpine3.19 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Update npm to the latest version
RUN npm install -g npm@latest

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Stage 2: Create the final image
FROM alpine:latest AS run

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app /app

# Expose the port
EXPOSE 9463

# Set environment variables
ENV PORT 9463
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["npm", "start"]
