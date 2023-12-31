FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9453

ENV PORT 9453

ENV HOSTNAME "0.0.0.0"

# Start the app
CMD ["npm", "run", "dev"]