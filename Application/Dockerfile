FROM node:14.8.0-alpine3.11
LABEL maintainer="Edwin Muraya"

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .
RUN npm install

EXPOSE 3000 80
CMD [ "npm", "start" ]
