# Stage 1: Build React App
FROM node:20-alpine AS build

# Set working directory inside the container
WORKDIR /saviti_saviti_ui_garden_build_checks2

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy all project files
COPY . .

# Build the production version of the app
RUN npm run build

# Stage 2: Serve using Nginx
FROM nginx:stable-alpine

# Copy build output to Nginx html folder
COPY --from=build /saviti_saviti_ui_garden_build_checks2/build /usr/share/nginx/html

# Expose port 8018
EXPOSE 8018

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
