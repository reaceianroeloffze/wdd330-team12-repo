import ProductData from './ProductData.mjs';
import { getParam } from './utils.mjs';
import ProductDetails from './ProductDetails.mjs';

const productId = getParam('product');
import ProductDetails from './ProductDetails.mjs';
import { getParam } from './utils.mjs';


const dataSource = new ProductData('tents');

function addProductToCart(product) {
    const data = getLocalStorage('so-cart');
    if (data) {
        data.push(product);
        setLocalStorage('so-cart', data);
    } else {
        setLocalStorage('so-cart', [product]);
    }
}
// add to cart button event handler
async function addToCartHandler(e) {
    const product = await dataSource.findProductById(e.target.dataset.id);
    addProductToCart(product);
}

// add listener to Add to Cart button
document
    .getElementById('addToCart')
    .addEventListener('click', addToCartHandler);
