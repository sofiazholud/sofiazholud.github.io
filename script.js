// Переклади
const translations = {
  ua: {
    subtitle: "Простір, який піклується не лише про фізичний, а і про внутрішній стан.",
    socialTitle: "Ми в соцмережах",
    directionsTitle: "Напрямки",
    contactsTitle: "Контакти",
    footerText: "© 2026 Erra Studio. Всі права захищені.",
    phoneLabel1: "Адміністратор:",
    phoneLabel2: "Адміністратор:",
    "dir-fly-yoga": "Флай Йога"
  },
  en: {
    subtitle: "A space that cares not only about the physical but also the inner state.",
    socialTitle: "We are on social media",
    directionsTitle: "Directions",
    contactsTitle: "Contacts",
    footerText: "© 2026 Erra Studio. All rights reserved.",
    phoneLabel1: "Administrator:",
    phoneLabel2: "Administrator:",
    "dir-fly-yoga": "Fly Yoga"
  }
};

// Функція перемикання мови
function setLanguage(lang) {
  const dict = translations[lang];
  for (const key in dict) {
    const el = document.getElementById(key);
    if (el) {
      el.textContent = dict[key];
    }
  }
}

// Відкриття модального вікна
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("show");
    modal.classList.remove("hide");
  }
}

// Закриття модального вікна
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("hide");
    setTimeout(() => {
      modal.classList.remove("show");
    }, 300);
  }
}

// Закриття при кліку на фон
window.onclick = function(event) {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      closeModal(modals[i].id);
    }
  }
};

// Закриття по Esc
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
      closeModal(modals[i].id);
    }
  }
});
