# --- Build Stage ---
    FROM node:20-alpine AS build
    WORKDIR /app
    
    # Installiere Abhängigkeiten
    COPY package*.json ./
    RUN npm install
    
    # Kopiere den Rest des Codes
    COPY . .
    RUN npm run build
    
    # --- Production Stage ---
    FROM node:20-alpine
    WORKDIR /app
    
    ENV NODE_ENV=production
    
    # Kopiere alles vom Build-Stage
    COPY --from=build /app ./
    
    # Installiere nur Produktions-Abhängigkeiten
    RUN npm install --omit=dev
    
    EXPOSE 3000
    
    # Starte die Anwendung
    CMD ["node", "build"]
    