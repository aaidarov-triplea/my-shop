import { router } from "/src/js/main.js";

import "../basketBtn/basketBtn.css";
import basketSvg from "bundle-text:/src/assets/img/basket.svg";

export function getBasketBtn() {
  const basketBtn = document.createElement("a");
  basketBtn.href = "/basket";
  basketBtn.classList.add("basket-btn");
  basketBtn.innerHTML = basketSvg;

  //Оброботчик событий click
  basketBtn.addEventListener("click", function (event) {
    event.preventDefault();
    router.navigate("/basket");
  });

  return basketBtn;
}
