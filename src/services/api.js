import axios from "axios";

//valida si la aplicacion esta en produccion
const isProduction = process.env.NODE_ENV === "production";

const URL =  isProduction ? "https://robert-caro-back.herokuapp.com/api" : "http://localhost:3000/api";

// enviroment = NODE_ENV
//const URL = "https://robert-caro-back.herokuapp.com/api"
axios.defaults.withCredentials = true;

export const _axios = axios.create({
    baseURL: URL,
    timeout:10000
})