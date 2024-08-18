FROM node:22-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat git curl unzip

RUN curl -L -o ../repo.zip https://github.com/DSM-Repo/repo/archive/main.zip && \
    unzip ../repo.zip -d ../

RUN cd /app/repo-main/packages/main

RUN yarn install --immutable

ARG VITE_APP_BASE_URL
ENV VITE_APP_BASE_URL=${VITE_APP_BASE_URL}

ARG VITE_APP_URL_MAIN
ENV VITE_APP_URL_MAIN=${VITE_APP_URL_MAIN}

ARG VITE_APP_URL_STUDENT
ENV VITE_APP_URL_STUDENT=${VITE_APP_URL_STUDENT}

ARG VITE_APP_URL_TEACHER
ENV VITE_APP_URL_TEACHER=${VITE_APP_URL_TEACHER}

RUN yarn workspace main build

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

COPY --from=builder /app/dist /usr/share/nginx/html


EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
