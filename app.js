const menuData = [
    {
        "id": "item-1",
        "name": "Variante Kahvaltı (2 Kişilik)",
        "price": 1375,
        "desc": "Peynir tabağı, bal&kaymak, zeytin çeşitleri, söğüş tabağı, güveçte yumurta, ekmek çeşitleri, 1 bardak sıcak ballı süt veya 2 fincan çay",
        "category": "kahvalti",
        "popular": true
    },
    {
        "id": "item-2",
        "name": "İzmir Kahvaltısı",
        "price": 400,
        "desc": "1 adet boyoz, İzmir tulumu, ceviz, haşlanmış yumurta, domates, salatalık, ev yapımı reçel ve 2 adet fincan çay",
        "category": "kahvalti",
        "popular": true
    },
    {
        "id": "item-3",
        "name": "Menemen",
        "price": 295,
        "desc": "Kızarmış ekşi maya ekmeği ile",
        "category": "kahvalti"
    },
    {
        "id": "item-4",
        "name": "Güveçte Sucuklu&Kaşarlı Yumurta",
        "price": 345,
        "desc": "Tereyağı, kasap sucuk, iki adet yumurta üzerine kaşar peyniri ile",
        "category": "kahvalti"
    },
    {
        "id": "item-5",
        "name": "Ege Otlu Tulum Peynirli Omlet",
        "price": 325,
        "desc": "İzmir tulum peyniri, zeytinyağı, iki adet yumurta, mevsimlik ege otları",
        "category": "kahvalti"
    },
    {
        "id": "item-6",
        "name": "Variante Kahvaltı Salatası",
        "price": 475,
        "desc": "İzmir tulum peyniri, salatalık, domates, ceviz, ege yeşillikleri, yeşil biber, süt peyniri, kuru domates, kekik, zeytinyağı, kıtır gevrek ile",
        "category": "kahvalti"
    },
    {
        "id": "item-7",
        "name": "Variante Kumru Tost",
        "price": 320,
        "desc": "İzmir Kumru ekmeği içine tereyağı, ev salçası, eski kaşar, domates, fesleğen yanına kızarmış patates ve yeşillik",
        "category": "tostlar",
        "popular": true
    },
    {
        "id": "item-8",
        "name": "Çift Kaşarlı Klasik Tost",
        "price": 290,
        "desc": "Tost ekmeği içine tereyağı, taze kaşar, yanına kızarmış patates ve yeşillik",
        "category": "tostlar"
    },
    {
        "id": "item-9",
        "name": "Ton Balıklı ve Limon Soslu Açık Tost",
        "price": 480,
        "desc": "Ekşi maya ekmeği üzerine özel limon soslu ton balığı çeri domates yanına kızarmış patates ve yeşillik",
        "category": "tostlar"
    },
    {
        "id": "item-10",
        "name": "Domates ve Peynirli Açık Tost",
        "price": 430,
        "desc": "Ekşi maya ekmeği üzerine beyaz peynir, zeytinyağlı domatesli fesleğen sos, ceviz, yeşillik yanına kızartmış patates ve yeşillik",
        "category": "tostlar"
    },
    {
        "id": "item-11",
        "name": "Variante Tavuklu Açık Fırın Tost",
        "price": 510,
        "desc": "Klasik beyaz fırın ekmeği üzerine tavuk, mantar, kapya biber, krema, baharatlar, taze kaşar peyniri yanına kızarmış patates, yeşillik",
        "category": "tostlar"
    },
    {
        "id": "item-12",
        "name": "Sucuklu Bazlama Tost",
        "price": 360,
        "desc": "Ev yapımı bazlama ekmeği içine tereyağı, kasap sucuk, eski kaşar, yanına kızarmış patates ve yeşillik",
        "category": "tostlar"
    },
    {
        "id": "item-13",
        "name": "Sosis & Patates Tava",
        "price": 400,
        "desc": "Kızartılmış dana sosis ve patates özel sos ile",
        "category": "atistirmaliklar"
    },
    {
        "id": "item-14",
        "name": "Variante Ekşili Patates",
        "price": 350,
        "desc": "Zeytinyağında kızartılmış ev patatesi, sarımsaklı limon sos, maydanoz",
        "category": "atistirmaliklar"
    },
    {
        "id": "item-15",
        "name": "Anne Patatesi",
        "price": 370,
        "desc": "Zeytinyağında kızartılmış patates domates sos ve yoğurt eşliğinde",
        "category": "atistirmaliklar"
    },
    {
        "id": "item-16",
        "name": "Bira Tabağı",
        "price": 705,
        "desc": "Patates Kızartması, Sigara böreği, Sosis, Çıtır tavuk parçaları, soğan halkası, patates kroket",
        "category": "atistirmaliklar"
    },
    {
        "id": "item-17",
        "name": "Günün Çorbası",
        "price": 265,
        "desc": "Kıtır Ekmek ile",
        "category": "ana-yemekler"
    },
    {
        "id": "item-18",
        "name": "Izgara Kasap Köfte",
        "price": 690,
        "desc": "Izgara kasap köfte, patates, naneli süzme yoğurt, salata tahin sos eşliğinde",
        "category": "ana-yemekler",
        "chefChoice": true
    },
    {
        "id": "item-19",
        "name": "Kremalı Mantarlı Tavuklu Penne",
        "price": 520,
        "desc": "Penne makarna, jülyen tavuk, mantar ve krema sos",
        "category": "ana-yemekler"
    },
    {
        "id": "item-20",
        "name": "Bolonez Soslu Spagetti",
        "price": 585,
        "desc": "Dana kıyma, havuç, domates sos, çeşitli baharatlar",
        "category": "ana-yemekler"
    },
    {
        "id": "item-21",
        "name": "Ev Mantısı",
        "price": 570,
        "desc": "Dana etli ev mantısı, yoğurt üzerine tereyağlı sos kırmızı biber nane",
        "category": "ana-yemekler"
    },
    {
        "id": "item-22",
        "name": "Izgara Tavuk Şiş",
        "price": 530,
        "desc": "Özel sosu ile marine edilmiş tavuk şiş, biber, çeri domates, yanına baharatlı patates, naneli süzme yoğurt, tahin soslu yeşil salata",
        "category": "ana-yemekler"
    },
    {
        "id": "item-23",
        "name": "Mozaik Pasta",
        "price": 400,
        "desc": "",
        "category": "tatlilar"
    },
    {
        "id": "item-24",
        "name": "Limonlu Cheesecake",
        "price": 450,
        "desc": "",
        "category": "tatlilar",
        "popular": true
    },
    {
        "id": "item-25",
        "name": "Su / Water",
        "price": 75,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-26",
        "name": "Maden Suyu / Mineral Water",
        "price": 110,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-27",
        "name": "Kola / Coco-Cola",
        "price": 150,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-28",
        "name": "Gazoz / Sprite",
        "price": 150,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-29",
        "name": "Fanta / Fanta",
        "price": 150,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-30",
        "name": "Meyve Suyu / Fruit Juice",
        "price": 150,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-31",
        "name": "Taze Sıkılmış Portakal Suyu / Freshly Squeezed Orange Juice",
        "price": 250,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-32",
        "name": "Enerji İçeceği / Energy Drink",
        "price": 190,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-33",
        "name": "Naneli Fesleğenli Ayran / Mint and Basil Flavored Buttermilk",
        "price": 150,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-34",
        "name": "Limonata / Lemonade",
        "price": 245,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-35",
        "name": "Soğuk Çay / İce Tea",
        "price": 150,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-36",
        "name": "Çörçil / Churchill",
        "price": 150,
        "desc": "",
        "category": "soguk-icecekler"
    },
    {
        "id": "item-37",
        "name": "İnce Belli Çay / Slim Waisted Tea",
        "price": 90,
        "desc": "",
        "category": "sicak-icecekler"
    },
    {
        "id": "item-38",
        "name": "Fincan Çay / Cup of Tea",
        "price": 120,
        "desc": "",
        "category": "sicak-icecekler"
    },
    {
        "id": "item-39",
        "name": "Bitki Çayları / Herbal Teas",
        "price": 120,
        "desc": "",
        "category": "sicak-icecekler"
    },
    {
        "id": "item-40",
        "name": "Yeşil Çay / Green Tea",
        "price": 230,
        "desc": "",
        "category": "sicak-icecekler"
    },
    {
        "id": "item-41",
        "name": "Türk Kahvesi / Turkish Coffee",
        "price": 170,
        "desc": "",
        "category": "sicak-icecekler"
    },
    {
        "id": "item-42",
        "name": "Çift Türk Kahvesi / Double Turkish Coffe",
        "price": 220,
        "desc": "",
        "category": "sicak-icecekler"
    },
    {
        "id": "item-43",
        "name": "Filtre Kahve / Filter Coffee",
        "price": 240,
        "desc": "",
        "category": "sicak-icecekler"
    }
];

