import {_axios} from "./api";

export const searchProducts = (exp) => {
   return _axios.get(`/search?${exp}`);
 };

export const searchStores = (exp) => {
  return _axios.get(`/search?${exp}`);
};