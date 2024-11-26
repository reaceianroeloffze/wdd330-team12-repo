import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

const productId = getParam('product');
const dataSource = new ProductData();

// Load the header and Footer
loadHeaderFooter();

const product = new ProductDetails(productId, dataSource);
product.init();
