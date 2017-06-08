FROM node:6

ENV VIRTUAL_HOST=journal.ru
ENV HOME=/usr/src/t-app
RUN mkdir $HOME
# COPY . /usr/src/t-app/

WORKDIR $HOME/..

RUN npm install -g @angular/cli \
  && ng new t-app \
  && cd t-app \
  && npm install @angular/animations \
  && npm install

COPY ./src $HOME/src

WORKDIR $HOME

CMD npm run -- ng serve --port 8080

EXPOSE 8080
EXPOSE 49153
