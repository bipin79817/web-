FROM node:18

WORKDIR /myapp

COPY . .

RUN npm install

EXPOSE 8000

CMD [ "npm", "start" ]