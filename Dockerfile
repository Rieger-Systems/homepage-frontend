# --- Build-Stage ---
    FROM node:20-alpine AS build
    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install
    
    COPY . .
    RUN npm run build
    
    # --- Production-Stage ---
    FROM node:20-alpine
    WORKDIR /app
    
    ENV NODE_ENV=production
    
    COPY --from=build /app ./
    RUN npm install --omit=dev
    
    EXPOSE 3000
    
    CMD ["node", "build"]
    