FROM node:6

RUN mkdir /app

WORKDIR /app

COPY ./package.json /app/
RUN npm i

COPY . /app/

RUN npm run build-storybook && npm run build
CMD npm start
