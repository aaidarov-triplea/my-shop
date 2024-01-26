import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js";
import { getDesc } from "/src/js/components/desc/desc";
import { router } from "/src/js/main.js";

//Страница Корзины
export function getBasketPage() {
  const page = document.createElement("div");
  page.classList.add("page", "basket-page", "container");

  //Присваиваем загаловок с вызывая функцию getMainTitle(text) где text передаем "Продукт"
  const mainTitle = getMainTitle("Корзина");
  const desc = getDesc("Страница в разработке");

  //ссылка для оформления заказа
  let linkOrder = document.createElement("a");
  linkOrder.href = "";
  linkOrder.classList.add("btn");
  linkOrder.textContent = "Оформление заказа";

  //Оброботчик событий click
  linkOrder.addEventListener("click", function (event) {
    event.preventDefault();

    router.navigate("/order");
  });

  page.append(mainTitle, desc, linkOrder);
  return page;
}
