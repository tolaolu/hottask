FROM alpine:3.14

WORKDIR /app

COPY package.json /.

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "app.js"] 