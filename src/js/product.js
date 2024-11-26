import ProductData from './ProductData.mjs';
<<<<<<< HEAD
import { getParam, getLocalStorage, setLocalStorage } from './utils.mjs';
=======
>>>>>>> 1f029275fa60bf908ab469710b059d783ed50ce9
import ProductDetails from './ProductDetails.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

const productId = getParam('product');
<<<<<<< HEAD
const dataSource = new ProductData('tents');
const product = new ProductDetails(productId, dataSource);
product.init();

function addProductToCart(productData) {
    let data = getLocalStorage('so-cart') || [];
    if (!Array.isArray(data)) {
        data = [];
    }
    data.push(productData);
    setLocalStorage('so-cart', data);
}

// Add to Cart button event handler
async function addToCartHandler() {
    const productData = await product.getProductDetails(); // Assuming `getProductDetails` fetches product details
    addProductToCart(productData);
}

// Add listener to Add to Cart button
document
    .getElementById('addToCart')
    .addEventListener('click', addToCartHandler);
=======
const dataSource = new ProductData();

// Load the header and Footer
loadHeaderFooter();

const product = new ProductDetails(productId, dataSource);
product.init();
>>>>>>> 1f029275fa60bf908ab469710b059d783ed50ce9
