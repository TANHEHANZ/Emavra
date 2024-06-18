FROM node:18-alpine as build
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

EXPOSE 90
FROM nginx:1.19.8-alpine
COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
CMD [ "nginx","-g","daemon off;"]