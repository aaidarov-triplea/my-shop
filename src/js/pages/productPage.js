import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { getDesc } from "/src/js/components/desc/desc.js";
//Страница Товара
export function getProductPage(title) {
  const page = document.createElement("div");
  page.classList.add("page", "product-page", "container");

  //Присваиваем загаловок с вызывая функцию getMainTitle(text) где text передаем "Продукт"
  const mainTitle = getMainTitle(title);
  const desc = getDesc("Страница в разработке");

  page.append(mainTitle, desc);
  return page;
}
