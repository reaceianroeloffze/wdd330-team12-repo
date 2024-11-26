import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

// load header and footer
loadHeaderFooter();

const category = getParam('category');
const dataSource = new ProductData();

const listElement = document.querySelector('.product-list');

// create an instance of productListing
const productList = new ProductList(category, dataSource, listElement);
productList.init();
