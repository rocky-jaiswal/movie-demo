FROM node:8-alpine

RUN mkdir -p /opt/data-loader
WORKDIR /opt/data-loader

ADD . /opt/data-loader
RUN yarn install

CMD ["node"]
