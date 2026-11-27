# ---- Build stage: compile the Angular app ----
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies first to leverage Docker layer caching
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Build the production bundle
COPY . .
RUN npx ng build --configuration production

# ---- Serve stage: static files via nginx ----
FROM nginx:1.27-alpine

# SPA routing + caching/compression config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Angular output (browser builder) lands in dist/nthierry-portfolio
COPY --from=build /app/dist/nthierry-portfolio /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
