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

// Перевірка мобільного
function isMobile() {
  return window.innerWidth <= 768; || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}

// Відкриття/закриття акордеону під карткою (мобільний)
function toggleAccordion(id) {
  const card = document.querySelector(`[data-card="${id}"]`);
  const existing = card.parentNode.querySelector(".card-description");

  // Якщо вже відкритий — закриваємо
  if (existing) {
    existing.remove();
    card.classList.remove("card-active");
    return;
  }

  // Закриваємо всі інші
  document.querySelectorAll(".card-description").forEach(el => el.remove());
  document.querySelectorAll(".card-active").forEach(el => el.classList.remove("card-active"));

  // Беремо текст з модального вікна
  const modal = document.getElementById(id);
  const title = modal.querySelector("h2").textContent;
  const text = modal.querySelector("p").textContent;

  // Створюємо блок опису
  const desc = document.createElement("div");
  desc.className = "card-description";
  desc.innerHTML = `
    <button class="card-desc-close" onclick="closeAccordion('${id}')">×</button>
    <h3>${title}</h3>
    <p>${text}</p>
  `;

  card.classList.add("card-active");
  card.parentNode.insertAdjacentElement("afterend", desc);

  // Плавний скрол до опису
  setTimeout(() => {
    desc.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 50);
}

function closeAccordion(id) {
  const desc = document.querySelector(".card-description");
  if (desc) desc.remove();
  const card = document.querySelector(`[data-card="${id}"]`);
  if (card) card.classList.remove("card-active");
}

// Головна функція відкриття
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("show");
    modal.classList.remove("hide");
  }
}

// Закриття модального вікна (десктоп)
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("hide");
    setTimeout(() => {
      modal.classList.remove("show");
      modal.classList.remove("hide");
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
    document.querySelectorAll(".card-description").forEach(el => el.remove());
    document.querySelectorAll(".card-active").forEach(el => el.classList.remove("card-active"));
  }
});
