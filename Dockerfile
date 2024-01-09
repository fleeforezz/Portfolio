# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 9463

# ENV PORT 9463

# ENV HOSTNAME "0.0.0.0"

# # Start the app
# CMD ["npm", "start"]

FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runtime

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 9463

ENV PORT 9463

ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"]
