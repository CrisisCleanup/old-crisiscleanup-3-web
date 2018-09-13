FROM node:8 as node
WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install
COPY ./ /app/
ARG APP_ENV=prod
RUN yarn run build --report

FROM nginx:latest
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/ /usr/share/nginx/html
