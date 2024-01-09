FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN yarn build

COPY . .

EXPOSE 9463

ENV PORT 9463

ENV HOSTNAME "0.0.0.0"

# Start the app
CMD ["npm", "start"]