// Item-specific translations for Turkish items (item-1 to item-24)
const itemTranslations = {
    "item-1": {
        name: "Variante Breakfast (For 2)",
        desc: "Cheese platter, honey & clotted cream, olive varieties, salad platter, baked eggs, bread varieties, 1 cup of hot honey milk or 2 cups of tea"
    },
    "item-2": {
        name: "Izmir Breakfast",
        desc: "1 piece of boyoz, Izmir tulum cheese, walnuts, boiled egg, tomatoes, cucumbers, homemade jam, and 2 cups of tea"
    },
    "item-3": {
        name: "Menemen (Turkish Scrambled Eggs)",
        desc: "Served with toasted sourdough bread"
    },
    "item-4": {
        name: "Baked Eggs with Turkish Sausage & Kasseri",
        desc: "Butter, butcher's Turkish sausage, two eggs topped with kasseri cheese"
    },
    "item-5": {
        name: "Aegean Herb & Tulum Cheese Omelette",
        desc: "Izmir tulum cheese, olive oil, two eggs, and seasonal Aegean herbs"
    },
    "item-6": {
        name: "Variante Breakfast Salad",
        desc: "Izmir tulum cheese, cucumber, tomatoes, walnuts, Aegean greens, green pepper, curd cheese, dried tomatoes, thyme, olive oil, served with crispy crackers"
    },
    "item-7": {
        name: "Variante Kumru Toast",
        desc: "Served in Izmir Kumru bread with butter, homemade tomato paste, aged kasseri, tomatoes, basil. Served with french fries and salad greens"
    },
    "item-8": {
        name: "Double Kasseri Classic Toast",
        desc: "Served in toast bread with butter and fresh kasseri cheese. Served with french fries and salad greens"
    },
    "item-9": {
        name: "Open Toast with Tuna & Lemon Sauce",
        desc: "Toasted sourdough bread topped with tuna in special lemon sauce and cherry tomatoes. Served with french fries and salad greens"
    },
    "item-10": {
        name: "Open Toast with Tomato & Feta Cheese",
        desc: "Toasted sourdough bread topped with feta cheese, tomato-basil sauce in olive oil, walnuts, and salad greens. Served with french fries"
    },
    "item-11": {
        name: "Variante Baked Open Chicken Toast",
        desc: "Classic white bread topped with chicken, mushrooms, capia pepper, cream, spices, and fresh kasseri cheese. Served with french fries and salad greens"
    },
    "item-12": {
        name: "Turkish Sausage Bazlama Toast",
        desc: "Served in homemade flatbread (bazlama) with butter, butcher's Turkish sausage, and aged kasseri. Served with french fries and salad greens"
    },
    "item-13": {
        name: "Sausage & French Fries Platter",
        desc: "Fried beef sausages and potatoes served with a special dip sauce"
    },
    "item-14": {
        name: "Variante Sour Potatoes",
        desc: "Homemade potatoes fried in olive oil, served with garlic-lemon sauce and parsley"
    },
    "item-15": {
        name: "Mom's Style French Fries",
        desc: "Potatoes fried in olive oil, served with tomato sauce and yogurt"
    },
    "item-16": {
        name: "Beer Snack Platter",
        desc: "French fries, crispy spring rolls, sausages, crispy chicken bites, onion rings, and potato croquettes"
    },
    "item-17": {
        name: "Soup of the Day",
        desc: "Served with crispy croutons"
    },
    "item-18": {
        name: "Grilled Butcher's Meatballs",
        desc: "Grilled butcher's meatballs served with french fries, strained yogurt with mint, and fresh salad with tahini sauce"
    },
    "item-19": {
        name: "Penne with Chicken, Mushrooms & Cream",
        desc: "Penne pasta served with julienne chicken, mushrooms, and cream sauce"
    },
    "item-20": {
        name: "Spaghetti Bolognese",
        desc: "Spaghetti served with minced beef, carrots, tomato sauce, and various spices"
    },
    "item-21": {
        name: "Homemade Manti (Turkish Ravioli)",
        desc: "Homemade beef ravioli served with yogurt, warm butter sauce, red pepper flakes, and mint"
    },
    "item-22": {
        name: "Grilled Chicken Skewers",
        desc: "Chicken skewers marinated in special sauce, grilled with peppers and cherry tomatoes. Served with spiced potatoes, strained yogurt with mint, and fresh salad with tahini sauce"
    },
    "item-23": {
        name: "Mosaic Cake",
        desc: "Traditional chocolate and biscuit mosaic dessert"
    },
    "item-24": {
        name: "Lemon Cheesecake",
        desc: "Creamy baked cheesecake with a zesty lemon topping"
    }
};

