/* ============ PRODUCT DATA ============ */
const PRODUCTS = [
  { id: 1, name_en: "Himalayan Green", name_ne: "हिमाली हरियो", price: 250,
    desc_en: "Light, grassy, and refreshing.", desc_ne: "हल्का, ताजा र स्फूर्तिदायक।",
    img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600&q=80" },
  { id: 2, name_en: "Ilam Black", name_ne: "इलाम कालो", price: 320,
    desc_en: "Bold, malty, morning staple.", desc_ne: "बलियो, माल्टी, बिहानको रोजाइ।",
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80" },
  { id: 3, name_en: "Masala Chai", name_ne: "मसला चिया", price: 280,
    desc_en: "Spiced with cardamom & clove.", desc_ne: "अलैंची र ल्वाङले सुगन्धित।",
    img: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=600&q=80" },
  { id: 4, name_en: "White Peony", name_ne: "सेतो पिओनी", price: 450,
    desc_en: "Delicate floral, hand-picked.", desc_ne: "कोमल फूलको स्वाद, हातले टिपेको।",
    img: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600&q=80" },
  { id: 5, name_en: "Oolong Gold", name_ne: "उलोंग गोल्ड", price: 380,
    desc_en: "Smooth, honey-like finish.", desc_ne: "मिठो, मह जस्तो स्वाद।",
    img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&q=80" },
  { id: 6, name_en: "Chamomile Dream", name_ne: "क्यामोमाइल सपना", price: 300,
    desc_en: "Calming herbal blend.", desc_ne: "शान्त गर्ने जडीबुटी मिश्रण।",
    img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600&q=80" },
];

/* ============ TRANSLATIONS ============ */
const I18N = {
  en: {
    nav_products: "Products", nav_about: "About", nav_gallery: "Gallery",
    nav_contact: "Contact", nav_legal: "Legal",
    hero_eyebrow: "HANDCRAFTED IN NEPAL",
    hero_title: "Brewed with soul. Served with love.",
    hero_lead: "TUNA TEA brings you fresh, aromatic teas crafted from locally sourced Himalayan leaves. Explore our blends, browse the gallery, and reach out to order.",
    hero_cta1: "Browse Products", hero_cta2: "Get in Touch",
    products_title: "Our Products", products_sub: "Tap a tea to see price and contact details.",
    contact_call: "Call to order:", contact_page: "Contact Page",
    about_title: "Our Story",
    about_p1: "TUNA TEA began in the hills of eastern Nepal, where our founder's grandmother brewed her first pot over a wood fire. Today we blend that same warmth with modern care — hand-picking leaves, roasting in small batches, and packaging fresh for every order.",
    about_p2: "Every cup carries the story of the farmers we work with, the morning mist of the hills, and the simple joy of slowing down. We're proud to be a Nepali-owned, family-run tea house.",
    about_f1: "Founded in Ilam", about_f2: "Signature blends", about_f3: "Locally sourced",
    gallery_title: "Inside Our Tea House", gallery_sub: "Watch our machines in action and peek at the craft.",
    gallery_v1: "Tea rolling machine", gallery_v2: "Roasting & drying",
    footer_tag: "Fresh Himalayan teas, brewed with care.",
    footer_links: "Quick Links", footer_contact: "Contact",
    rights: "All rights reserved.",
    contact_title: "Get in Touch", contact_sub: "Order a blend, ask a question, or just say hello.",
    contact_reach: "Reach us",
    form_name: "Name", form_phone: "Phone", form_msg: "Message", form_send: "Send Message",
    legal_title: "Legal Information", legal_sub: "Business registration and compliance details.",
    legal_pan_title: "PAN Registration", legal_pan_label: "PAN Number",
    legal_reg_label: "Registered Name", legal_addr_label: "Registered Address",
    legal_vat_label: "VAT Status", legal_vat_val: "Registered",
    legal_note: "This information is provided in compliance with Nepali business regulations. For official documents, please contact us directly."
  },
  ne: {
    nav_products: "उत्पादनहरू", nav_about: "हाम्रो बारेमा", nav_gallery: "ग्यालरी",
    nav_contact: "सम्पर्क", nav_legal: "कानूनी",
    hero_eyebrow: "नेपालमा हस्तनिर्मित",
    hero_title: "मनबाट बनाइएको। मायाले दिइएको।",
    hero_lead: "टुना टी ले स्थानीय हिमाली पत्तीबाट बनेको ताजा, सुगन्धित चिया ल्याउँछ। हाम्रा मिश्रणहरू हेर्नुहोस्, ग्यालरी हेर्नुहोस्, र अर्डर गर्न सम्पर्क गर्नुहोस्।",
    hero_cta1: "उत्पादन हेर्नुहोस्", hero_cta2: "सम्पर्क गर्नुहोस्",
    products_title: "हाम्रा उत्पादनहरू", products_sub: "मूल्य र सम्पर्क विवरण हेर्न चिया छान्नुहोस्।",
    contact_call: "अर्डर गर्न कल गर्नुहोस्:", contact_page: "सम्पर्क पृष्ठ",
    about_title: "हाम्रो कथा",
    about_p1: "टुना टी को सुरुवात पूर्वी नेपालका पहाडहरूमा भयो, जहाँ हाम्रा संस्थापककी हजुरआमाले दाउराको आगोमा पहिलो चिया बनाउनुभयो। आज हामी त्यही न्यानोपनलाई आधुनिक हेरचाहसँग मिलाउँछौं — पत्ती हातले टिप्ने, सानो ब्याचमा भुट्ने, र प्रत्येक अर्डरको लागि ताजा प्याकेजिङ गर्ने।",
    about_p2: "प्रत्येक कपले हामीले काम गर्ने किसानहरूको कथा, बिहानको कुहिरो, र सुस्त हुने साधारण आनन्द बोकेको हुन्छ। हामी नेपाली स्वामित्वको, पारिवारिक चिया घर हुनुमा गर्व गर्छौं।",
    about_f1: "इलाममा स्थापित", about_f2: "हस्ताक्षर मिश्रण", about_f3: "स्थानीय स्रोत",
    gallery_title: "हाम्रो चिया घर भित्र", gallery_sub: "हाम्रा मेसिनहरू चलिरहेको हेर्नुहोस् र शिल्प झलक हेर्नुहोस्।",
    gallery_v1: "चिया रोलिङ मेसिन", gallery_v2: "भुट्ने र सुकाउने",
    footer_tag: "ताजा हिमाली चिया, मायाले बनाइएको।",
    footer_links: "छिटो लिङ्कहरू", footer_contact: "सम्पर्क",
    rights: "सर्वाधिकार सुरक्षित।",
    contact_title: "सम्पर्क गर्नुहोस्", contact_sub: "मिश्रण अर्डर गर्नुहोस्, प्रश्न सोध्नुहोस्, वा नमस्ते भन्नुहोस्।",
    contact_reach: "हामीसम्म पुग्नुहोस्",
    form_name: "नाम", form_phone: "फोन", form_msg: "सन्देश", form_send: "सन्देश पठाउनुहोस्",
    legal_title: "कानूनी जानकारी", legal_sub: "व्यवसाय दर्ता र अनुपालन विवरण।",
    legal_pan_title: "प्यान दर्ता", legal_pan_label: "प्यान नम्बर",
    legal_reg_label: "दर्ता नाम", legal_addr_label: "दर्ता ठेगाना",
    legal_vat_label: "भ्याट स्थिति", legal_vat_val: "दर्ता भएको",
    legal_note: "यो जानकारी नेपाली व्यवसाय नियमहरूको अनुपालनमा प्रदान गरिएको हो। आधिकारिक कागजातहरूको लागि, कृपया सिधै सम्पर्क गर्नुहोस्।"
  }
};

/* ============ STATE ============ */
let LANG = localStorage.getItem('tuna_lang') || 'en';
let THEME = localStorage.getItem('tuna_theme') || 'light';

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(THEME);
  applyLang(LANG);
  renderProducts();
  wireToggles();
});

/* ============ THEME ============ */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('tuna_theme', t);
  THEME = t;
}

/* ============ LANG ============ */
function applyLang(lang) {
  LANG = lang;
  localStorage.setItem('tuna_lang', lang);
  document.documentElement.setAttribute('lang', lang === 'ne' ? 'ne' : 'en');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  renderProducts(); // re-render names
}

/* ============ PRODUCTS ============ */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" onclick="selectProduct(${p.id})">
      <img src="${p.img}" alt="${p.name_en}">
      <h3>${p['name_' + LANG]}</h3>
      <p class="muted small">${p['desc_' + LANG]}</p>
      <p class="price">रु ${p.price}</p>
    </div>
  `).join('');
}

function selectProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const panel = document.getElementById('selectedPanel');
  document.getElementById('selImg').src = p.img;
  document.getElementById('selName').textContent = p['name_' + LANG];
  document.getElementById('selDesc').textContent = p['desc_' + LANG];
  document.getElementById('selPrice').textContent = 'रु ' + p.price;
  panel.classList.remove('hidden');
  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ============ TOGGLES ============ */
function wireToggles() {
  document.getElementById('themeToggle')?.addEventListener('click',
    () => applyTheme(THEME === 'dark' ? 'light' : 'dark'));
  document.getElementById('langToggle')?.addEventListener('click',
    () => applyLang(LANG === 'en' ? 'ne' : 'en'));
}
