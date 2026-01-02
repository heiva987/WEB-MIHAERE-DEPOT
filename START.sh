#!/bin/bash

# Script de démarrage pour MIHAERE SHOP

echo "🛒 ========================================="
echo "   MIHAERE SHOP - Site E-commerce"
echo "=========================================="
echo ""
echo "📂 Répertoire de travail: $(pwd)"
echo ""
echo "🚀 Démarrage du serveur..."
echo ""
echo "✅ Le serveur sera accessible sur:"
echo "   👉 http://localhost:8000"
echo ""
echo "💡 Pour arrêter le serveur: Ctrl+C"
echo ""
echo "📝 Lisez GUIDE_MODIFICATION.md pour modifier le site"
echo ""
echo "=========================================="
echo ""

# Démarrer le serveur
python3 -m http.server 8000
