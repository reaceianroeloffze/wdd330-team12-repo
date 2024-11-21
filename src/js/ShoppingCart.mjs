import { getLocalStorage } from './utils.mjs';

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

export default class ShoppingCart {
    constructor(key, parentSelector) {
        this.key = key;
        this.parentSelector = parentSelector;
    }

    async init() {
        this.renderCartContents();
    }

    renderCartContents() {
        const cartItems = getLocalStorage(this.key);
        if (cartItems && cartItems.length > 0) {
            const htmlItems = cartItems.map((item) => cartItemTemplate(item));
            this.parentSelector.innerHTML = htmlItems.join('');
        } else {
            this.parentSelector.innerHTML = 'No items in cart';
            this.parentSelector.style.fontSize = '2rem';
        }
    }
}
