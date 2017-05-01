FROM node

ENV VIRTUAL_HOST=cabinet.localhost.local
ENV HOME=/usr/src/t-app
RUN mkdir $HOME
WORKDIR $HOME

COPY package.json /usr/src/t-app/

RUN npm install

EXPOSE 80
EXPOSE 49153
