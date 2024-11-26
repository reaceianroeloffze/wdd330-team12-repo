<<<<<<< HEAD
// Import required modules and classes
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';

// Create an instance of ProductData
const dataSource = new ProductData('tents');

// Select the list element in the DOM
const element = document.querySelector('.product-list');

// Create an instance of ProductListing
const listing = new ProductList('tents', dataSource, element);

// Initialize the product listing to display products
listing.init();
=======
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
>>>>>>> 1f029275fa60bf908ab469710b059d783ed50ce9
