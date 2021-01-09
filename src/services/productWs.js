import {_axios} from "./api";

export const getProducts = () => {
  return _axios.get(`/product`);
};

export const getProductsByUser = (id) => {
  return _axios.get(`/product?_owner=${id}`);
};

export const getProductsDetail = (id) => {
  return _axios.get(`/product/${id}`);
};

export const createProduct = (id,params) => {
  return _axios.post(`/product/store/${id}`, params.product);
};

export const updateProduct = (params) => {
  return _axios.patch(`/product/${params.id}`, params.product);
};


export const deleteProduct = (id) => {
    return _axios.delete(`/product/${id}`)};