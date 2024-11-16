import { renderListWithTemplate } from './utils.mjs';

function renderProductCard(product) {
    const discountedMessage =
        product.FinalPrice < product.SuggestedRetailPrice
            ? `<del>$${parseFloat(product.SuggestedRetailPrice).toFixed(2)}</del><br>`
            : '';

    return `<li class="product-card">
        <a href="product_pages/?product=${product.Id}">
            <img
                src=${product.Image}
                alt=${product.NameWithoutBrand}
            />
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">
                ${product.NameWithoutBrand}
            </h2>
            <p class="product-card__price">${discountedMessage}$${product.FinalPrice}</p></a
        >
    </li>`;
}

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const data = await this.dataSource.getData();
        const limitedData = this.limitDataResultsByNumber(4, data);
        limitedData.forEach((product) => {
            renderListWithTemplate(
                renderProductCard(product),
                this.listElement
            );
        });
    }

    limitDataResultsByNumber(number, data) {
        const result = data.splice(0, number);
        return result;
    }
}
