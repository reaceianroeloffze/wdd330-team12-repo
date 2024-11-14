import { setLocalStorage, getParams } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

// function addProductToCart(product) {
//   setLocalStorage('so-cart', product);
// }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById('addToCart')
//   .addEventListener('click', addToCartHandler);

const elements = document.querySelectorAll("#addToCart");
const products = getParams('product');


elements.forEach((element) => {                       
    element.addEventListener("click", async function addToCartHandler() {
        const product = await dataSource.findProductById(products);
        const productId = await dataSource.getProductId(products);
        setLocalStorage(productId, product);
    });
});

