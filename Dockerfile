FROM node:18.19-alpine AS builder

WORKDIR /app

ARG REACT_APP_BASE_URL
ENV REACT_APP_BASE_URL=${REACT_APP_BASE_URL}

COPY . ./

RUN yarn install

EXPOSE 3002

CMD ["yarn", "build"]