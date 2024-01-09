# FROM node:18-alpine AS base

# WORKDIR /app

# COPY ./package.json ./package-lock.json* ./

# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 9463

# ENV PORT 9463

# ENV HOSTNAME "0.0.0.0"

# # Start the app
# CMD ["npm", "start"]

# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Run
FROM node:18-alpine AS base

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 9463

ENV PORT 9463
ENV HOSTNAME "0.0.0.0"

# Start the app
CMD ["npm", "start"]
