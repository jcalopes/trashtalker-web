FROM nginx:stable-alpine

COPY /dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]