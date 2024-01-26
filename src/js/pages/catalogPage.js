import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { getDesc } from "/src/js/components/desc/desc.js";

//Страница Каталога
export function getCatalogPage() {
  const page = document.createElement("div");
  page.classList.add("page", "catalog-page", "container");

  //Присваиваем загаловок с вызывая функцию getMainTitle(text) где text передаем "Продукт"
  const mainTitle = getMainTitle("Каталог");
  const desc = getDesc("Страница в разработке");

  page.append(mainTitle, desc);
  return page;
}
