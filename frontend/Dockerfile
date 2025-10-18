# Gunakan Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan lockfile untuk install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file project
COPY . .

# Expose port Vite dev server
EXPOSE 5173

# Jalankan Vite
CMD ["npm", "run", "dev"]
