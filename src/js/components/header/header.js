import { getNavigationLink } from "/src/js/components/navigationLink/navigationLink";
import { getBasketBtn } from "/src/js/components/basketBtn/basketBtn";
import { getLogo } from "/src/js/components/logo/logo";


//Функция создать шапку
export function getHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  //div внутри шапки
  const container = document.createElement("div");
  container.classList.add("container", "header__container");

  const logo = getLogo()
  logo.classList.add('header__logo')

  const basketBtn = getBasketBtn()

  //создаем nav элемент внутри шапки
  const nav = document.createElement("nav");
  nav.classList.add("header__navigation");

  //Объект со ссылками
  const links = {
    home: getNavigationLink("/", "Главная страница"),
    catalog: getNavigationLink("/catalog", "Каталог"),
    basket: basketBtn,
  };

  //цикл for in постовляет ссылки из links в nav для отрисовки
  for(const oneLink in links) {
    nav.append(links[oneLink])
  }

  //Фукция для проверки какая ссылка  активна
  const setActiveLink = function(link = ''){
    //цикл for in постовляет ссылки из links и меням активен/неактивен
    for (const oneLink in links) {
      links[oneLink].classList.remove('active')
    }
//проверяем link если не равен '' то добовляем класс active
    if(link !== '') {
      links[link].classList.add('active')
    }
  }

  //элемeнт добовляем
  container.append(logo, nav, basketBtn);
  header.append(container);
  

  return {
    header,
    setActiveLink
  };
}
