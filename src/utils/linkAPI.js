import Axios from "axios";

const api = 'http://209.97.175.124:6464/v1';

export const fetchProduct = () => {
   return Axios.get(`${api}/products`);
};

export const fetchProductDetail = (id) => {
   return Axios.get(`${api}/products/${id}`);
}

export const fetchExpedition = () => {
   return Axios.get(`${api}/expeditions`);
}

export const addTransaction = (data) => {
   return Axios.post(`${api}/transactions`, data);
}

export const fetchTransaction = (id) => {
   return Axios.get(`${api}/transactions/${id}?page=1&limit=10`);
}

export const getMoreTransaction = (id, page) => {
   return Axios.get(`${api}/transactions/${id}?page=${page}&limit=10`);
}