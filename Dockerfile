# Start from node base
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Import our code
COPY . .

# Bundle our code
RUN npm run build

# Run build and start app
CMD npm start