// Import productData from ProductData module
import productData from './ProductData.mjs';
// Import productListing from ProductListing module
import productListing from './ProductList.mjs';

const dataSource = new productData('tents');

const listElement = document.querySelector('.product-list');

// create an instance of productListing
const productList = new productListing(dataSource, listElement);
productList.init();
