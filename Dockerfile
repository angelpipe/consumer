# Pull base image
FROM node

# Copy the application folder inside the container
ADD my_app /my_app

# Expose the port in the machine
EXPOSE 8083

# Set the working directory
WORKDIR /my_app

# npm install
RUN npm install

# Specifying the start point
CMD ["node", "index.js"]