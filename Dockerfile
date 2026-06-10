# Use the lightweight Nginx Alpine image
FROM nginx:alpine

# Copy the static files to the Nginx html directory
COPY . /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the web server
EXPOSE 80