<<<<<<< HEAD
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        // We passed in this information to make our class as reusable as possible.
=======
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
>>>>>>> 1f029275fa60bf908ab469710b059d783ed50ce9
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
<<<<<<< HEAD
        // Fetch and filter the data from the dataSource
        const list = await this.dataSource.getData();
        // Filter the list to show only the 4 selected tents
        const filteredList = this.filterTents(list);
        // Render the filtered list
        this.renderList(filteredList);
    }

    // Method to filter the tents list to show only the 4 selected tents
    filterTents(list) {
        const selectedTentIds = ["880RR", "985RF", "989CG", "985PR"];  // Example tent IDs
        return list.filter(product => selectedTentIds.includes(product.Id));
    }

    // Render the list using the productCardTemplate and the filtered data
    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
=======
        const list = await this.dataSource.getData(this.category);
        list.splice(4, list.length);
        this.renderList(list);

        // Set the categoryName Element to equal the category Top Product: Tents
        const categoryNameElement = document.querySelector('#categoryName');
        const formattedCategoryName = this.formatCategoryName(this.category);
        categoryNameElement.textContent = formattedCategoryName;
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
>>>>>>> 1f029275fa60bf908ab469710b059d783ed50ce9
}
