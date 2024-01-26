import { getProductCard } from "/src/js/components/productCard/ProductCard.js";
import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
//Главная страница
export function getMainPage() {
  const page = document.createElement("div");
  page.classList.add("page", "main-page", "container");

  //Присваиваем загаловок с вызывая функцию getMainTitle(text) где text передаем "Главная страница"
  const mainTitle = getMainTitle("Главная страница");

  const list = document.createElement("ul");
  list.classList.add("product-list", "list-reset");

  list.append(
    getProductCard("Товар_1", 400),
    getProductCard("Товар_2", 300),
    getProductCard("Товар_3", 700)
  );

  page.append(mainTitle, list);
  return page;
}
