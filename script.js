const translations = {
    ua: {
        subtitle: "Простір, який піклується не лише про фізичний, а і про внутрішній стан.",
        directionsTitle: "Напрямки",
        projectsTitle: "Ми в соцмережах",
        contactsTitle: "Контакти",
        address: "Вишгород, пр. Шевченка 6А",
        phoneLabel: "Адміністратор:",
        footerText: "© 2026 Erra Studio. Всі права захищені.",
        "fly-yoga": "Флай Йога",
        "ishvara-yoga": "Ішвара Йога",
        "iyengar-yoga": "Йога Айенгара",
        "pilates": "Пілатес",
        "fly-pilates": "Флай Пілатес",
        "functional-training": "Функціональні тренування",
        "kids-fly-yoga": "Флай Кідс",
        "pregnancy-yoga": "Йога для вагітних та післяпологова йога",
        "adho-yoga": "Адхо-йога"
    },
    en: {
        subtitle: "A space that cares not only about the physical but also the inner state.",
        directionsTitle: "Directions",
        projectsTitle: "We are on social media",
        contactsTitle: "Contacts",
        address: "Vyshhorod, Shevchenka Ave 6A",
        phoneLabel: "Administrator:",
        footerText: "© 2026 Erra Studio. All rights reserved.",
        "fly-yoga": "Fly Yoga",
        "ishvara-yoga": "Ishvara Yoga",
        "iyengar-yoga": "Iyengar Yoga",
        "pilates": "Pilates",
        "fly-pilates": "Fly Pilates",
        "functional-training": "Functional Training",
        "kids-fly-yoga": "Kids Fly Yoga",
        "pregnancy-yoga": "Pregnancy Yoga",
        "adho-yoga": "ADHO Yoga"
    }
};

function setLanguage(lang) {
    // проходимо по всіх ключах у словнику перекладів
    for (const key in translations[lang]) {
        const el = document.getElementById(key);
        if (el) {
            el.textContent = translations[lang][key];
        }
    }
}
