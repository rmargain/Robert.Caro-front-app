import {_axios} from "./api";


export const getUserCart = () => {
  return _axios.get(`/cart`);
};

export const createCarts = (cart) => {
  return _axios.post(`/cart`, cart);
};

export const updateCart = (cart) => {
  return _axios.patch(
    `/cart/${cart._id}`,
    cart
  );
};

export const deleteCart = (id) => {
  return _axios.delete(`/cart/${id}`);
};