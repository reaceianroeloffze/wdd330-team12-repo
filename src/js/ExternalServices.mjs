const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
    const jsonResponse = res.json();

    if (!res.ok) {
        throw {name: 'servicesError', message: jsonResponse}
    }else{
        return jsonResponse;
    }
}

export default class ExternalServices {
    constructor() {}
    async getData(category) {
        const response = await fetch(baseURL + `products/search/${category}`);
        const data = await convertToJson(response);
        return data.Result;
    }
    async findProductById(id) {
        const response = await fetch(`${baseURL}product/${id}`);
        const product = await convertToJson(response);
        return product.Result;
    }

    async checkout(payload) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };

        return await fetch(baseURL + 'checkout/', options).then(convertToJson);
    }
}
