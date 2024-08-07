FROM node:18.19-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY . ./

RUN yarn install --immutable
RUN yarn build

# 실행 단계
FROM nginx:alpine AS runner

# Nginx 설정
RUN echo "\
server {\
    listen 3002;\
    location / {\
        root   /usr/share/nginx/html;\
        index  index.html index.html;\
        try_files \$uri \$uri/ /index.html =404;\
    }\
}" > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

# env.sh 스크립트 복사
COPY env.sh /app/env.sh
RUN chmod +x /app/env.sh

# 3000포트 열기
EXPOSE 3002

# Nginx 시작 전 env.sh 실행
CMD ["/bin/sh", "-c", "/app/env.sh && nginx -g 'daemon off;'"]