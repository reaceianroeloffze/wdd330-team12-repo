// Import productData from ProductData module
import ProductData from './ProductData.mjs';
// Import productListing from ProductListing module
import ProductList from './ProductList.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

const dataSource = new ProductData();
const category = getParam('category');

const listElement = document.querySelector('.product-list');
// load header and footer
loadHeaderFooter();

// create an instance of productListing
const productList = new ProductList(category, dataSource, listElement);
productList.init();
