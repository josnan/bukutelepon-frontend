FROM nginx:latest
COPY . /usr/share/nginx/html
VOLUME /usr/share/nginx/html

