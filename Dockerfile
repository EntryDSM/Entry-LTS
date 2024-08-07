# Build stage
FROM node:18.19-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY . ./

RUN yarn install --immutable
RUN yarn build

# Execution stage
FROM nginx:alpine AS runner

# Nginx configuration
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

COPY env.sh /app/env.sh
RUN chmod +x /app/env.sh

# Open port 3002
EXPOSE 3002

# Run Nginx with env.sh script
CMD ["/bin/sh", "-c", "/app/env.sh && nginx -g 'daemon off;'"]
