FROM node:22.9.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]

#docker build -t luloh/sebastianelli-backend3final:1.0.0-lts .
#docker push luloh/sebastianelli-backend3final:1.0.0-lts
#docker pull luloh/sebastianelli-backend3final:1.0.0-lts