// UI Translations
const uiTranslations = {
    "tr": {
        "header-subtitle": "Hotel & Cafe",
        "search-placeholder": "Ara...",
        "cat-kahvalti": "Kahvaltı",
        "cat-tostlar": "Tostlar",
        "cat-atistirmaliklar": "Atıştırmalıklar",
        "cat-ana-yemekler": "Ana Yemekler",
        "cat-tatlilar": "Tatlılar",
        "cat-soguk-icecekler": "Soğuk İçecekler",
        "cat-sicak-icecekler": "Sıcak İçecekler",
        "search-results-text": "ürün bulundu",
        "sheet-title": "Kategoriler",
        "no-results-text": "Aramanızla eşleşen ürün bulunamadı.",
        "quote-kahvalti": "\"Yemek yemek üstüne ne düşünürsünüz bilmem ama kahvaltının mutlulukla bir ilgisi olmalı\"",
        "author-kahvalti": "CEMAL SÜREYYA",
        "quote-atistirmaliklar": "\"Yeni bir yemeğin keşfi, insan ırkının mutluluğuna, bir yıldızın keşfedilmesinden daha fazla katkıda bulunur.\"",
        "author-atistirmaliklar": "Jean Anthelme Brillat-Savarin",
        "quote-ana-yemekler": "\"Ağzınızda yemek olduğu an dünyanın tüm sırlarını çözmüşsünüz demektir\"",
        "author-ana-yemekler": "Franz KAFKA",
        "quote-tatlilar": "\"Misafire En iyi ikram, güler yüz ve tatlı dildir.\"",
        "author-tatlilar": "İmam EVZAİ",
        "quote-sicak-icecekler": "\"O çay, sadece bir içecek değil, bir anlık huzurun, bir anlık direncin simgesiydi. Tadı, bir hayatın özü gibiydi, acı ve tatlı karışık, damakta kalan bir tecrübe gibi.\"",
        "author-sicak-icecekler": "Bekle Beni- Syf.19 -Zülfü LİVANELİ"
    },
    "en": {
        "header-subtitle": "Hotel & Cafe",
        "search-placeholder": "Search...",
        "cat-kahvalti": "Breakfast",
        "cat-tostlar": "Toasts",
        "cat-atistirmaliklar": "Appetizers & Snacks",
        "cat-ana-yemekler": "Main Courses",
        "cat-tatlilar": "Desserts",
        "cat-soguk-icecekler": "Cold Drinks",
        "cat-sicak-icecekler": "Hot Drinks",
        "search-results-text": "items found",
        "sheet-title": "Categories",
        "no-results-text": "No matching items found.",
        "quote-kahvalti": "\"I don't know what you think about eating, but breakfast must have something to do with happiness.\"",
        "author-kahvalti": "CEMAL SUREYYA",
        "quote-atistirmaliklar": "\"The discovery of a new dish does more for the happiness of mankind than the discovery of a star.\"",
        "author-atistirmaliklar": "Jean Anthelme Brillat-Savarin",
        "quote-ana-yemekler": "\"The moment you have food in your mouth, you have solved all the mysteries of the world.\"",
        "author-ana-yemekler": "Franz KAFKA",
        "quote-tatlilar": "\"The best hospitality for a guest is a smiling face and sweet words.\"",
        "author-tatlilar": "Imam AWZAI",
        "quote-sicak-icecekler": "\"That tea was not just a drink; it was a symbol of a moment's peace, a moment's resilience. Its taste was like the essence of a life, bitter and sweet mixed, an experience that lingers on the palate.\"",
        "author-sicak-icecekler": "Wait for Me - p.19 - Zulfu LIVANELI"
    }
};

