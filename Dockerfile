FROM node:16.13.1
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./src ./
RUN npm i
COPY . ./
CMD ["npm", "run", "start"]