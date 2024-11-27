import { getLocalStorage } from './utils.mjs';

function cartItemTemplate(item) {
    const discountedMessage =
        item.FinalPrice < item.SuggestedRetailPrice
            ? `<del>$${parseFloat(item.SuggestedRetailPrice).toFixed(2)}</del><br>`
            : '';

    const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.quantity}</p>
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
            this.renderTotalItemPrices(cartItems);
        } else {
            this.parentSelector.innerHTML = 'No items in cart';
            this.parentSelector.style.fontSize = '2rem';
        }
    }

    renderTotalItemPrices (cartItems) {
        let totalPrice = 0;
        let finalTotalPrice = cartItems.reduce((cartLoad, cartItem) => cartLoad + (cartItem.FinalPrice * cartItem.quantity), totalPrice);
        const totalDisplay = document.querySelector('.total-price-display');
        let priceDisplay = document.querySelector('.total-price-display__price');
        priceDisplay.textContent =  `$${parseFloat(finalTotalPrice).toFixed(2)}`;
        totalDisplay.style.display = 'grid';
    }
}
