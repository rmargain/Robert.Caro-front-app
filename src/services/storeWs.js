import {_axios} from "./api";

export const getStores = () => {
   return _axios.get(`/store`);
 };

export const getStoresByUser = () => {
  return _axios.get(`/store/user`);
};

export const getStoreById = (id) => {
   return _axios.get(`/store/${id}`);
};

export const createStore = (params) => {
  return _axios.post(`/store`, params.store);
};

export const updateStore = (params) => {
   return _axios.patch(`/store/${params.id}`, params.store);
};

export const deleteProduct = (id) => {
     return _axios.delete(`/store/${id}`)};