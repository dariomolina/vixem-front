# Etapa de desarrollo
# Etapa de construcción
FROM node:14-alpine as builder
WORKDIR /app
COPY package.json ./
COPY . .
RUN yarn install
CMD ["npm", "start"]

# Etapa de producción
#FROM node:14-alpine as production

#WORKDIR /app

#COPY package*.json ./
#RUN npm ci --only=production

#COPY ./build ./build

#CMD ["npm", "run", "serve"]
