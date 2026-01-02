// Products Database
const products = [
    {
        id: 1,
        name: "Smartphone Premium",
        category: "electronics",
        price: 699.99,
        description: "Dernier modèle avec caméra 108MP",
        rating: 4.5,
        reviews: 234,
        icon: "📱",
        badge: "Nouveau"
    },
    {
        id: 2,
        name: "Laptop Pro",
        category: "electronics",
        price: 1299.99,
        description: "Processeur haute performance, 16GB RAM",
        rating: 4.8,
        reviews: 189,
        icon: "💻",
        badge: null
    },
    {
        id: 3,
        name: "Écouteurs Sans Fil",
        category: "electronics",
        price: 149.99,
        description: "Réduction de bruit active, 30h d'autonomie",
        rating: 4.3,
        reviews: 567,
        icon: "🎧",
        badge: "Promo"
    },
    {
        id: 4,
        name: "Montre Connectée",
        category: "electronics",
        price: 299.99,
        description: "Suivi santé et fitness complet",
        rating: 4.6,
        reviews: 432,
        icon: "⌚",
        badge: null
    },
    {
        id: 5,
        name: "T-Shirt Premium",
        category: "fashion",
        price: 29.99,
        description: "100% coton bio, coupe moderne",
        rating: 4.4,
        reviews: 156,
        icon: "👕",
        badge: null
    },
    {
        id: 6,
        name: "Jean Slim",
        category: "fashion",
        price: 79.99,
        description: "Denim stretch, coupe ajustée",
        rating: 4.2,
        reviews: 234,
        icon: "👖",
        badge: "Tendance"
    },
    {
        id: 7,
        name: "Sneakers Sport",
        category: "fashion",
        price: 119.99,
        description: "Confort optimal, design moderne",
        rating: 4.7,
        reviews: 389,
        icon: "👟",
        badge: null
    },
    {
        id: 8,
        name: "Veste en Cuir",
        category: "fashion",
        price: 199.99,
        description: "Cuir véritable, style intemporel",
        rating: 4.5,
        reviews: 98,
        icon: "🧥",
        badge: "Premium"
    },
    {
        id: 9,
        name: "Canapé 3 Places",
        category: "home",
        price: 899.99,
        description: "Tissu haut de gamme, très confortable",
        rating: 4.6,
        reviews: 145,
        icon: "🛋️",
        badge: null
    },
    {
        id: 10,
        name: "Lampe Design",
        category: "home",
        price: 59.99,
        description: "Éclairage LED, intensité réglable",
        rating: 4.3,
        reviews: 267,
        icon: "💡",
        badge: null
    },
    {
        id: 11,
        name: "Tapis Moderne",
        category: "home",
        price: 129.99,
        description: "Laine naturelle, 200x300cm",
        rating: 4.4,
        reviews: 89,
        icon: "🏠",
        badge: "Nouveau"
    },
    {
        id: 12,
        name: "Cafetière Automatique",
        category: "home",
        price: 249.99,
        description: "15 bars, réservoir 1.8L",
        rating: 4.7,
        reviews: 523,
        icon: "☕",
        badge: null
    },
    {
        id: 13,
        name: "Vélo VTT",
        category: "sports",
        price: 599.99,
        description: "Cadre aluminium, 21 vitesses",
        rating: 4.5,
        reviews: 178,
        icon: "🚴",
        badge: null
    },
    {
        id: 14,
        name: "Haltères 20kg",
        category: "sports",
        price: 89.99,
        description: "Set complet avec support",
        rating: 4.6,
        reviews: 234,
        icon: "🏋️",
        badge: null
    },
    {
        id: 15,
        name: "Tapis de Yoga",
        category: "sports",
        price: 39.99,
        description: "Antidérapant, 6mm épaisseur",
        rating: 4.4,
        reviews: 456,
        icon: "🧘",
        badge: "Promo"
    },
    {
        id: 16,
        name: "Ballon de Football",
        category: "sports",
        price: 34.99,
        description: "Taille 5, qualité professionnelle",
        rating: 4.3,
        reviews: 312,
        icon: "⚽",
        badge: null
    }
];

// Display Products
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);

    const stars = '⭐'.repeat(Math.floor(product.rating));

    card.innerHTML = `
        <div style="position: relative;">
            <div class="product-image">${product.icon}</div>
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <span class="stars">${stars}</span>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-footer">
                <span class="product-price">${product.price.toFixed(2)} €</span>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Ajouter
                </button>
            </div>
        </div>
    `;

    return card;
}

// Get Category Name in French
function getCategoryName(category) {
    const categories = {
        electronics: 'Électronique',
        fashion: 'Mode',
        home: 'Maison',
        sports: 'Sports'
    };
    return categories[category] || category;
}

// Filter Products by Category
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Sort Products
function sortProducts(sortType) {
    let sorted = [...products];

    switch(sortType) {
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            sorted = products;
    }

    displayProducts(sorted);
}

// Search Products
function searchProducts(query) {
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        getCategoryName(product.category).toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filtered);
}

// Initialize Products Display
displayProducts(products);
