import axios from "axios";

const url = "https://shopify-application-imagerepo.herokuapp.com/";
export const api = axios.create({
  baseURL: url
});
