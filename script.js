// Переклади
const translations = {
  ua: {
    subtitle: "Простір, який піклується не лише про фізичний, а і про внутрішній стан.",
    socialTitle: "Ми в соцмережах",
    directionsTitle: "Напрямки",
    contactsTitle: "Контакти",
    footerText: "© 2026 Erra Studio. Всі права захищені.",
    phoneLabel1: "Адміністратор:",
    phoneLabel2: "Адміністратор:"
  },
  en: {
    subtitle: "A space that cares not only about the physical but also the inner state.",
    socialTitle: "We are on social media",
    directionsTitle: "Directions",
    contactsTitle: "Contacts",
    footerText: "© 2026 Erra Studio. All rights reserved.",
    phoneLabel1: "Administrator:",
    phoneLabel2: "Administrator:"
  }
};

// Функція перемикання мови
function setLanguage(lang) {
  document.getElementById("subtitle").textContent = translations[lang].subtitle;
  document.getElementById("social-title").textContent = translations[lang].socialTitle;
  document.getElementById("directions-title").textContent = translations[lang].directionsTitle;
  document.getElementById("contacts-title").textContent = translations[lang].contactsTitle;
  document.getElementById("footer-text").textContent = translations[lang].footerText;
  document.getElementById("phone-label-1").textContent = translations[lang].phoneLabel1;
  document.getElementById("phone-label-2").textContent = translations[lang].phoneLabel2;
}

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = "none";
    }
  }
};

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
});

