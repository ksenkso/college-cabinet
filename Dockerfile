FROM node

ENV VIRTUAL_HOST=cabinet.localhost.local
ENV HOME=/usr/src/t-app
RUN mkdir $HOME
WORKDIR $HOME

COPY package.json /usr/src/t-app/

RUN npm i -g -S @angular/cli@1.0.0
RUN npm install

EXPOSE 80
EXPOSE 49153
