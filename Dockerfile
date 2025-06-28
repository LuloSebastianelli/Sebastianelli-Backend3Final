FROM node:22.9.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src ./src

EXPOSE 8080

CMD ["npm", "run", "start"]

#docker build -t luloh/sebastianelli-backend3final:1.0.0-lts .
#docker push luloh/sebastianelli-backend3final:1.0.0-lts
#docker pull luloh/sebastianelli-backend3final:1.0.0-lts