import { catalog } from "./products.js";

// №3 Создал шаблон для продуктовых карточек.
const catalogTemplate = document.getElementById("catalog-template");
const catalogList = document.getElementById("catalog-list");

catalog.forEach(catalog => {
  const catalogClone = catalogTemplate.content.cloneNode(true);
  catalogClone.querySelector(".catalog-name").textContent = catalog.name;
  catalogClone.querySelector(".catalog-subtitle").textContent = catalog.subtitle;
  catalogClone.querySelector(".catalog-description").textContent = catalog.description;
  catalogClone.querySelector(".catalog-price").textContent = `${catalog.price.toLocaleString()} \u20AC`;
  catalogClone.querySelector(".catalog-image").src = `./images/${catalog.image}.jpg`;
  catalogClone.querySelector(".catalog-composition").textContent = catalog.composition.join(", ");
  catalogList.appendChild(catalogClone);
});

console.log(catalogList);

//№4 Используя метод .reduce(), получаем массив объектов, где ключём является название продукта, а значением - его описание
const catalogDescriptions = catalog.reduce((acc, catalog) => {
  acc[catalog.name] = catalog.description;
  return acc;
}, {});

// №5 Функция, которая при запуске страницы выводит сообщение через функцию prompt "Сколько карточек отобразить?
// Используем 2 функции, одна возвращает количество карточек,другая - рендерить эти карточки.
function getCountFromUser() {
  let count = prompt("Сколько карточек отобразить? от 1 до 5", "5");
  count = Number(count);
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Неверный ввод! Покажем все 5 карточек.");
    return 5;
  }
  return count;
}

function renderCards(arrayToRender) {
  const catalogList = document.getElementById("catalog-list");
  catalogList.innerHTML = "";
  arrayToRender.forEach(catalog => {
    const catalogTemplate = document.getElementById("catalog-template");
    const catalogClone = catalogTemplate.content.cloneNode(true);
    catalogClone.querySelector(".catalog-image").src = `./images/${catalog.image}.jpg`;
    catalogClone.querySelector(".catalog-name").textContent = catalog.name;
    catalogClone.querySelector(".catalog-subtitle").textContent = catalog.subtitle;
    catalogClone.querySelector(".catalog-description").textContent = catalog.description;
    catalogClone.querySelector(".catalog-price").textContent = `${catalog.price.toLocaleString()} \u20AC`;
    catalogClone.querySelector(".catalog-composition").textContent = catalog.composition.join(", ");
    catalogList.appendChild(catalogClone);
  });
}

const cardsCount = getCountFromUser();

const filteredCatalog = catalog.slice(0, cardsCount);
renderCards(filteredCatalog);