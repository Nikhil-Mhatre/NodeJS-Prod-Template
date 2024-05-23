FROM node:10-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4757
CMD ["npm", "run", "start"]
