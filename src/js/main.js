// Import productData from ExternalServices module
import ExternalServices from './ExternalServices.mjs';
// Import productListing from ProductListing module
import ProductList from './ProductList.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

const dataSource = new ExternalServices();
const category = getParam('category');

const listElement = document.querySelector('.product-list');
// load header and footer
loadHeaderFooter();

// create an instance of productListing
const productList = new ProductList(category, dataSource, listElement);
productList.init();
