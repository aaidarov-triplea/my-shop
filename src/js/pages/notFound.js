import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";

//Страница не найдена
export function getNotFoundPage() {
  const page = document.createElement("div");
  page.classList.add("page", "product-page", "container");

  //Присваиваем загаловок с вызывая функцию getMainTitle(text) где text передаем "Страница не найдена"
  const mainTitle = getMainTitle("Страница не найдена");

  page.append(mainTitle);
  return page;
}
