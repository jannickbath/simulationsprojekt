FROM node:alpine

RUN apk update \
  && apk upgrade

RUN apk add php

COPY . /srv/app

COPY start.sh /start.sh
RUN chmod u+x /start.sh

WORKDIR /srv/app

EXPOSE 5174

ENTRYPOINT ["/start.sh"]
