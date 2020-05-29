import productsApi from '../api/products.js'

export function getProducts() {
    console.log('====> getProdusts');

    return productsApi.getProducts()


}