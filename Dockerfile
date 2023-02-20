<<<<<<< HEAD
FROM alpine:3.14
=======
FROM alpine
>>>>>>> dev

WORKDIR /app

COPY package.json /.

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"] 