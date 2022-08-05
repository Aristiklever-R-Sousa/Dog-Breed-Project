import axios from "axios";

const Client = axios.create({
  baseURL: "https://dogbreed-api.q9.com.br/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

export default Client;
