const translations = {
    ua: {
        subtitle: "Erra Space",
        aboutTitle: "Про нас",
        aboutText: "Простір твого духовного росту та фізичного самовдосконалення",
        contactTitle: "Зв’язатися з нами",
        contactText: "Слідкуйте за нами у соцмережах:",
        footerText: "© 2026 Erra Studio. Всі права захищені."
    },
    en: {
        subtitle: "Erra Space",
        aboutTitle: "About Us",
        aboutText: "A space for your spiritual growth and physical self‑improvement",
        contactTitle: "Contact Us",
        contactText: "Follow us on social media:",
        footerText: "© 2026 Erra Studio. All rights reserved."
    }
};

function setLanguage(lang) {
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    document.getElementById("about-title").textContent = translations[lang].aboutTitle;
    document.getElementById("about-text").textContent = translations[lang].aboutText;
    document.getElementById("contact-title").textContent = translations[lang].contactTitle;
    document.getElementById("contact-text").textContent = translations[lang].contactText;
    document.getElementById("footer-text").textContent = translations[lang].footerText;
}
