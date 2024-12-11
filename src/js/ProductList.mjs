import { renderListWithTemplate } from './utils.mjs';

// Create a template for displaying all available products
const productCardTemplate = (product) => {
    const discountedMessage =
        product.FinalPrice < product.SuggestedRetailPrice
            ? `<del>$${parseFloat(product.SuggestedRetailPrice).toFixed(2)}</del><br>`
            : '';

    return `<li class="product-card">
            <a href="../product_pages/?product=${product.Id}">
                <img src="${product.Images.PrimaryMedium}" alt="Image of ${product.NameWithoutBrand}"/>
                <h3 class="card__brand">${product.Brand.Name}</h3>
                <h2 class="card__name">${product.NameWithoutBrand}</h2>
                <p class="product-card__price">${discountedMessage}$${product.FinalPrice}</p>
            </a>
        </li>`;
};

// Create a productListing class
export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData(this.category);
        if(list.length > 0){
            this.renderList(list);
        }
        this.renderCategoryNames(this.category);
    }

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }

    formatCategoryName(categoryName) {
        let result = '';
        if (categoryName.includes('-')) {
            result = categoryName
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        } else {
            result =
                categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
        }

        return result;
    }

    renderCategoryNames(catName) {
        // Set the categoryName Element to equal the category Top Product: Tents
        const categoryNameElement = document.querySelectorAll('.product-category');
        categoryNameElement.forEach(category => {
            category.textContent = `Top Products: ${this.formatCategoryName(catName)}`;
        })
    }
}
