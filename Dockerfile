# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

# Nur Produktions-Dependencies
COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/.output .output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
