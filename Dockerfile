FROM node:18-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

