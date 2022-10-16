ARG NODE_ENV
FROM node:16.17.1-alpine
RUN apk add --no-cache bash

# recommended but not necessary (good practice)
WORKDIR /app

COPY ["package*.json", "./"]

ARG NODE_ENV
# buildtime
# docker-compose up (or create) --build-arg
# we can embbed shell scripting
ENV NODE_ENV=${NODE_ENV}
RUN if [ "$NODE_ENV" = "production"]; \
  then npm ci --production; \
  else npm install; \
  fi

COPY . .

# # recommended but not necessary (only for documentation purposes)
# ENV PORT=8080
# EXPOSE $PORT

# # runtime (when we run the container at the end of the entire building process)
# CMD [ "yarn", "start:prod"]
# # Thi can be overwritten in docker-compose