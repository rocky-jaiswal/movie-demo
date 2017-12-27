FROM node:8-alpine

RUN mkdir -p /opt/db
RUN mkdir /app
WORKDIR /app

ADD . /app
RUN yarn install

EXPOSE 3001
