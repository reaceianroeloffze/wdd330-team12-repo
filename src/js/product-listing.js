// Import productListing from ProductListing module
import ProductListing from './ProductList.mjs';
// Import productData from ProductData module
import ProductData from './ProductData.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');

// Create instance of Product Data
const dataSource = new ProductData();

// Retrieve the HTML Element that contains the list of products
const listElement = document.querySelector('.product-list');

// create an instance of productListing
const productList = new ProductListing(category, dataSource, listElement);
productList.init();
