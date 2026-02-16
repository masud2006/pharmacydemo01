// ========== DATA ==========
const categories = [
    'Prescription Medicine',
    'Surgical Product',
    'OTC Medicine',
    'Personal Care Products',
    'Dental & Oral Care Products',
    'Diabetic Care Products',
    'Supplements And Vitamins',
    'Baby Care Products'
];

// Emoji mapping for each category
const categoryEmoji = {
    'Prescription Medicine': '💊',
    'Surgical Product': '🩺',
    'OTC Medicine': '💊',
    'Personal Care Products': '🧴',
    'Dental & Oral Care Products': '🦷',
    'Diabetic Care Products': '🩸',
    'Supplements And Vitamins': '🍊',
    'Baby Care Products': '👶'
};

// Products list based on your data
const products = [
    // Prescription Medicine
    { id: 'prod_0_1', name: 'Napa Extra 500mg', price: 120, category: 'Prescription Medicine', image: categoryEmoji['Prescription Medicine'] },
    { id: 'prod_0_2', name: 'Ace 500mg', price: 110, category: 'Prescription Medicine', image: categoryEmoji['Prescription Medicine'] },
    { id: 'prod_0_3', name: 'Seclo 20mg', price: 85, category: 'Prescription Medicine', image: categoryEmoji['Prescription Medicine'] },
    { id: 'prod_0_4', name: 'Ceevit 500mg', price: 60, category: 'Prescription Medicine', image: categoryEmoji['Prescription Medicine'] },
    { id: 'prod_0_5', name: 'Monas 10mg', price: 150, category: 'Prescription Medicine', image: categoryEmoji['Prescription Medicine'] },

    // Surgical Product
    { id: 'prod_1_1', name: 'Digital Thermometer', price: 350, category: 'Surgical Product', image: categoryEmoji['Surgical Product'] },
    { id: 'prod_1_2', name: 'BP Machine (Manual)', price: 1450, category: 'Surgical Product', image: categoryEmoji['Surgical Product'] },
    { id: 'prod_1_3', name: 'Surgical Mask (Box 50 pcs)', price: 300, category: 'Surgical Product', image: categoryEmoji['Surgical Product'] },
    { id: 'prod_1_4', name: 'Sterile Cotton 100gm', price: 90, category: 'Surgical Product', image: categoryEmoji['Surgical Product'] },
    { id: 'prod_1_5', name: 'Elastic Bandage', price: 180, category: 'Surgical Product', image: categoryEmoji['Surgical Product'] },

    // OTC Medicine
    { id: 'prod_2_1', name: 'Entacyd Syrup', price: 95, category: 'OTC Medicine', image: categoryEmoji['OTC Medicine'] },
    { id: 'prod_2_2', name: 'ORS Saline (SMC)', price: 25, category: 'OTC Medicine', image: categoryEmoji['OTC Medicine'] },
    { id: 'prod_2_3', name: 'Histacin 10mg', price: 40, category: 'OTC Medicine', image: categoryEmoji['OTC Medicine'] },
    { id: 'prod_2_4', name: 'Imotil Capsule', price: 50, category: 'OTC Medicine', image: categoryEmoji['OTC Medicine'] },
    { id: 'prod_2_5', name: 'Napa 500mg', price: 80, category: 'OTC Medicine', image: categoryEmoji['OTC Medicine'] },

    // Personal Care Products
    { id: 'prod_3_1', name: 'Savlon Antiseptic Liquid 250ml', price: 180, category: 'Personal Care Products', image: categoryEmoji['Personal Care Products'] },
    { id: 'prod_3_2', name: 'Dettol Soap', price: 75, category: 'Personal Care Products', image: categoryEmoji['Personal Care Products'] },
    { id: 'prod_3_3', name: 'Vaseline Petroleum Jelly 100ml', price: 160, category: 'Personal Care Products', image: categoryEmoji['Personal Care Products'] },
    { id: 'prod_3_4', name: 'Johnson’s Body Lotion 200ml', price: 320, category: 'Personal Care Products', image: categoryEmoji['Personal Care Products'] },
    { id: 'prod_3_5', name: 'Hand Sanitizer 200ml', price: 150, category: 'Personal Care Products', image: categoryEmoji['Personal Care Products'] },

    // Dental & Oral Care Products
    { id: 'prod_4_1', name: 'Colgate Toothpaste 200gm', price: 220, category: 'Dental & Oral Care Products', image: categoryEmoji['Dental & Oral Care Products'] },
    { id: 'prod_4_2', name: 'Oral-B Toothbrush', price: 120, category: 'Dental & Oral Care Products', image: categoryEmoji['Dental & Oral Care Products'] },
    { id: 'prod_4_3', name: 'Listerine Mouthwash 250ml', price: 350, category: 'Dental & Oral Care Products', image: categoryEmoji['Dental & Oral Care Products'] },
    { id: 'prod_4_4', name: 'Sensodyne Repair Toothpaste', price: 280, category: 'Dental & Oral Care Products', image: categoryEmoji['Dental & Oral Care Products'] },
    { id: 'prod_4_5', name: 'Dental Floss', price: 180, category: 'Dental & Oral Care Products', image: categoryEmoji['Dental & Oral Care Products'] },

    // Diabetic Care Products
    { id: 'prod_5_1', name: 'Glucometer', price: 1800, category: 'Diabetic Care Products', image: categoryEmoji['Diabetic Care Products'] },
    { id: 'prod_5_2', name: 'Glucose Test Strips (25 pcs)', price: 900, category: 'Diabetic Care Products', image: categoryEmoji['Diabetic Care Products'] },
    { id: 'prod_5_3', name: 'Insulin Syringe', price: 25, category: 'Diabetic Care Products', image: categoryEmoji['Diabetic Care Products'] },
    { id: 'prod_5_4', name: 'Accu-Chek Lancets (100 pcs)', price: 650, category: 'Diabetic Care Products', image: categoryEmoji['Diabetic Care Products'] },
    { id: 'prod_5_5', name: 'Sugar-Free Biscuit', price: 120, category: 'Diabetic Care Products', image: categoryEmoji['Diabetic Care Products'] },

    // Supplements And Vitamins
    { id: 'prod_6_1', name: 'Vitamin C 1000mg', price: 250, category: 'Supplements And Vitamins', image: categoryEmoji['Supplements And Vitamins'] },
    { id: 'prod_6_2', name: 'Calcium + D3', price: 320, category: 'Supplements And Vitamins', image: categoryEmoji['Supplements And Vitamins'] },
    { id: 'prod_6_3', name: 'B-Complex Capsule', price: 180, category: 'Supplements And Vitamins', image: categoryEmoji['Supplements And Vitamins'] },
    { id: 'prod_6_4', name: 'Zinc 20mg', price: 200, category: 'Supplements And Vitamins', image: categoryEmoji['Supplements And Vitamins'] },
    { id: 'prod_6_5', name: 'Multivitamin Tablet', price: 350, category: 'Supplements And Vitamins', image: categoryEmoji['Supplements And Vitamins'] },

    // Baby Care Products
    { id: 'prod_7_1', name: 'Johnson’s Baby Oil 200ml', price: 350, category: 'Baby Care Products', image: categoryEmoji['Baby Care Products'] },
    { id: 'prod_7_2', name: 'Baby Diaper (M Size 40 pcs)', price: 750, category: 'Baby Care Products', image: categoryEmoji['Baby Care Products'] },
    { id: 'prod_7_3', name: 'Baby Wipes (80 pcs)', price: 220, category: 'Baby Care Products', image: categoryEmoji['Baby Care Products'] },
    { id: 'prod_7_4', name: 'Baby Lotion 200ml', price: 300, category: 'Baby Care Products', image: categoryEmoji['Baby Care Products'] },
    { id: 'prod_7_5', name: 'Baby Feeding Bottle', price: 280, category: 'Baby Care Products', image: categoryEmoji['Baby Care Products'] }
];

