FROM node:20-alpine AS build
WORKDIR /app
COPY site-source.tar.gz /tmp/site-source.tar.gz
RUN tar -xzf /tmp/site-source.tar.gz -C /app
RUN npm ci && npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN printf 'server {\n  listen 80;\n  server_name _;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / { try_files $uri $uri/ /index.html; }\n  location = /healthz { access_log off; add_header Content-Type text/plain; return 200 "ok\n"; }\n  location ~* \.(js|css|png|jpg|jpeg|webp|svg|ico|woff2)$ { expires 30d; add_header Cache-Control "public, immutable"; try_files $uri =404; }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1/healthz || exit 1
