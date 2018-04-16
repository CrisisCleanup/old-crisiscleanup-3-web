FROM blueimp/nightwatch:0.9

COPY package.json /home/node/package.json
RUN npm install
RUN mkdir -p /home/node/testing
COPY entrypoint.sh /usr/local/bin/entrypoint

ENTRYPOINT ["entrypoint"]
