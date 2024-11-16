import ProductData from './ProductData.mjs';
import { getParam } from './utils.mjs';
import ProductDetails from './ProductDetails.mjs';

const productId = getParam('product');

const dataSource = new ProductData('tents');
const product = new ProductDetails(productId, dataSource);
product.init();

<<<<<<< HEAD
function addProductToCart(product) {
    let data = getLocalStorage('so-cart') || [];
    if (!Array.isArray(data)) {
        data = [];
    }
    data.push(product);
    setLocalStorage('so-cart', data);
}

=======
>>>>>>> c2387a5b15ecc03cf308bf78574be21096d94cb2
// add to cart button event handler
async function addToCartHandler() {
    product.addProductToCart();
}

// add listener to Add to Cart button
document
    .getElementById('addToCart')
    .addEventListener('click', addToCartHandler);
