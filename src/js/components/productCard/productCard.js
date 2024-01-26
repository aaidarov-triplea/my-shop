import { router } from "/src/js/main.js";

import '../productCard/productCard.css'

//Функция для создание карточки
export function getProductCard(title, price) {
  const item = document.createElement("li");
  item.classList.add("product-list__item");

  const productTitle = document.createElement("h2");
  productTitle.classList.add("product-list__title");

  let productLink = document.createElement("a");
  productLink.textContent = title;
  productLink.href = "";

  productLink.addEventListener("click", function (event) {
    event.preventDefault();

    router.navigate(`/product/${title}`);
  });

  productTitle.append(productLink);

  const productPrice = document.createElement("strong");
  productPrice.classList.add("product-list__price");
  productPrice.textContent = `${price} Руб`;

  const addBasket = document.createElement("button");
  addBasket.classList.add("btn");
  addBasket.textContent = "В корзину";

  item.append(productLink, productPrice, addBasket);
  return item;
}
