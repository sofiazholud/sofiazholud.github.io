const translations = {
    ua: {
        subtitle: "Простір, який піклується не лише про фізичний, а і про внутрішній стан.",
        studioTitle: "Про студію",
        studioText: "Насичені і збалансовані тренування, сертифіковані тренери, семінари за різними тематиками, медитації, подорожі… все це чекає саме на тебе!",
        directionsTitle: "Напрямки",
        directionsList: ["Флай Йога","Ішвара Йога","Йога Айенгара","Пілатес","Флай Пілатес","Функціональні тренування","Флай Кідс","Йога для вагітних та післяпологова йога"],
        projectsTitle: "Наші проєкти",
        contactsTitle: "Контакти",
        footerText: "© 2026 Erra Studio. Всі права захищені."
    },
    en: {
        subtitle: "A space that cares not only about the physical but also the inner state.",
        studioTitle: "About Studio",
        studioText: "Balanced trainings, certified coaches, seminars on various topics, meditations, journeys… all this awaits you!",
        directionsTitle: "Directions",
        directionsList: ["Fly Yoga","Ishvara Yoga","Iyengar Yoga","Pilates","Fly Pilates","Functional Training","Fly Kids","Yoga for Pregnancy and Postpartum"],
        projectsTitle: "Our Projects",
        contactsTitle: "Contacts",
        footerText: "© 2026 Erra Studio. All rights reserved."
    }
};

function setLanguage(lang) {
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    document.getElementById("studio-title").textContent = translations[lang].studioTitle;
    document.getElementById("studio-text").textContent = translations[lang].studioText;
    document.getElementById("directions-title").textContent = translations[lang].directionsTitle;
    document.getElementById("directions-list").innerHTML = translations[lang].directionsList.map(item => `<li>${item}</li>`).join("");
    document.getElementById("projects-title").textContent = translations[lang].projectsTitle;
    document.getElementById("contacts-title").textContent = translations[lang].contactsTitle;
    document.getElementById("footer-text").textContent = translations[lang].footerText;
}
