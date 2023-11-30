FROM node:18-alpine AS base

# Set the working directory inside the container  
WORKDIR /app  

# Copy package.json and package-lock.json to the container  
COPY package*.json ./  

# Install dependencies  
RUN npm ci  

# Copy the app source code to the container  
COPY . .  

# Build the Next.js app  
RUN npm run build  

# Expose the port the app will run on  
EXPOSE 9453

ENV PORT 9453
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# Start the app  
CMD ["npm", "start"]