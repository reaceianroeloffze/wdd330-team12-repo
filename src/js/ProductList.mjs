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
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
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
}
