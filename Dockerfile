# Stage 1: Build React App
FROM node:20-alpine AS build-react
WORKDIR /saviti_saviti_ui_garden

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything (including public/)
COPY . .

# Build React app
RUN npm run build

# Stage 2: Build Storybook
FROM node:20-alpine AS build-storybook
WORKDIR /saviti_saviti_ui_garden

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything (ensure public/ exists)
COPY public ./public
COPY . .

# Build Storybook
RUN npm run build-storybook

# Stage 3: Serve both with Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

# Copy React app build
RUN mkdir -p /usr/share/nginx/html/app
COPY --from=build-react /saviti_saviti_ui_garden/build /usr/share/nginx/html/app

# Copy Storybook build
RUN mkdir -p /usr/share/nginx/html/storybook
COPY --from=build-storybook /saviti_saviti_ui_garden/storybook-static /usr/share/nginx/html/storybook

# Copy nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
