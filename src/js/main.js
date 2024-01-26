import Navigo from 'navigo'
//Компоненты
import { getHeader } from '/src/js/components/header/header.js'
import { getPageContainer } from "/src/js/components/pageContainer/pageContainer.js";
//styles
import './components/header/header.css'

const app = document.getElementById('app')

const header = getHeader()
const pageContainer = getPageContainer()


// C помощю navito библеотеки создаем функцию навигации между страницами Главная страница, Каталог, Корзина  
export const router = new Navigo('/')

//Главная страница
router.on('/', async () => {
    pageContainer.innerHTML = ''
    const moduleMain = await import('./pages/mainPage.js')
    const mainPage = moduleMain.getMainPage();
    pageContainer.append(mainPage); 
    header.setActiveLink('home')
})

//Страница Каталога
router.on("/catalog", async () => {
    pageContainer.innerHTML = ''
    const moduleCatalog = await import("./pages/catalogPage.js");
    const catalogPage = moduleCatalog.getCatalogPage();
    pageContainer.append(catalogPage);
    header.setActiveLink("catalog");
});

//Страница Корзины
router.on("/basket", async () => {
    pageContainer.innerHTML = ''
    const moduleBasket = await import("./pages/basketPage.js");
    const basketPage = moduleBasket.getBasketPage();
    pageContainer.append(basketPage);
    header.setActiveLink("basket");
});

//Страница Продукта
router.on("/product/:title", async ({ data }) => {
  pageContainer.innerHTML = "";
  const moduleProduct = await import("./pages/productPage.js");
  const productPage = moduleProduct.getProductPage(data.title);
  pageContainer.append(productPage);
  header.setActiveLink();
});

//Заказ-Оформление
router.on("/order", async () => {

    if(true) {
        router.navigate('/')
        return
    }

  pageContainer.innerHTML = "";
  const moduleOrder = await import("./pages/order.js");
  const orderPage = moduleOrder.getOrderPage();
  pageContainer.append(orderPage);
  header.setActiveLink();
});

//Страница не найденa
router.notFound(async () => {
  pageContainer.innerHTML = "";
  const modulenotFound = await import("./pages/notFound.js");
  const notFoundPage = modulenotFound.getNotFoundPage();
  pageContainer.append(notFoundPage);
  header.setActiveLink();
});

router.resolve()

app.append(header.header, pageContainer);