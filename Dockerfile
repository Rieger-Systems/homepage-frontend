# --- Build Stage ---
    FROM node:20-alpine AS build
    WORKDIR /app
    
    # Install dependencies
    COPY package*.json ./
    RUN npm install
    
    # Copy all source files
    COPY . .
    RUN npm run build
    
    # --- Production Stage ---
    FROM node:20-alpine
    WORKDIR /app
    
    ENV NODE_ENV=production
    
    # Copy built app and package files
    COPY --from=build /app ./
    
    # Install only production dependencies
    RUN npm install --omit=dev
    
    EXPOSE 3000
    
    # Start the app
    CMD ["node", "build/index.js"]
    