// ========== STATE ==========
let selectedCategory = null; // null = all categories
let searchTerm = '';
let cart = [];

// ========== DOM ELEMENTS ==========
const filterDiv = document.getElementById('filterButtons');
const productsContainer = document.getElementById('productsContainer');
const searchInput = document.getElementById('searchInput');
const cartIcon = document.getElementById('cartIcon');
const cartPanel = document.getElementById('cartPanel');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItemsDiv = document.getElementById('cartItems');
const cartTotalSpan = document.getElementById('cartTotal');
const cartCountSpan = document.getElementById('cartCount');
const prescriptionBtn = document.getElementById('prescriptionBtn');
const fileInput = document.getElementById('fileInput');
const fileNameDiv = document.getElementById('fileName');
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

// ========== MOBILE MENU TOGGLE ==========
hamburger.addEventListener('click', () => {
    if (navMobile.style.display === 'block') {
        navMobile.style.display = 'none';
    } else {
        navMobile.style.display = 'block';
    }
});

// Close mobile menu when clicking a link (optional)
navMobile.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMobile.style.display = 'none';
    }
});

// ========== RENDER FILTER BUTTONS ==========
function renderFilterButtons() {
    let html = `<button class="filter-btn ${selectedCategory === null ? 'active' : ''}" data-category="all">All</button>`;
    categories.forEach(cat => {
        html += `<button class="filter-btn ${selectedCategory === cat ? 'active' : ''}" data-category="${cat}">${cat}</button>`;
    });
    filterDiv.innerHTML = html;
}
renderFilterButtons();

