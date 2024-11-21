import { loadHeaderFooter } from './utils.mjs';
import ShoppingCart from './ShoppingCart.mjs';

// Load Header and Footer for page
loadHeaderFooter();
const parentElement = document.querySelector('.product-list');
const shoppingCart = new ShoppingCart('so-cart', parentElement);
shoppingCart.init();
