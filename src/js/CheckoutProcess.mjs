import { getLocalStorage} from './utils.mjs';

export default class CheckoutProcess {
    constructor (key) {
        this.key = key;
        this.list = [];
        this.subtotal = 0;
        this.shippingEstimate = 0;
        this.tax = 0;
        this.orderTotal = 0;
        this.quantity = 0;
    }

    async init () {
        this.list = getLocalStorage(this.key);
        this.calculateSubtotal();
        this.calculateQuantity();
    }

    calculateSubtotal () {
        this.subtotal = this.list.reduce((cartLoad, cartItem) => cartLoad + (cartItem.FinalPrice * cartItem.quantity), this.subtotal);
        const orderSubTotal = document.querySelector('.subtotal');
        orderSubTotal.textContent = `$${parseFloat(this.subtotal).toFixed(2)}`;
    }

    calculateTax ()  {
        this.tax = 0.06 * this.subtotal;
    }

    calculateQuantity () {
        this.quantity = this.list.reduce((cartLoad, cartItem) => cartLoad + (cartItem.quantity), this.quantity);
        document.querySelector('.cart-quant').innerHTML = this.quantity;
    }

    calculateShipping () {
        this.shippingEstimate = 10 + (this.quantity - 1) * 2;
    }

    calculateOrderTotal () {
        this.orderTotal = this.subtotal + this.shippingEstimate + this.tax;
    }

    displayOrderSummary () {
        this.calculateShipping();
        this.calculateTax();
        this.calculateOrderTotal();
        document.querySelector('.shipping-estimate').innerHTML = `$${parseFloat(this.shippingEstimate).toFixed(2)}`;
        document.querySelector('.tax').innerHTML = `$${parseFloat(this.tax).toFixed(2)}`;
        document.querySelector('.order-total').innerHTML = `$${parseFloat(this.orderTotal).toFixed(2)}`;
    }

}
