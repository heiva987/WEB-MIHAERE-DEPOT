# 🛒 MIHAERE SHOP - Site E-commerce

Un site e-commerce moderne et responsive développé avec HTML, CSS et JavaScript vanilla.

## ✨ Fonctionnalités

### 🎨 Interface Utilisateur
- Design moderne et élégant avec animations fluides
- Interface 100% responsive (mobile, tablette, desktop)
- Navigation intuitive avec scroll fluide
- Thème de couleurs professionnel

### 🛍️ Catalogue de Produits
- 16 produits répartis en 4 catégories :
  - 📱 Électronique (smartphones, laptops, écouteurs, montres)
  - 👕 Mode (vêtements, chaussures, accessoires)
  - 🏠 Maison (meubles, décoration, électroménager)
  - ⚽ Sports (équipements sportifs, fitness)
- Système de filtrage par catégorie
- Fonction de recherche en temps réel
- Tri par prix (croissant/décroissant) et nom
- Affichage des notes et avis clients
- Badges promotionnels (Nouveau, Promo, Premium)

### 🛒 Panier d'Achat
- Ajout/suppression de produits
- Modification des quantités
- Calcul automatique des totaux
- Sauvegarde dans le localStorage
- Compteur de produits en temps réel
- Livraison gratuite à partir de 50€

### 💳 Processus de Commande
- Résumé de commande complet
- Calcul des frais de livraison
- Validation de commande
- Notifications toast élégantes

### 📱 Sections Supplémentaires
- Section "À propos" avec les avantages de la boutique
- Formulaire de contact fonctionnel
- Footer complet avec liens et réseaux sociaux

## 🚀 Démarrage Rapide

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Python 3 (pour le serveur de développement) ou tout autre serveur HTTP

### Installation

1. Cloner le repository
```bash
git clone [URL_DU_REPO]
cd webapp
```

2. Lancer le serveur local
```bash
python3 -m http.server 8000
```

3. Ouvrir dans le navigateur
```
http://localhost:8000
```

## 📁 Structure du Projet

```
webapp/
├── index.html          # Page principale
├── css/
│   └── style.css      # Styles CSS
├── js/
│   ├── products.js    # Base de données produits
│   ├── cart.js        # Gestion du panier
│   └── main.js        # Logique principale
├── images/            # Images (à ajouter)
├── data/              # Données (optionnel)
└── README.md          # Documentation
```

## 🎯 Utilisation

### Navigation
- **Cliquez** sur les liens de navigation pour accéder aux différentes sections
- **Recherchez** des produits via la barre de recherche
- **Filtrez** par catégorie avec les boutons de filtre
- **Triez** les produits par prix ou nom

### Panier
- **Cliquez** sur "Ajouter" pour ajouter un produit au panier
- **Ouvrez** le panier en cliquant sur l'icône 🛒
- **Modifiez** les quantités avec les boutons + et -
- **Retirez** des produits avec le bouton "Retirer"
- **Validez** votre commande avec "Passer commande"

### Raccourcis Clavier
- **C** : Ouvrir/fermer le panier
- **Échap** : Fermer le modal du panier

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `css/style.css` :
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --dark-color: #1e293b;
    --light-color: #f8fafc;
}
```

### Produits
Ajoutez ou modifiez des produits dans `js/products.js` :
```javascript
{
    id: 17,
    name: "Nouveau Produit",
    category: "electronics",
    price: 99.99,
    description: "Description du produit",
    rating: 4.5,
    reviews: 100,
    icon: "🎮",
    badge: "Nouveau"
}
```

## 🔧 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec animations
- **JavaScript ES6+** : Logique interactive
- **Font Awesome** : Icônes
- **LocalStorage** : Persistance du panier

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à toutes les tailles d'écran :
- 📱 Mobile : < 768px
- 📱 Tablette : 768px - 1024px
- 💻 Desktop : > 1024px

## 🌟 Améliorations Futures

- [ ] Système de paiement intégré (Stripe, PayPal)
- [ ] Authentification utilisateur
- [ ] Backend avec base de données
- [ ] Système de commentaires et avis
- [ ] Wishlist / Liste de souhaits
- [ ] Comparateur de produits
- [ ] Images réelles des produits
- [ ] Multi-langues
- [ ] Mode sombre

## 👨‍💻 Développement

Le site utilise uniquement des technologies front-end :
- Aucune dépendance npm
- Pas de build process
- Fonctionne directement dans le navigateur

## 📄 Licence

Ce projet est sous licence MIT.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📞 Contact

Pour toute question ou suggestion, utilisez le formulaire de contact sur le site.

---

**Développé avec ❤️ par MIHAERE SHOP**
