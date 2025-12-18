FROM nginx

WORKDIR /usr/share/nginx/html

RUN apt-get update && \
    apt-get install git -y && \
    rm -rf  * && \
    git clone https://github.com/SinanTLK/clickfast.git .

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]