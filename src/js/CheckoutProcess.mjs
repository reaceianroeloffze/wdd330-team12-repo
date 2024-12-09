import { getLocalStorage, setLocalStorage, alertMessage } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs';

const services = new ExternalServices();
const packageItems = function (items) {
    return items.map((item) => {
        return {
            id: item.Id,
            name: item.Name,
            quantity: item.quantity,
            price: item.FinalPrice,
        };
    });
};

const convertFormDataToJSON = function (formElement) {
    const formData = new FormData(formElement),
        JSONConversion = {};
    formData.forEach(function (value, key) {
        JSONConversion[key] = value;
    });
    return JSONConversion;
};

export default class CheckoutProcess {
    constructor(key) {
        this.key = key;
        this.list = [];
        this.subtotal = 0;
        this.shippingEstimate = 0;
        this.tax = 0;
        this.orderTotal = 0;
        this.quantity = 0;
    }

    async init() {
        this.list = getLocalStorage(this.key);
        this.calculateSubtotal();
        this.calculateQuantity();
    }

    calculateSubtotal() {
        this.subtotal = this.list.reduce(
            (cartLoad, cartItem) =>
                cartLoad + cartItem.FinalPrice * cartItem.quantity,
            this.subtotal
        );
        const orderSubTotal = document.querySelector('.subtotal');
        orderSubTotal.textContent = `$${parseFloat(this.subtotal).toFixed(2)}`;
    }

    calculateTax() {
        this.tax = 0.06 * this.subtotal;
    }

    calculateQuantity() {
        this.quantity = this.list.reduce(
            (cartLoad, cartItem) => cartLoad + cartItem.quantity,
            this.quantity
        );
        document.querySelector('.cart-quant').innerHTML = this.quantity;
    }

    calculateShipping() {
        this.shippingEstimate = 10 + (this.quantity - 1) * 2;
    }

    calculateOrderTotal() {
        this.orderTotal = this.subtotal + this.shippingEstimate + this.tax;
    }

    displayOrderSummary() {
        this.calculateShipping();
        this.calculateTax();
        this.calculateOrderTotal();
        document.querySelector('.shipping-estimate').innerHTML =
            `$${parseFloat(this.shippingEstimate).toFixed(2)}`;
        document.querySelector('.tax').innerHTML =
            `$${parseFloat(this.tax).toFixed(2)}`;
        document.querySelector('.order-total').innerHTML =
            `$${parseFloat(this.orderTotal).toFixed(2)}`;
    }

    async checkout() {
        const checkoutForm = document.querySelector('.checkout-form');

        const JSONObject = convertFormDataToJSON(checkoutForm);
        JSONObject.orderDate = new Date();
        JSONObject.items = packageItems(this.list);
        JSONObject.orderTotal = this.orderTotal;
        JSONObject.shipping = this.shippingEstimate;
        JSONObject.tax = this.tax;

        try {
            const result = await services.checkout(JSONObject);
            console.log(result);
            setLocalStorage('so-cart', []);
            location.assign('/checkout/success.html');
        } catch (err) {
            console.log(err);

            let errorMessage = err.message;
            if (errorMessage instanceof Promise) {
                errorMessage = await errorMessage;
            }

            if (errorMessage && typeof errorMessage === 'object') {
                for (const key in errorMessage) {
                    if (errorMessage[key]) {
                        console.log(
                            `Key: ${key}, Message: ${errorMessage[key]}`
                        );
                        alertMessage(errorMessage[key]);
                    } else {
                        console.log(
                            'Unexpected error message format:',
                            errorMessage
                        );
                        alertMessage('An unexpected error occurred.');
                    }
                }
            }
        }
    }
}
