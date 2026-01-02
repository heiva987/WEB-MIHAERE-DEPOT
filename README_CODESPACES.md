# 🚀 Démarrage Rapide avec GitHub Codespaces

> **Modifiez votre site e-commerce directement dans votre navigateur !**

---

## 📋 **3 Étapes Simples**

### **1️⃣ Créer votre Codespace**

1. Sur cette page GitHub, cliquez sur **`< > Code`** (bouton vert)
2. Allez dans l'onglet **`Codespaces`**
3. Cliquez sur **`Create codespace on genspark_ai_developer`**

**⏳ Patientez 1-2 minutes...**

---

### **2️⃣ Lancer le Site**

Dans le terminal (en bas de VS Code), tapez :

```bash
./START.sh
```

Ou simplement :

```bash
python3 -m http.server 8000
```

**✅ Cliquez sur "Open in Browser" quand la notification apparaît**

---

### **3️⃣ Modifier et Voir les Résultats**

1. **Ouvrez** un fichier dans l'explorateur de gauche
2. **Modifiez** le code
3. **Sauvegardez** avec `Ctrl+S` (ou `Cmd+S` sur Mac)
4. **Rechargez** la page du site pour voir vos changements

**C'est tout ! 🎉**

---

## 📚 **Guides Disponibles**

| Fichier | Description |
|---------|-------------|
| 📘 **[CODESPACES_GUIDE.md](./CODESPACES_GUIDE.md)** | Guide rapide Codespaces (démarrage, problèmes courants) |
| 📗 **[GUIDE_MODIFICATION.md](./GUIDE_MODIFICATION.md)** | Guide complet de modification (couleurs, produits, contenu) |
| 📙 **[README.md](./README.md)** | Documentation technique du projet |

---

## 🎯 **Que Voulez-Vous Faire ?**

### 🎨 **Changer les Couleurs**
👉 Ouvrez `css/style.css` ligne 9 et changez `--primary-color`

### 🛍️ **Ajouter des Produits**
👉 Ouvrez `js/products.js` et ajoutez un objet au tableau

### 📝 **Modifier le Contenu**
👉 Ouvrez `index.html` et éditez le texte

### 💰 **Changer les Prix**
👉 Ouvrez `js/products.js` et modifiez `price:`

---

## 🆘 **Besoin d'Aide ?**

### Le site ne s'ouvre pas ?
- Vérifiez l'onglet **PORTS** en bas de VS Code
- Cliquez sur l'icône 🌐 à côté du port 8000

### Mes changements ne s'affichent pas ?
- Sauvegardez le fichier (`Ctrl+S`)
- Videz le cache (`Ctrl+Shift+R`)

### Erreur dans le code ?
- Appuyez sur `F12` dans le navigateur
- Regardez la Console pour voir l'erreur

---

## 💾 **Sauvegarder Vos Modifications**

```bash
git add .
git commit -m "Description de vos modifications"
git push
```

---

## ✨ **Commencez Maintenant !**

**👆 Cliquez sur le bouton vert `< > Code` en haut de cette page**

Puis **Codespaces** → **Create codespace**

---

**Bon développement ! 🚀**
