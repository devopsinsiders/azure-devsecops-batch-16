FROM node AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html