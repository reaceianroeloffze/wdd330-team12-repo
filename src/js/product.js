<<<<<<< HEAD
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

=======
import ProductData from './ProductData.mjs';
import { getParam } from './utils.mjs';
import ProductDetails from './ProductDetails.mjs';

const productId = getParam('product');

const dataSource = new ProductData('tents');
const product = new ProductDetails(productId, dataSource);
product.init();

// add to cart button event handler
async function addToCartHandler() {
    product.addProductToCart();
}

// add listener to Add to Cart button
document
    .getElementById('addToCart')
    .addEventListener('click', addToCartHandler);
>>>>>>> c2387a5b15ecc03cf308bf78574be21096d94cb2
