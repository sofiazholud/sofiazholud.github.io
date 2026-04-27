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
    "dir-fly-yoga": "Флай Йога",
    "dir-ishvara-yoga": "Ішвара Йога",
    "dir-iyengar-yoga": "Йога Айенгара",
    "dir-pilates": "Пілатес",
    "dir-fly-pilates": "Флай Пілатес",
    "dir-functional-training": "Функціональні тренування",
    "dir-fly-class": "Флай Кідс",
    "dir-pregnancy-yoga": "Йога для вагітних",
    "dir-adho-yoga": "Адхо-йога",
    "cta-button": "Записатися на заняття",
    "address-1": "📍 Вишгород, пр. Шевченка 6А",
    "address-2": "📍 КМ Межріччя, вул. Фісташкова 60",
    "nav-btn-1": "Навігація",
    "nav-btn-2": "Навігація"
  },
  en: {
    subtitle: "A space that cares not only about the physical but also the inner state.",
    socialTitle: "We are on social media",
    directionsTitle: "Directions",
    contactsTitle: "Contacts",
    footerText: "© 2026 Erra Studio. All rights reserved.",
    phoneLabel1: "Administrator:",
    phoneLabel2: "Administrator:",
    "dir-fly-yoga": "Fly Yoga",
    "dir-ishvara-yoga": "Ishvara Yoga",
    "dir-iyengar-yoga": "Iyengar Yoga",
    "dir-pilates": "Pilates",
    "dir-fly-pilates": "Fly Pilates",
    "dir-functional-training": "Functional Training",
    "dir-fly-class": "Fly Kids",
    "dir-pregnancy-yoga": "Pregnancy Yoga",
    "dir-adho-yoga": "Adho Yoga",
    "cta-button": "Book a class",
    "address-1": "📍 Vyshhorod, Shevchenka Ave 6A",
    "address-2": "📍 KM Mezhrichchia, Fistashkova St 60",
    "nav-btn-1": "Navigation",
    "nav-btn-2": "Navigation"
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
// окремо для тих ключів, які у словнику названі інакше
  document.getElementById("subtitle").textContent = dict.subtitle;
  document.getElementById("social-title").textContent = dict.socialTitle;
  document.getElementById("directions-title").textContent = dict.directionsTitle;
  document.getElementById("contacts-title").textContent = dict.contactsTitle;
  document.getElementById("footer-text").textContent = dict.footerText;
  document.getElementById("phone-label-1").textContent = dict.phoneLabel1;
  document.getElementById("phone-label-2").textContent = dict.phoneLabel2;
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
