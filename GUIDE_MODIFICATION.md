# 📝 Guide de Modification Facile - MIHAERE SHOP

Bienvenue ! Ce guide vous aidera à modifier facilement votre site e-commerce.

## 🚀 Démarrage Rapide dans Codespaces

### 1. Lancer le Site
Dans le terminal en bas de VS Code, tapez :
```bash
python3 -m http.server 8000
```

Une notification apparaîtra vous proposant d'ouvrir le site. Cliquez sur **"Ouvrir dans le navigateur"**.

### 2. Modifier et Voir les Changements
- Modifiez vos fichiers
- Rechargez la page du navigateur pour voir les changements
- C'est tout ! 🎉

---

## 📁 Fichiers Principaux à Modifier

### 🎨 **Personnalisation Visuelle**
**Fichier : `css/style.css`** (lignes 8-18)

#### Changer les Couleurs
```css
:root {
    --primary-color: #6366f1;     /* Couleur principale (boutons, liens) */
    --secondary-color: #8b5cf6;   /* Couleur secondaire (hover) */
    --dark-color: #1e293b;        /* Couleur texte foncé */
    --light-color: #f8fafc;       /* Couleur fond clair */
}
```

**Exemples de palettes de couleurs :**

**Bleu Océan :**
```css
--primary-color: #0ea5e9;
--secondary-color: #06b6d4;
```

**Rouge Moderne :**
```css
--primary-color: #ef4444;
--secondary-color: #f97316;
```

**Vert Nature :**
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
```

**Rose Élégant :**
```css
--primary-color: #ec4899;
--secondary-color: #d946ef;
```

---

### 🛍️ **Gestion des Produits**
**Fichier : `js/products.js`**

#### Ajouter un Nouveau Produit
Ajoutez ceci à la fin du tableau `products` (avant le `];`) :

```javascript
{
    id: 17,                          // Numéro unique (suivant)
    name: "Nom du Produit",          // Nom affiché
    category: "electronics",         // ou "fashion", "home", "sports"
    price: 99.99,                    // Prix en euros
    description: "Description courte du produit",
    rating: 4.5,                     // Note sur 5
    reviews: 123,                    // Nombre d'avis
    icon: "🎮",                      // Emoji ou icône
    badge: "Nouveau"                 // Badge (ou null pour rien)
}
```

#### Modifier un Produit Existant
Cherchez le produit par son ID et modifiez les valeurs :
```javascript
{
    id: 1,
    name: "NOUVEAU NOM",           // ← Changez ici
    price: 599.99,                  // ← Nouveau prix
    // ... reste inchangé
}
```

#### Supprimer un Produit
Supprimez tout le bloc entre `{` et `},` du produit concerné.

---

### 📄 **Contenu du Site**
**Fichier : `index.html`**

#### Changer le Nom de la Boutique
**Lignes 22-25 :**
```html
<h1>VOTRE NOM DE BOUTIQUE</h1>
```

**Ligne 234 :** (dans le footer)
```html
<h3>VOTRE NOM DE BOUTIQUE</h3>
```

**Ligne 250 :** (copyright)
```html
<p>&copy; 2026 VOTRE NOM DE BOUTIQUE. Tous droits réservés.</p>
```

#### Modifier le Texte du Hero (Bannière)
**Lignes 40-43 :**
```html
<h2>Votre Slogan Principal</h2>
<p>Votre sous-titre ou description</p>
```

#### Modifier la Section "À Propos"
**Lignes 159-186 :**
Changez les textes dans chaque `.about-card` :
```html
<h3>Votre Titre</h3>
<p>Votre description</p>
```

---

### ⚙️ **Paramètres du Panier**
**Fichier : `js/cart.js`**

#### Modifier les Frais de Livraison
**Ligne 77 :**
```javascript
const shipping = subtotal > 0 ? (subtotal >= 50 ? 0 : 4.99) : 0;
//                                          ↑      ↑
//                        Seuil livraison gratuite  Frais de livraison
```

**Exemples :**
- Livraison gratuite à partir de 100€ avec 7.99€ de frais :
```javascript
const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 7.99) : 0;
```

- Toujours gratuit :
```javascript
const shipping = 0;
```

---

## 🎯 **Modifications Rapides Courantes**

### 1. Ajouter Vos Propres Produits

**Exemple complet à copier-coller dans `js/products.js` :**

```javascript
{
    id: 17,
    name: "MacBook Pro M3",
    category: "electronics",
    price: 2399.99,
    description: "Puce M3 Pro, 18GB RAM, 512GB SSD",
    rating: 4.9,
    reviews: 856,
    icon: "💻",
    badge: "Premium"
},
{
    id: 18,
    name: "Chemise Lin Blanche",
    category: "fashion",
    price: 49.99,
    description: "Lin naturel, coupe slim, respirant",
    rating: 4.3,
    reviews: 167,
    icon: "👔",
    badge: null
}
```

### 2. Ajouter une Nouvelle Catégorie

**Étape 1 :** Dans `index.html` (ligne ~59), ajoutez :
```html
<button class="filter-btn" data-category="beauty">Beauté</button>
```

**Étape 2 :** Dans `js/products.js`, ajoutez des produits avec :
```javascript
category: "beauty",
```

**Étape 3 :** Dans `js/products.js` (fonction `getCategoryName`, ligne 54), ajoutez :
```javascript
beauty: 'Beauté',
```

### 3. Changer les Icônes des Produits

Utilisez des emojis ou des icônes Font Awesome :

**Emojis :**
```javascript
icon: "🎮",  // Console de jeu
icon: "👗",  // Robe
icon: "🏠",  // Maison
icon: "⚽",  // Football
```

**Font Awesome :**
```javascript
icon: '<i class="fas fa-laptop"></i>',
```

### 4. Personnaliser les Messages de Notification

**Fichier : `js/cart.js`**

**Ligne 24 :** Message ajout au panier
```javascript
showToast(`${product.name} ajouté au panier!`, 'success');
// Changez en :
showToast(`✅ ${product.name} a été ajouté !`, 'success');
```

---

## 🔧 **Commandes Utiles dans le Terminal**

```bash
# Démarrer le serveur
python3 -m http.server 8000

