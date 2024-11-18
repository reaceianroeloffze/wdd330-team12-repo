import { renderListWithTemplate } from './utils.mjs';

// Create a template for displaying all available products
const productCardTemplate = (product) => {
    const discountedMessage =
        product.FinalPrice < product.SuggestedRetailPrice
            ? `<del>$${parseFloat(product.SuggestedRetailPrice).toFixed(2)}</del><br>`
            : '';

    return `<li class="product-card">
            <a href="product_pages/?product=${product.Id}">
                <img src="${product.Image}" alt="Image of ${product.NameWithoutBrand}"/>
                <h3 class="card__brand">${product.Brand.Name}</h3>
                <h2 class="card__name">${product.NameWithoutBrand}</h2>
                <p class="product-card__price">${discountedMessage}$${product.FinalPrice}</p>
            </a>
        </li>`;
};

// Create a productListing class
export default class ProductListing {
    constructor(dataSource, listElement) {
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData();
        list.splice(4, list.length);
        this.renderList(list);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}
