FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat git curl unzip

# Corepack 활성화 및 Yarn 설치
RUN corepack enable && corepack prepare yarn@4.3.0 --activate

RUN curl -L -o ../repo.zip https://github.com/DSM-Repo/repo/archive/main.zip && \
    unzip ../repo.zip -d /
WORKDIR /repo-main

ARG VITE_APP_BASE_URL
ENV VITE_APP_BASE_URL=${VITE_APP_BASE_URL}

ARG VITE_APP_URL_MAIN
ENV VITE_APP_URL_MAIN=${VITE_APP_URL_MAIN}

ARG VITE_APP_URL_STUDENT
ENV VITE_APP_URL_STUDENT=${VITE_APP_URL_STUDENT}

ARG VITE_APP_URL_TEACHER
ENV VITE_APP_URL_TEACHER=${VITE_APP_URL_TEACHER}

RUN yarn install --immutable

WORKDIR /repo-main/packages/main
RUN yarn build

FROM nginx:alpine AS runner
# Nginx 설정
RUN echo "\
server {\
    listen 3000;\
    location / {\
        root   /usr/share/nginx/html;\
        index  index.html index.htm;\
        try_files \$uri \$uri/ /index.html =404;\
    }\
}" > /etc/nginx/conf.d/default.conf
COPY --from=builder /repo-main/packages/main/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
