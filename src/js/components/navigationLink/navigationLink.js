import { router } from "/src/js/main.js"

import "../navigationLink/navigationLink.css";

//Функция для ссылкок в шапке
export function getNavigationLink(path, title = "") {
  let link = document.createElement("a");
  link.href = path;
  link.classList.add("navigation-link");
  link.textContent = title;

  //Оброботчик событий click
  link.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate(path);
  });

  return link;
}
