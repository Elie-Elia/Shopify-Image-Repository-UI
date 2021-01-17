import axios from "axios";

const url = "http://localhost:5000";
export const api = axios.create({
  baseURL: url
});
