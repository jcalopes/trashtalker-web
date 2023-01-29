FROM nginx:stable-alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist /usr/share/nginx/html

EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]