// Application State
const state = {
    lang: localStorage.getItem("variante_menu_lang") || "tr",
    activeCategory: null,
    scrollPos: 0
};

// Global Element Selectors
const elements = {
    html: document.documentElement,
    langToggle: document.getElementById("lang-toggle"),
    langLabel: document.getElementById("lang-label"),
    searchBar: document.getElementById("menu-search"),
    searchClearBtn: document.getElementById("search-clear"),
    searchResultsInfo: document.getElementById("search-results-info"),
    resultsCount: document.getElementById("results-count"),
    categoriesNav: document.getElementById("categories-nav"),
    categoryTabs: document.querySelectorAll(".category-tab"),
    menuSections: document.querySelectorAll(".menu-section-group"),
    noResultsMessage: document.getElementById("no-results-message")
};

// Initialize Application
function init() {
    applyLanguage(state.lang);
    
    renderMenu();
    setupEventListeners();
    setupScrollspy();
}

// -------------------------------------------------------------
// LANGUAGE MANAGEMENT
// -------------------------------------------------------------

function applyLanguage(lang) {
    state.lang = lang;
    elements.html.setAttribute("lang", lang);
    localStorage.setItem("variante_menu_lang", lang);
    
    // Update language label (shows the language you would switch to)
    elements.langLabel.textContent = lang === "tr" ? "EN" : "TR";
    
    // Translate static UI elements with data-localize
    document.querySelectorAll("[data-localize]").forEach(el => {
        const key = el.getAttribute("data-localize");
        if (uiTranslations[lang][key]) {
            el.textContent = uiTranslations[lang][key];
        }
    });

    // Translate placeholder inputs
    document.querySelectorAll("[data-localize-placeholder]").forEach(el => {
        const key = el.getAttribute("data-localize-placeholder");
        if (uiTranslations[lang][key]) {
            el.setAttribute("placeholder", uiTranslations[lang][key]);
        }
    });
    
    // Re-render menu content to display localized item data
    renderMenu();
    
    // Re-render bottom sheet category labels if open or constructed
    renderBottomSheet();
    
    // Recalculate Scrollspy layout in case heights shifted after translation
    runScrollspy();
}

