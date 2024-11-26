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