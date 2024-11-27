// Import productListing from ProductListing module
import ProductListing from './ProductList.mjs';
// Import productData from ExternalServices module
import ExternalServices from './ExternalServices.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');

// Create instance of Product Data
const dataSource = new ExternalServices();

// Retrieve the HTML Element that contains the list of products
const listElement = document.querySelector('.product-list');

// create an instance of productListing
const productList = new ProductListing(category, dataSource, listElement);
productList.init();
