
FROM node:20.11.1-alpine AS development

RUN mkdir /code
WORKDIR /code

COPY package.json .
COPY prisma ./prisma
RUN npm install

FROM node:20.11.1-alpine as prod
RUN mkdir /code
WORKDIR /code
COPY --from=development /code/node_modules ./node_modules

COPY . .
#configurando la fecha
ENV TZ=America/La_Paz
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone