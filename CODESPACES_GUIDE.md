# 🚀 Guide Rapide - GitHub Codespaces

## 📝 Instructions pour Démarrer

### **Étape 1 : Créer un Codespace**

1. Allez sur votre repository : https://github.com/heiva987/WEB-MIHAERE-DEPOT
2. Cliquez sur le bouton vert **"< > Code"**
3. Sélectionnez l'onglet **"Codespaces"**
4. Cliquez sur **"Create codespace on genspark_ai_developer"**
   (ou sur le **+** si un codespace existe déjà)

⏳ **Attendez 1-2 minutes** que l'environnement se prépare...

---

### **Étape 2 : Lancer le Site**

Une fois dans VS Code en ligne, vous verrez votre projet.

**Option A - Script automatique :**
```bash
./START.sh
```

**Option B - Commande manuelle :**
```bash
python3 -m http.server 8000
```

📱 **Une notification apparaîtra en bas à droite :**
> "Your application running on port 8000 is available."

Cliquez sur **"Open in Browser"** ou **"Ouvrir dans le navigateur"**

---

### **Étape 3 : Modifier Votre Site**

#### 📂 **Fichiers Principaux**

**Dans l'explorateur de fichiers à gauche, ouvrez :**

1. **`GUIDE_MODIFICATION.md`** ← 📖 **LISEZ CE FICHIER EN PREMIER !**
   - Guide complet de toutes les modifications possibles
   - Exemples de code prêts à copier-coller
   - Solutions aux problèmes courants

2. **`css/style.css`** ← 🎨 Pour changer les couleurs et le design

3. **`js/products.js`** ← 🛍️ Pour ajouter/modifier les produits

4. **`index.html`** ← 📄 Pour changer le contenu et le texte

---

## 🎯 **Modifications Rapides (Copy-Paste)**

### 🎨 **Changer la Couleur Principale**

**Fichier :** `css/style.css` (ligne 9)

**Bleu :**
```css
--primary-color: #0ea5e9;
```

**Rouge :**
```css
--primary-color: #ef4444;
```

**Vert :**
```css
--primary-color: #10b981;
```

**Rose :**
```css
--primary-color: #ec4899;
```

---

### 🛍️ **Ajouter un Produit**

**Fichier :** `js/products.js` (à la fin du tableau, avant `];`)

**Copiez-collez ça :**
```javascript
    ,
    {
        id: 17,
        name: "Votre Produit",
        category: "electronics",
        price: 99.99,
        description: "Description de votre produit",
        rating: 4.5,
        reviews: 100,
        icon: "🎮",
        badge: "Nouveau"
    }
```

**N'oubliez pas la virgule `,` avant `{` !**

---

### 📝 **Changer le Nom de la Boutique**

**Fichier :** `index.html`

**Ligne 24 :**
```html
<h1>VOTRE NOM ICI</h1>
```

**Ligne 234 :**
```html
<h3>VOTRE NOM ICI</h3>
```

---

## 🔄 **Voir Vos Changements**

1. **Sauvegardez** le fichier : `Ctrl+S` (Windows/Linux) ou `Cmd+S` (Mac)
2. **Rechargez** la page du site : `Ctrl+R` ou `F5`
3. **Admirez** vos modifications ! 🎉

---

## 💾 **Sauvegarder Vos Modifications**

### **Dans le Terminal (en bas de VS Code) :**

```bash
# Voir ce qui a changé
git status

# Sauvegarder tous les changements
git add .

# Créer un commit
git commit -m "Description de vos modifications"

# Envoyer sur GitHub
git push
```

---

## 🎓 **Navigation dans VS Code**

### **Panneaux Principaux :**

- **📁 Explorateur** (à gauche) : Voir tous les fichiers
- **🔍 Recherche** : Trouver du texte dans tous les fichiers
- **🌿 Source Control** : Gérer Git
- **▶️ Run & Debug** : Déboguer le code
- **⚙️ Extensions** : Installer des outils
- **💻 Terminal** (en bas) : Taper des commandes

### **Raccourcis Utiles :**

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Sauvegarder | `Ctrl+S` | `Cmd+S` |
| Rechercher | `Ctrl+F` | `Cmd+F` |
| Remplacer | `Ctrl+H` | `Cmd+H` |
| Terminal | `Ctrl+J` | `Cmd+J` |
| Palette de commandes | `Ctrl+Shift+P` | `Cmd+Shift+P` |

---

## 🆘 **Problèmes Courants**

### ❓ **Le site ne s'affiche pas ?**

1. Vérifiez que le serveur tourne dans le terminal
2. Cliquez sur l'onglet **"PORTS"** en bas
3. Cherchez le port **8000**
4. Cliquez sur l'icône **🌐** pour ouvrir

---

### ❓ **Mes changements ne s'affichent pas ?**

1. **Sauvegardez** le fichier (`Ctrl+S`)
2. **Videz le cache** du navigateur (`Ctrl+Shift+R` ou `Cmd+Shift+R`)
3. **Vérifiez** que vous avez modifié le bon fichier

---

### ❓ **Erreur "SyntaxError" ?**

Vous avez probablement oublié :
- Une virgule `,` entre les éléments
- Un guillemet fermant `"`
- Une accolade fermante `}` ou `]`

**Astuce :** VS Code souligne les erreurs en rouge !

---

### ❓ **Le site est cassé après une modification ?**

**Annuler vos changements :**
```bash
# Annuler les modifications d'un fichier
git checkout -- nom_du_fichier

# Ou annuler TOUT
git reset --hard
```

---

## 📱 **Tester en Mode Mobile**

1. **Ouvrez** le site dans le navigateur
2. **Appuyez** sur `F12` pour ouvrir les outils développeur
3. **Cliquez** sur l'icône 📱 (responsive design mode)
4. **Testez** différentes tailles d'écran

---

## 🎨 **Extensions VS Code Recommandées**

Si elles ne sont pas déjà installées :

- **Live Server** : Rechargement automatique
- **Prettier** : Formatage automatique du code
- **HTML CSS Support** : Autocomplétion CSS
- **Auto Close Tag** : Ferme automatiquement les balises HTML

**Installation :**
1. Cliquez sur l'icône **Extensions** (4 carrés à gauche)
2. Recherchez l'extension
3. Cliquez sur **Install**

---

## 💡 **Astuces Pro**

### **Dupliquer une Ligne**
`Shift+Alt+↓` : Duplique la ligne actuelle en dessous

### **Déplacer une Ligne**
`Alt+↑` ou `Alt+↓` : Déplace la ligne vers le haut ou le bas

### **Commenter/Décommenter**
`Ctrl+/` : Transforme en commentaire (ou inverse)

### **Sélection Multiple**
`Alt+Clic` : Créer plusieurs curseurs pour écrire à plusieurs endroits

### **Rechercher/Remplacer Partout**
`Ctrl+Shift+F` : Rechercher dans tous les fichiers

---

## 📚 **Ressources Utiles**

- **📖 Guide Complet** : Lisez `GUIDE_MODIFICATION.md`
- **🎨 Palettes de Couleurs** : https://coolors.co/
- **🖼️ Images Gratuites** : https://unsplash.com/
- **🎭 Emojis** : https://emojipedia.org/
- **📘 Documentation VS Code** : https://code.visualstudio.com/docs

---

## ✅ **Checklist de Démarrage**

- [ ] J'ai créé un Codespace
- [ ] J'ai lancé le serveur (`./START.sh`)
- [ ] Le site s'affiche dans mon navigateur
- [ ] J'ai lu le fichier `GUIDE_MODIFICATION.md`
- [ ] J'ai testé de modifier une couleur
- [ ] J'ai sauvegardé mes modifications avec Git

---

## 🎯 **Prochaines Étapes**

1. ✏️ **Personnalisez** les couleurs de votre site
2. 🛍️ **Ajoutez** vos propres produits
3. 📝 **Changez** le nom de la boutique
4. 📸 **Ajoutez** de vraies images de produits
5. 🚀 **Déployez** votre site (Netlify, Vercel, GitHub Pages)

---

**Bon développement ! 🚀**

Besoin d'aide ? Consultez `GUIDE_MODIFICATION.md` pour plus de détails !
