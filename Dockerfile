# ========================================
# BUILD STAGE
# ========================================
FROM node:20-alpine as build-step

# Set working directory
WORKDIR /app

# Install dependencies first (better cache handling)
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# ========================================
# NGINX STAGE
# ========================================
FROM nginx:1.25-alpine

# Clean default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from build stage
COPY --from=build-step /app/build /usr/share/nginx/html

# Optional: Copy custom nginx config if you have one
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port (optional if using Docker Compose)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
