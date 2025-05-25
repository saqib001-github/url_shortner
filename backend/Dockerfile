# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /

# Install dependencies first for better caching
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies including Prisma CLI
RUN npm install 
RUN npm install -g prisma

# Generate Prisma client
RUN prisma generate

# Copy the rest of the application
COPY . .

# Build the app (if needed)
# RUN npm run build

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["sh", "-c", "npm start"]