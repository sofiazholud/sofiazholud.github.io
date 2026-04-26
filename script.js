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
        
        // Назви напрямків
        "fly-yoga": "Флай Йога",
        "ishvara-yoga": "Ішвара Йога",
        "adho-yoga": "Адхо-йога",
        
        // Описи (новинка)
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
        
        // Назви напрямків
        "fly-yoga": "Fly Yoga",
        "ishvara-yoga": "Ishvara Yoga",
        "adho-yoga": "ADHO Yoga",
        
        // Описи
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
function toggleText(button) {
    const desc = button.nextElementSibling;
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
        button.innerText = (document.documentElement.lang === "en") ? "Hide" : "Згорнути";
    } else {
        desc.style.display = "none";
        button.innerText = (document.documentElement.lang === "en") ? "More details" : "Детальніше";
    }
}
