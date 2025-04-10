# --- Basis-Image ---
    FROM node:20-alpine

    # Arbeitsverzeichnis setzen
    WORKDIR /app
    
    # Nur die wichtigsten Dateien zuerst kopieren (für bessere Caching-Stufen)
    COPY package*.json ./
    
    # Alle Abhängigkeiten inkl. devDependencies installieren
    RUN npm install
    
    # Restliche Projektdateien kopieren
    COPY . .
    
    # SvelteKit-Projekt bauen
    RUN npm run build
    
    # App-Port freigeben (3000 ist Standard bei adapter-node)
    EXPOSE 3000
    
    # Startbefehl für den gebauten Node-Server
    CMD ["node", "build/index.js"]
    