FROM node:carbon

RUN apt-get update
RUN apt-get install git --assume-yes
RUN apt-get install bzip2 --assume-yes
RUN apt-get install python --assume-yes
RUN npm install --quiet --global \
      vue-cli

RUN mkdir /app

COPY ./init.sh /

WORKDIR /app