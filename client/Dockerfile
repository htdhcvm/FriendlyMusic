FROM node:14
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@7.14.0
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]