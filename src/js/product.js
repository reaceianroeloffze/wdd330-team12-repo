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
