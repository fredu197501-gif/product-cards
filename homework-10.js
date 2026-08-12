import { catalog } from "./products.js";

const catalogTemplate = document.getElementById("catalog-template");
const catalogList = document.getElementById("catalog-list");

//№4 Используя метод .reduce(), получаем массив объектов, где ключём является название продукта, а значением - его описание
const catalogDescriptions = catalog.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

// №3 Создал шаблон для продуктовых карточек.
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
    catalogClone.querySelector(".catalog-composition .composition__value").textContent = catalog.composition.join(", ");
    catalogClone.querySelector(".catalog-price").innerHTML = `Цена: ${catalog.price.toLocaleString("ru-RU")} ₽`;
    catalogList.appendChild(catalogClone);
  });
}

const cardsCount = getCountFromUser();

const filteredCatalog = catalog.slice(0, cardsCount);
renderCards(filteredCatalog);

console.log(catalogDescriptions);