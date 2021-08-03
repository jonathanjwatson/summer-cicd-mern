FROM node:14

# Create app directory
RUN mkdir =p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /usr/src/app/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
RUN npm run-script build

# Bundle app source
COPY . /usr/src/app


CMD [ "npm", "start" ]