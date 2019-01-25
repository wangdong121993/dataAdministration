# refer to https://hub.docker.com/r/smebberson/alpine-nginx/
# example https://github.com/smebberson/docker-alpine/tree/master/examples/user-nginx


FROM smebberson/alpine-nginx:3.0.0
MAINTAINER gary gary0526@gmail.com
 
ADD /dist /usr/html/
ADD /nginx_vue.conf //etc/nginx/conf.d/default.conf

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log


 