function toggleLanguage() {
    const nextLang = state.lang === "tr" ? "en" : "tr";
    applyLanguage(nextLang);
}

// Helper to get localized name & description for an item
function getItemDetails(item) {
    let name = item.name;
    let desc = item.desc || "";

    // 1. Check if name is split by a slash (TR / EN)
    if (name.includes(" / ")) {
        const parts = name.split(" / ");
        name = state.lang === "tr" ? parts[0].trim() : parts[1].trim();
    } else {
        // 2. Check if a translation exists for this specific food item
        if (state.lang === "en" && itemTranslations[item.id]) {
            name = itemTranslations[item.id].name || name;
            desc = itemTranslations[item.id].desc || desc;
        }
    }

    return { name, desc };
}

// -------------------------------------------------------------
// RENDER MENU & ITEMS
// -------------------------------------------------------------

function renderMenu() {
    // Clear all grids
    const categories = [
        "kahvalti", "tostlar", "atistirmaliklar", 
        "ana-yemekler", "tatlilar", "soguk-icecekler", "sicak-icecekler"
    ];
    
    const grids = {};
    categories.forEach(cat => {
        const grid = document.getElementById(`grid-${cat}`);
        if (grid) {
            grid.innerHTML = "";
            grids[cat] = grid;
        }
    });
    
    // Populate items
    menuData.forEach(item => {
        const grid = grids[item.category];
        if (!grid) return;
        
        const { name, desc } = getItemDetails(item);
        
        // Only append description paragraph if desc actually exists and is not empty
        const descHtml = desc ? `<p class="item-desc">${desc}</p>` : "";
        
        const cardHtml = `
            <div class="menu-item" data-id="${item.id}">
                <div class="item-header">
                    <h4 class="item-name">${name}</h4>
                    <span class="item-dots"></span>
                    <span class="item-price">${item.price} ₺</span>
                </div>
                ${descHtml}
            </div>
        `;
        
        grid.insertAdjacentHTML("beforeend", cardHtml);
    });
    
    // Setup intersection observer for scroll-driven animations
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                cardObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px"
    });
    
    document.querySelectorAll('.menu-item').forEach(card => {
        cardObserver.observe(card);
    });
}

