import { setLocalStorage, getLocalStorage } from './utils.mjs';

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
        this.product = await this.dataSource.findProductById(this.productId);
        // once we have the product details we can render out the HTML
        this.renderProductDetails(this.product);
        // once the HTML is rendered we can add a listener to Add to Cart button
        // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
        document
            .getElementById('addToCart')
            .addEventListener('click', this.addProductToCart.bind(this));
    }

    renderProductDetails(product) {
        const mainElem = document.querySelector('main');
        const discountedMessage =
            product.FinalPrice < product.SuggestedRetailPrice
                ? `<del>$${parseFloat(product.SuggestedRetailPrice).toFixed(2)}</del><br>`
                : '';

        mainElem.innerHTML = `<section class="product-detail">
            <h3>${product.Brand.Name}</h3>
    
            <h2 class="divider">${product.NameWithoutBrand}</h2>
    
            <img
              class="divider"
              src=${product.Images.PrimaryLarge}
              alt=${product.NameWithoutBrand}
            />
 
            <p class="product-card__price">${discountedMessage}$${product.FinalPrice}</p>
    
            <p class="product__color">${product.Colors[0].ColorName}</p>
    
            <p class="product__description">
              ${product.DescriptionHtmlSimple}
            </p>
    
            <div class="product-detail__add">
              <button id="addToCart" data-id=${product.Id}>Add to Cart</button>
            </div>
            </section>`;
    }

    addProductToCart() {
        const data = getLocalStorage('so-cart');
        let dataExists = false;
        if (data) {
            data.map((dataRow) => {
                if (dataRow.Id === this.productId) {
                    // Item already exists in the cart
                    dataExists = true;
                    // Update quantity to +1
                    if ('quantity' in dataRow) {
                        dataRow.quantity++;
                    }
                }
            });
            if (!dataExists) {
                this.product.quantity = 1;
                data.push(this.product);
            }
            setLocalStorage('so-cart', data);
        } else {
            this.product.quantity = 1;
            setLocalStorage('so-cart', [this.product]);
        }
    }
}
