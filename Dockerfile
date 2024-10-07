# Use a specific Node.js version from the official Node.js Alpine image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app will run on (8080 in this case)
EXPOSE 8080

# Define the command to run the app
CMD ["npm", "start"]