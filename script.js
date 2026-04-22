const translations = {
    ua: {
        subtitle: "Простір, який піклується не лише про фізичний, а і про внутрішній стан.",
        studioTitle: "Про студію",
        studioText: "Насичені і збалансовані тренування, сертифіковані тренери, семінари за різними тематиками, медитації, подорожі… все це чекає саме на тебе!",
        directionsTitle: "Напрямки",
        directionsText: "• Флай Йога\n• Ішвара Йога\n• Йога Айенгара\n• Пілатес\n• Флай Пілатес\n• Функціональні тренування\n• Флай Кідс\n• Йога для вагітних та післяпологова йога",
        projectsTitle: "Ми в соцмережах",
        contactsTitle: "Контакти",
        address: "Вишгород, пр. Шевченка 6А",
        phoneLabel: "Адміністратор:",
        footerText: "© 2026 Erra Studio. Всі права захищені."
    },
    en: {
        subtitle: "A space that cares not only about the physical but also the inner state.",
        studioTitle: "About Studio",
        studioText: "Balanced trainings, certified coaches, seminars on various topics, meditations, journeys… all this awaits you!",
        directionsTitle: "Directions",
        directionsText: "• Fly Yoga\n• Ishvara Yoga\n• Iyengar Yoga\n• Pilates\n• Fly Pilates\n• Functional Training\n• Fly Kids\n• Yoga for Pregnancy and Postpartum",
        projectsTitle: "We are on social media",
        contactsTitle: "Contacts",
        address: "Vyshhorod, Shevchenka Ave 6A",
        phoneLabel: "Administrator:",
        footerText: "© 2026 Erra Studio. All rights reserved."
    }
};

function setLanguage(lang) {
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    document.getElementById("studio-title").textContent = translations[lang].studioTitle;
    document.getElementById("studio-text").textContent = translations[lang].studioText;
    document.getElementById("directions-title").textContent = translations[lang].directionsTitle;
    document.getElementById("directions-text").textContent = translations[lang].directionsText;
    document.getElementById("projects-title").textContent = translations[lang].projectsTitle;
    document.getElementById("contacts-title").textContent = translations[lang].contactsTitle;
    document.getElementById("address").textContent = translations[lang].address;
    document.getElementById("phone-label").textContent = translations[lang].phoneLabel;
    document.getElementById("footer-text").textContent = translations[lang].footerText;
}
