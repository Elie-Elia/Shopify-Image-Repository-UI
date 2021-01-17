import axios from "axios";

const url = "http://shopify-application-imagerepo.herokuapp.com/";
export const api = axios.create({
  baseURL: url
});
