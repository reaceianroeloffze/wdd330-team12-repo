import { loadHeaderFooter } from './utils.mjs';
import CheckoutProcess from './CheckoutProcess.mjs';

loadHeaderFooter();

const checkout = new CheckoutProcess('so-cart');
checkout.init();

const zipCode = document.querySelector('.zip');

zipCode.addEventListener('change', elem => {
    if (elem.value !== '') {
        checkout.displayOrderSummary();
    }
})

const formSubmitBtn = document.querySelector('.submit-btn');

formSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkout.checkout(e);
})
