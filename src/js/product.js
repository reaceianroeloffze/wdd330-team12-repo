import ProductData from './ProductData.mjs';
import { getParam, getLocalStorage, setLocalStorage } from './utils.mjs';
import ProductDetails from './ProductDetails.mjs';

const productId = getParam('product');
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
