FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]

