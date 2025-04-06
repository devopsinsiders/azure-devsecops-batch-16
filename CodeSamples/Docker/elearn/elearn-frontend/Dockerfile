FROM node AS dhondhu
WORKDIR /dhondhu
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine-slim AS temu
COPY --from=dhondhu /dhondhu/build /usr/share/nginx/html
