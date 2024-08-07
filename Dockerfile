FROM node:18.19-alpine AS builder

WORKDIR /app

ARG VITE_MAIN_URL
ARG VITE_AUTH_URL
ARG VITE_APPLY_URL
ARG VITE_ADMIN_URL
ARG VITE_BASE_URL

ENV VITE_MAIN_URL=$VITE_MAIN_URL
ENV VITE_AUTH_URL=$VITE_AUTH_URL
ENV VITE_APPLY_URL=$VITE_APPLY_URL
ENV VITE_ADMIN_URL=$VITE_ADMIN_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

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

# 3000포트 열기
EXPOSE 3002
# Nginx 시작
CMD ["nginx", "-g", "daemon off;"]
