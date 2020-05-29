import axios from 'axios';

/* 
1. List all products
2. Find product by id
2.1 Find Products by name
3. Save Product
4. Edit Product
5. Delete Product
*/

// define all api  call functiona

const baseUrl = 'http://localhost:8080/api/'
const api = axios.create({
    baseUrl
});


const productsApi = {
    getProducts: () => {
        return api.get("http://localhost:8080/api/products");
    },
    getProduct: (id) => {
        return api.get(`/products/${id}`)
    },
    getProductsByName: (name) => {
        return api.get(`/byName/${name}`)
    }


} // end of productsApi object


export default productsApi;