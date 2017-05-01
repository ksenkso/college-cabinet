FROM node:6

ENV VIRTUAL_HOST=cabinet.localhost.local
ENV HOME=/usr/src/t-app
RUN mkdir $HOME
WORKDIR $HOME

COPY package.prod.json /usr/src/t-app/package.json

RUN npm install

EXPOSE 80
EXPOSE 49153
