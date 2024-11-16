import { getLocalStorage } from './utils.mjs';

function renderCartContents() {
  const cartItems = getLocalStorage('so-cart') || [];
  const productList = document.querySelector('.product-list');

  if (cartItems.length === 0) {
    productList.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    productList.innerHTML = htmlItems.join('');
  }
}

function cartItemTemplate(item) {
<<<<<<< HEAD
  const newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
=======
    const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
>>>>>>> c2387a5b15ecc03cf308bf78574be21096d94cb2
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