// -------------------------------------------------------------
// SEARCH ENGINE
// -------------------------------------------------------------

function setupSearch() {
    elements.searchBar.addEventListener("input", (e) => {
        const query = e.target.value.toLocaleLowerCase(state.lang).trim();
        
        if (query.length > 0) {
            elements.searchClearBtn.style.display = "block";
            elements.searchResultsInfo.style.display = "block";
            
            let matchedCount = 0;
            
            // Loop through all items and check match
            menuData.forEach(item => {
                const { name, desc } = getItemDetails(item);
                const categoryLocalized = uiTranslations[state.lang][`cat-${item.category}`] || "";
                
                const isMatch = name.toLocaleLowerCase(state.lang).includes(query) || 
                                desc.toLocaleLowerCase(state.lang).includes(query) || 
                                categoryLocalized.toLocaleLowerCase(state.lang).includes(query);
                                
                const card = document.querySelector(`.menu-item[data-id="${item.id}"]`);
                if (card) {
                    if (isMatch) {
                        card.style.display = "flex";
                        matchedCount++;
                    } else {
                        card.style.display = "none";
                    }
                }
            });
            
            elements.resultsCount.textContent = matchedCount;
            
            // Toggle visibility of empty search state
            if (matchedCount === 0) {
                elements.noResultsMessage.style.display = "block";
            } else {
                elements.noResultsMessage.style.display = "none";
            }
            
            // Toggle visibility of category section groups
            elements.menuSections.forEach(section => {
                const cat = section.getAttribute("data-category");
                const grid = document.getElementById(`grid-${cat}`);
                const visibleCards = grid.querySelectorAll('.menu-item[style="display: flex;"]');
                const banner = section.querySelector(".section-banner");
                
                if (visibleCards.length === 0) {
                    section.style.display = "none";
                } else {
                     section.style.display = "block";
                     // Hide quote and banner during search for cleaner list
                     const quote = section.querySelector(".quote-box");
                     if (quote) quote.style.display = "none";
                     if (banner) banner.style.display = "none";
                }
            });
            
            // Hide Category Tabs during search to avoid confusion
            elements.categoriesNav.style.display = "none";
            
        } else {
            // Clear Search
            resetSearch();
        }
    });
    
    elements.searchClearBtn.addEventListener("click", () => {
        elements.searchBar.value = "";
        resetSearch();
        elements.searchBar.focus();
    });
}