// ========== RENDER PRODUCTS (category sections) ==========
function renderProducts() {
    let containerHTML = '';

    // Determine which categories to show based on selectedCategory
    const categoriesToShow = selectedCategory ? [selectedCategory] : categories;

    categoriesToShow.forEach(cat => {
        // filter products by category AND search term
        let catProducts = products.filter(p => p.category === cat && p.name.toLowerCase().includes(searchTerm.toLowerCase()));

        if (catProducts.length === 0) return; // skip category if no products after search

        // show first 5 products
        const displayProducts = catProducts.slice(0, 5);

        containerHTML += `
            <div class="category-section" data-category="${cat}">
                <h3>${cat}</h3>
                <div class="products-grid">
        `;

        displayProducts.forEach(p => {
            containerHTML += `
                <div class="product-card" data-product-id="${p.id}">
                    <div class="product-img">${p.image}</div>
                    <h4>${p.name}</h4>
                    <div class="price">${p.price} BDT</div>
                    <button class="add-to-cart" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-image="${p.image}">Add to Cart</button>
                </div>
            `;
        });

        containerHTML += `</div>`;

        // "See More" button if at least 5 products exist in this category (original, not after search)
        const originalCatCount = products.filter(p => p.category === cat).length;
        if (originalCatCount >= 5) {
            containerHTML += `<button class="see-more" data-category="${cat}">See More</button>`;
        }

        containerHTML += `</div>`;
    });

    productsContainer.innerHTML = containerHTML || '<p style="text-align:center; padding:2rem;">No products match your search.</p>';
}

// ========== FILTER EVENT (delegation) ==========
filterDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        const cat = e.target.dataset.category;
        selectedCategory = cat === 'all' ? null : cat;
        renderFilterButtons();
        renderProducts();
    }
});

// ========== SEARCH ==========
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderProducts();
});

// ========== CART FUNCTIONS ==========
function addToCart(productId, name, price, image) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: productId, name, price, image, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    // render cart items
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align:center;color:#777;">Your cart is empty.</p>';
        cartTotalSpan.innerText = '0 BDT';
        cartCountSpan.innerText = '0';
        return;
    }

    let itemsHtml = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        itemsHtml += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-img">${item.image}</div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div>${item.price} BDT</div>
                </div>
                <div class="cart-item-actions">
                    <button class="qty-decrease" data-id="${item.id}">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-increase" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">🗑️</button>
                </div>
            </div>
        `;
    });

    cartItemsDiv.innerHTML = itemsHtml;
    cartTotalSpan.innerText = total + ' BDT';
    cartCountSpan.innerText = cart.reduce((acc, i) => acc + i.quantity, 0);
}

// cart event delegation
cartItemsDiv.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (!id) return;

    if (e.target.classList.contains('qty-increase')) {
        const item = cart.find(i => i.id === id);
        if (item) item.quantity += 1;
    } else if (e.target.classList.contains('qty-decrease')) {
        const item = cart.find(i => i.id === id);
        if (item && item.quantity > 1) item.quantity -= 1;
        else if (item && item.quantity === 1) {
            cart = cart.filter(i => i.id !== id);
        }
    } else if (e.target.classList.contains('remove-item')) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartDisplay();
});

// ========== PRODUCT CONTAINER EVENT (add to cart + see more) ==========
productsContainer.addEventListener('click', (e) => {
    // Add to cart
    if (e.target.classList.contains('add-to-cart')) {
        const btn = e.target;
        const id = btn.dataset.id;
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        const image = btn.dataset.image;
        addToCart(id, name, price, image);
    }

    // See more
    if (e.target.classList.contains('see-more')) {
        alert('This Page is under maintenance');
    }
});

// ========== CART PANEL TOGGLE ==========
cartIcon.addEventListener('click', () => {
    cartPanel.classList.add('open');
    overlay.classList.add('show');
});

closeCart.addEventListener('click', () => {
    cartPanel.classList.remove('open');
    overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
    cartPanel.classList.remove('open');
    overlay.classList.remove('show');
});

// ========== PRESCRIPTION UPLOAD ==========
prescriptionBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        fileNameDiv.textContent = '📎 ' + e.target.files[0].name;
    } else {
        fileNameDiv.textContent = '';
    }
});

// ========== HERO SLIDER ==========
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const dotsContainer = document.getElementById('dots');
let currentSlide = 0;
let slideInterval;

// create dots
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    slider.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentSlide = index;
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

nextBtn.addEventListener('click', () => { nextSlide(); resetInterval(); });
prevBtn.addEventListener('click', () => { prevSlide(); resetInterval(); });
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.index);
        showSlide(idx);
        resetInterval();
    });
});

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
}
function resetInterval() {
    clearInterval(slideInterval);
    startAutoSlide();
}
startAutoSlide();

// ========== INITIAL RENDER ==========
renderProducts();
updateCartDisplay();

// ========== CLOSE MOBILE MENU ON RESIZE (if window becomes desktop) ==========
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        navMobile.style.display = 'none';
    }
});