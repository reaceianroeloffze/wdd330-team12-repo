function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }

  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }

  async findProductById(ids) {
    const products = await this.getData();
    return products.find((item) => item.Id === ids); 
  }

  async getProductId(ids) {
    const products = await this.getData();
    return products.find((item) => item.Id === ids).Id;
  }
  //I added this method so that it can return the product Id after find it and then we can use the
  //same id as a key in the localstorage. This will help because we can then use different keys to store different products.
}