function resetSearch() {
    elements.searchClearBtn.style.display = "none";
    elements.searchResultsInfo.style.display = "none";
    elements.noResultsMessage.style.display = "none";
    elements.categoriesNav.style.display = "block";
    
    // Show all cards
    document.querySelectorAll(".menu-item").forEach(card => {
        card.style.display = "flex";
    });
    
    // Show all sections, quote boxes, and medallions
    elements.menuSections.forEach(section => {
        section.style.display = "block";
        const quote = section.querySelector(".quote-box");
        if (quote) quote.style.display = "block";
        const banner = section.querySelector(".section-banner");
        if (banner) banner.style.display = "block";
    });
    
    // Recalculate Scrollspy layout in case heights shifted
    setupScrollspy();
}

// -------------------------------------------------------------
// SCROLLSPY & NAVIGATION HIGHLIGHT
// -------------------------------------------------------------

let isProgrammaticScrolling = false;
let scrollTimeout = null;
let scrollspyThrottled = false;

function setupScrollspy() {
    window.addEventListener("scroll", () => {
        if (isProgrammaticScrolling) return;
        if (scrollspyThrottled) return;
        
        scrollspyThrottled = true;
        requestAnimationFrame(() => {
            runScrollspy();
            scrollspyThrottled = false;
        });
    });
    
    // Run once initially to set the correct tab
    runScrollspy();
}

function runScrollspy() {
    if (elements.searchBar.value.trim().length > 0) return;
    
    const stickyBar = document.querySelector(".sticky-top-bar");
    const offset = stickyBar ? stickyBar.offsetHeight : 130;
    const scrollPos = window.scrollY + offset + 25; // 25px tolerance buffer
    
    // Check if user is at the bottom of the page
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 15) {
        const lastSection = elements.menuSections[elements.menuSections.length - 1];
        if (lastSection) {
            activateCategoryTab(lastSection.getAttribute("data-category"));
            return;
        }
    }
    
    let activeCategory = null;
    
    for (let i = 0; i < elements.menuSections.length; i++) {
        const section = elements.menuSections[i];
        if (scrollPos >= section.offsetTop) {
            activeCategory = section.getAttribute("data-category");
        } else {
            break;
        }
    }
    
    // Fallback to first category if scroll position is above all sections
    if (!activeCategory && elements.menuSections.length > 0) {
        activeCategory = elements.menuSections[0].getAttribute("data-category");
    }
    
    if (activeCategory) {
        activateCategoryTab(activeCategory);
    }
}

