#!/bin/bash

echo "🔄 Pulling latest changes from Git..."
git pull origin main || {
  echo "❌ Git pull failed. Abbruch."; exit 1;
}

echo "📦 Building Docker image..."
docker compose build || {
  echo "❌ Build fehlgeschlagen. Abbruch."; exit 1;
}

echo "🚀 Starting containers..."
docker compose up -d || {
  echo "❌ Start fehlgeschlagen. Abbruch."; exit 1;
}

echo "✅ Deployment erfolgreich abgeschlossen! 🎉"