# Voir les modifications Git
git status

# Sauvegarder vos modifications
git add .
git commit -m "Description de vos changements"
git push

# Revenir à la version précédente
git checkout -- nom_du_fichier
```

---

## 🆘 **Problèmes Courants**

### Le site ne se charge pas ?
1. Vérifiez que le serveur est lancé : `python3 -m http.server 8000`
2. Ouvrez l'onglet "PORTS" en bas de VS Code
3. Cliquez sur l'icône 🌐 à côté du port 8000

### Mes changements n'apparaissent pas ?
1. Sauvegardez le fichier (`Ctrl+S` ou `Cmd+S`)
2. Rechargez la page (`Ctrl+R` ou `Cmd+R`)
3. Videz le cache (`Ctrl+Shift+R` ou `Cmd+Shift+R`)

### Erreur JavaScript ?
1. Ouvrez la Console du navigateur (`F12`)
2. Vérifiez les erreurs en rouge
3. Corrigez la syntaxe (virgules, accolades, guillemets)

---

## 📚 **Raccourcis Clavier VS Code**

- `Ctrl+S` / `Cmd+S` : Sauvegarder
- `Ctrl+F` / `Cmd+F` : Rechercher dans le fichier
- `Ctrl+H` / `Cmd+H` : Rechercher et remplacer
- `Ctrl+/` / `Cmd+/` : Commenter/décommenter
- `Alt+↑↓` : Déplacer une ligne
- `Shift+Alt+↓` : Dupliquer une ligne

---

## 🎨 **Ressources Utiles**

### Couleurs
- **Coolors** : https://coolors.co/ (générateur de palettes)
- **Color Hunt** : https://colorhunt.co/ (palettes prêtes)

### Icônes
- **Emojipedia** : https://emojipedia.org/ (emojis)
- **Font Awesome** : https://fontawesome.com/icons (icônes)

### Images
- **Unsplash** : https://unsplash.com/ (photos gratuites)
- **Pexels** : https://www.pexels.com/ (photos gratuites)

---

## ✅ **Checklist Avant de Publier**

- [ ] Tous les prix sont corrects
- [ ] Les noms de produits sont bien écrits
- [ ] Les couleurs sont harmonieuses
- [ ] Le site fonctionne sur mobile (testez avec `F12` > icône mobile)
- [ ] Tous les liens fonctionnent
- [ ] Le panier fonctionne correctement
- [ ] Les modifications sont sauvegardées (`git push`)

---

## 🤝 **Besoin d'Aide ?**

Si vous avez besoin d'aide pour :
- Ajouter une fonctionnalité spécifique
- Corriger un bug
- Personnaliser le design
- Intégrer un système de paiement

N'hésitez pas à demander ! 😊

---

**Bon développement ! 🚀**
