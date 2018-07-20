FROM nginx:1.11-alpine

ARG env=production
ARG workers=auto

COPY $env.nginx.conf /etc/nginx/conf.d/app.conf

RUN sed -i -- "s/worker_processes  1;/worker_processes  ${workers};/g" /etc/nginx/nginx.conf
