# --- Build Stage ---
    FROM node:20-alpine as builder

    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install
    COPY . .
    
    # Setze Umgebung auf Production vor dem Build
    ENV NODE_ENV=production
    
    RUN npm run build
    
    # --- Production Stage ---
    FROM node:20-alpine
    
    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install --production
    
    COPY --from=builder /app/build ./build
    
    EXPOSE 3000
    
    CMD ["node", "build/index.js"]
    