function activateCategoryTab(category) {
    if (state.activeCategory === category) return; // Prevent redundant tab animations and horizontal jumping
    state.activeCategory = category;

    elements.categoryTabs.forEach(tab => {
        if (tab.getAttribute("data-category") === category) {
            tab.classList.add("active");
            // Auto-scroll centered category tab into view in horizontal scrollbar without jumping viewport
            const container = elements.categoriesNav;
            if (container) {
                const containerRect = container.getBoundingClientRect();
                const tabRect = tab.getBoundingClientRect();
                const leftOffset = container.scrollLeft + (tabRect.left - containerRect.left) - (container.clientWidth / 2) + (tabRect.width / 2);
                container.scrollTo({ left: leftOffset, behavior: "smooth" });
            }
        } else {
            tab.classList.remove("active");
        }
    });

    // Synchronize bottom sheet navigation highlight
    document.querySelectorAll(".sheet-cat-item").forEach(item => {
        if (item.getAttribute("data-category") === category) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

function scrollToCategory(category) {
    const targetSection = document.getElementById(`sec-${category}`);
    if (targetSection) {
        isProgrammaticScrolling = true;
        clearTimeout(scrollTimeout);
        
        activateCategoryTab(category);
        
        // Calculate scroll destination adjusted for dynamic sticky top bar height
        const stickyBar = document.querySelector(".sticky-top-bar");
        const offset = stickyBar ? stickyBar.offsetHeight : 130;
        const rect = targetSection.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const targetY = Math.round(rect.top + scrollTop - offset);
        
        const currentY = Math.round(window.scrollY);
        if (currentY === targetY) {
            isProgrammaticScrolling = false;
            return;
        }
        
        window.scrollTo({ top: targetY, behavior: "smooth" });
        
        // Safety fallback to release lock if smooth scroll doesn't fire or completes slowly
        scrollTimeout = setTimeout(() => {
            isProgrammaticScrolling = false;
        }, 800);
    }
}

// -------------------------------------------------------------
// BOTTOM SHEET CATEGORIES LIST DYNAMIC DRAWER
// -------------------------------------------------------------

function renderBottomSheet() {
    const list = document.getElementById("sheet-categories-list");
    if (!list) return;
    list.innerHTML = "";
    
    const categories = [
        { id: "kahvalti", icon: "fa-egg" },
        { id: "tostlar", icon: "fa-bread-slice" },
        { id: "atistirmaliklar", icon: "fa-hamburger" },
        { id: "ana-yemekler", icon: "fa-utensils" },
        { id: "tatlilar", icon: "fa-ice-cream" },
        { id: "soguk-icecekler", icon: "fa-glass-water" },
        { id: "sicak-icecekler", icon: "fa-mug-hot" }
    ];
    
    // Check currently active category to apply active class in drawer
    const activeCat = state.activeCategory || "kahvalti";
    
    categories.forEach(cat => {
        const label = uiTranslations[state.lang][`cat-${cat.id}`] || cat.id;
        const activeClass = cat.id === activeCat ? "active" : "";
        const itemHtml = `
            <li class="sheet-cat-item ${activeClass}" data-category="${cat.id}">
                <i class="fa-solid ${cat.icon}"></i>
                <span>${label}</span>
            </li>
        `;
        list.insertAdjacentHTML("beforeend", itemHtml);
    });
    
    // Add click listeners to drawer items
    list.querySelectorAll(".sheet-cat-item").forEach(item => {
        item.addEventListener("click", () => {
            const category = item.getAttribute("data-category");
            closeBottomSheet();
            scrollToCategory(category);
        });
    });
}

function openBottomSheet() {
    const sheet = document.getElementById("bottom-sheet");
    const backdrop = document.getElementById("sheet-backdrop");
    if (sheet && backdrop) {
        renderBottomSheet(); // Dynamic update
        sheet.classList.add("active");
        backdrop.classList.add("active");
        
        // Robust iOS Safari scroll lock (saves position and freezes viewport)
        state.scrollPos = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${state.scrollPos}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
    }
}

function closeBottomSheet() {
    const sheet = document.getElementById("bottom-sheet");
    const backdrop = document.getElementById("sheet-backdrop");
    if (sheet && backdrop) {
        sheet.classList.remove("active");
        backdrop.classList.remove("active");
        
        // Restore background scroll position
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, state.scrollPos);
    }
}

// -------------------------------------------------------------
// EVENT LISTENERS HOOK
// -------------------------------------------------------------

function setupEventListeners() {
    // 1. Controls (Language)
    elements.langToggle.addEventListener("click", toggleLanguage);
    
    // 2. Search Box
    setupSearch();
    
    // 3. Category Tab Clicks
    elements.categoryTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const category = tab.getAttribute("data-category");
            scrollToCategory(category);
        });
    });

    // 4. Floating Action Button (FAB) events
    const fabBtn = document.getElementById("fab-menu-btn");
    const closeBtn = document.getElementById("sheet-close-btn");
    const backdrop = document.getElementById("sheet-backdrop");

    if (fabBtn) fabBtn.addEventListener("click", openBottomSheet);
    if (closeBtn) closeBtn.addEventListener("click", closeBottomSheet);
    if (backdrop) backdrop.addEventListener("click", closeBottomSheet);

    // 5. Scroll listener to release the scrollspy lock after smooth scroll stops
    window.addEventListener("scroll", () => {
        if (isProgrammaticScrolling) {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isProgrammaticScrolling = false;
            }, 150); // 150ms of inactivity indicates scroll has finished
        }
    });
}

// Start App when loaded
window.addEventListener("DOMContentLoaded", init);
