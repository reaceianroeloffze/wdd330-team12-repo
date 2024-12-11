import { loadHeaderFooter } from './utils.mjs';
import CheckoutProcess from './CheckoutProcess.mjs';

loadHeaderFooter();

const cartCheckout = new CheckoutProcess('so-cart');
cartCheckout.init();

const zipCode = document.querySelector('.zip');

zipCode.addEventListener('change', elem => {
    if (elem.value !== '') {
        cartCheckout.displayOrderSummary();
    }
})

const formSubmitBtn = document.querySelector('.submit-btn');

formSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const checkoutForm = document.querySelector('.checkout-form');
    const formValidity = checkoutForm.checkValidity();
    checkoutForm.reportValidity();
    if (formValidity) {
        cartCheckout.checkout();
    }
})
