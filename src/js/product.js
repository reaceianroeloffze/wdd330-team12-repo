import ExternalServices from './ExternalServices.mjs';
import ProductDetails from './ProductDetails.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

const productId = getParam('product');
const dataSource = new ExternalServices();

// Load the header and Footer
loadHeaderFooter();

const product = new ProductDetails(productId, dataSource);
product.init();
