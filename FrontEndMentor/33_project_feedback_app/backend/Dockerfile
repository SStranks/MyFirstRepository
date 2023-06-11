# Primary Stage: Build NodeJS Express Image
FROM node:18-alpine3.17 as primary

WORKDIR /backend
COPY package*.json /backend/
RUN npm install && npm cache clean --force

COPY . /backend/
RUN npm run compile


# Secondary Stage: Build NodeJS Express Image
FROM node:18-alpine3.17

WORKDIR /backend
ENV NODE_ENV=production

LABEL version="1.0"
LABEL description="Image: FEM#33: Backend: NodeJS Express"

COPY --from=primary /backend/package*.json /backend/
RUN npm install --omit=dev && npm cache clean --force

COPY --from=primary /backend/dist/ /backend/dist/

EXPOSE 4000
CMD ["npm", "run", "prod"]