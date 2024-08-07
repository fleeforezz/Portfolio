# Stage 1: Build the application
FROM node:22.3.0-alpine3.19 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Update npm to the latest version && Install dependencies
RUN npm install --ignore-scripts -g npm@latest && \
    npm install --ignore-scripts

# Copy the application code
COPY . .

# Build NodeJs app for production
RUN npm run build

# Stage 2: Create the final image
FROM alpine:3.20.2 AS run

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Create a non-root user and group
RUN addgroup -S portfolio && adduser -S portfolio -G portfolio

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app /app

# Change ownership of the application files to the non-root user
RUN chown -R portfolio:portfolio /app

# Switch to the non-root user
USER portfolio

# Expose the port
EXPOSE 9463

# Set environment variables
ENV PORT 9463
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["npm", "start"]
