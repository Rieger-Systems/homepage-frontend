# --- Build Stage ---
    FROM node:20-alpine AS build
    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install
    
    COPY . .
    RUN npm run build
    
    # --- Production Stage ---
    FROM node:20-alpine
    WORKDIR /app
    
    ENV NODE_ENV=production
    
    # Nur das Notwendige übernehmen
    COPY --from=build /app/build ./build
    COPY --from=build /app/package.json ./
    COPY --from=build /app/node_modules ./node_modules
    
    EXPOSE 3000
    
    CMD ["node", "build/index.js"]
    