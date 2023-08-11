import axios, { AxiosResponse } from "axios";

// axios.defaults.baseURL = "https://motormate.azurewebsites.net/swagger/";
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Account = {
  loginGoogle: (values: any) => requests.post("api/auth/sso/google", values),
};

const agent = {
  Account,
};

export default agent;