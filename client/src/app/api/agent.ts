import axios, { AxiosResponse } from "axios";

// axios.defaults.baseURL= 'https://motormate.azurewebsites.net/swagger/';
axios.defaults.baseURL = "https://fakestoreapi.com/";
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Product = {
  all: () => requests.get("products"),
  details: (id: number) => requests.get(`products/${id}`),
};

const Account = {
  login: (values: any) => requests.post("auth/login", values),
};

const agent = {
  Product,
  Account,
};

export default agent;