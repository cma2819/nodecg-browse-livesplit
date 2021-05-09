FROM node:14

RUN mkdir /nodecg
WORKDIR /nodecg

RUN apt-get update -y
RUN apt-get install zip

RUN npm install -g nodecg-cli && \
    nodecg setup

RUN nodecg install cma2819/nodecg-browse-livesplit
WORKDIR /nodecg/bundles/nodecg-browse-livesplit
RUN nodecg defaultconfig
RUN npm install --production

WORKDIR /

RUN cp /usr/local/bin/node /nodecg/node
RUN echo "node index.js" > /nodecg/start.sh
RUN echo "node index.js" > /nodecg/start.bat
RUN zip -r release.zip /nodecg