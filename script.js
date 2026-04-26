const translations = {
    ua: {
        "title": "ERRA SPACE",
        "subtitle": "Простір, який піклується не лише про фізичний, а і про внутрішній стан.",
        "social-title": "Ми в соцмережах",
        "directions-title": "Напрямки",
        "contacts-title": "Контакти",
        "address-1": "📍 Вишгород, пр. Шевченка 6А",
        "address-2": "📍 КМ Межріччя, вул. Фісташкова 60",
        "phone-label-1": "Адміністратор:",
        "phone-label-2": "Адміністратор:",
        "nav-btn-1": "Навігація",
        "nav-btn-2": "Навігація",
        "cta-button": "Записатися на заняття",
        "footer-text": "© 2026 Erra Studio. Всі права захищені.",
        "fly-yoga": "Флай Йога",
        "fly-yoga-desc": "Це унікальне заняття в гамаках, яке допомагає розслабити хребет та відчути невагомість.",
        "btn-more-1": "Детальніше"
    },
    en: {
        "title": "ERRA SPACE",
        "subtitle": "A space that cares not only about the physical but also the inner state.",
        "social-title": "Social Media",
        "directions-title": "Directions",
        "contacts-title": "Contacts",
        "address-1": "📍 Vyshhorod, 6A Shevchenka Ave",
        "address-2": "📍 Mezhyrichchia, 60 Fistashkova St",
        "phone-label-1": "Administrator:",
        "phone-label-2": "Administrator:",
        "nav-btn-1": "Navigation",
        "nav-btn-2": "Navigation",
        "cta-button": "Book a class",
        "footer-text": "© 2026 Erra Studio. All rights reserved.",
        "fly-yoga": "Fly Yoga",
        "fly-yoga-desc": "A unique workout in hammocks that helps relax the spine and feel weightless.",
        "btn-more-1": "More details"
    }
};

// Функція перекладу
function setLanguage(lang) {
    for (const key in translations[lang]) {
        const el = document.getElementById(key);
        if (el) {
            el.textContent = translations[lang][key];
        }
    }
}

// Функція для розгортання тексту (додай її сюди)
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}


// Додаємо слухач для мобільних
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});
