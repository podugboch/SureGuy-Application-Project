# Use official Node.js image as the base
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on (change if you use a different port)
EXPOSE 5000

# Start the application
CMD ["npm", "run", "dev"]