FROM node:alpine

COPY . /srv/app

COPY start.sh /start.sh
RUN chmod u+x /start.sh

WORKDIR /srv/app

EXPOSE 5174

ENTRYPOINT ["/start.sh"]
