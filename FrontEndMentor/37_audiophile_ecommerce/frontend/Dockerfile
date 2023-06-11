# Primary Stage: Build React Image
FROM node:18-alpine3.17 as primary

LABEL version="1.0"
LABEL description="Prod Image: #37 Audiophile: React"

# Required for Alpine - webpack; image-minimizer-plugins
RUN apk add --no-cache autoconf automake file g++ libtool make nasm libpng-dev

WORKDIR /frontend
COPY package*.json /frontend
RUN npm install && npm cache clean --force

COPY . /frontend

RUN npm run build && npm prune --production



# Secondary Stage: Build Nginx Image
FROM nginx-1.24-alpine-brotli

LABEL version="1.0"
LABEL description="Prod Image: #37 Audiophile: NGINX"

COPY --from=primary /frontend/dist /usr/share/nginx/html
COPY ./nginx/default.conf ./nginx/headers.conf /etc/nginx/conf.d/
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/redirects.map /etc/nginx/redirects.map

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]