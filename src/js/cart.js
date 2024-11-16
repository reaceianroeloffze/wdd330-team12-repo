import { getLocalStorage } from './utils.mjs';

function renderCartContents() {
    const cartItems = getLocalStorage('so-cart');
    if (cartItems && cartItems.length > 0) {
        const htmlItems = cartItems.map((item) => cartItemTemplate(item));
        document.querySelector('.product-list').innerHTML = htmlItems.join('');
    } else {
        document.querySelector('.product-list').innerHTML = 'No items in cart';
        document.querySelector('.product-list').style.fontSize = '2rem';
    }
}

function cartItemTemplate(item) {
    const discountedMessage =
        item.FinalPrice < item.SuggestedRetailPrice
            ? `<del>$${parseFloat(item.SuggestedRetailPrice).toFixed(2)}</del><br>`
            : '';

    const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
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
  <p class="cart-card__price">${discountedMessage}$${item.FinalPrice}</p>
</li>`;

    return newItem;
}

renderCartContents();
