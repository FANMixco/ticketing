FROM node:alpine

WORKDIR /auth
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]