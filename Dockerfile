FROM node:12.22.1-alpine

WORKDIR /usr/src/admin

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]

# docker build -t grocery-admin .
# docker run -it -p 3001:3001 grocery-admin
