const translations = {
    ua: {
        subtitle: "Простір, який піклується не лише про фізичний, а і про внутрішній стан.",
        directionsTitle: "Напрямки",
        projectsTitle: "Ми в соцмережах",
        contactsTitle: "Контакти",
        address: "Вишгород, пр. Шевченка 6А",
        phoneLabel: "Адміністратор:",
        footerText: "© 2026 Erra Studio. Всі права захищені."
    },
    en: {
        subtitle: "A space that cares not only about the physical but also the inner state.",
        directionsTitle: "Directions",
        projectsTitle: "We are on social media",
        contactsTitle: "Contacts",
        address: "Vyshhorod, Shevchenka Ave 6A",
        phoneLabel: "Administrator:",
        footerText: "© 2026 Erra Studio. All rights reserved."
    }
};

function setLanguage(lang) {
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    document.getElementById("directions-title").textContent = translations[lang].directionsTitle;
    document.getElementById("projects-title").textContent = translations[lang].projectsTitle;
    document.getElementById("contacts-title").textContent = translations[lang].contactsTitle;
    document.getElementById("address").textContent = translations[lang].address;
    document.getElementById("phone-label").textContent = translations[lang].phoneLabel;
    document.getElementById("footer-text").textContent = translations[lang].footerText;
}
