import axios from "axios";

export const authorsApi = axios.create({
  baseURL: "http://localhost:3000"
});

export const publicationsApi = axios.create({
  baseURL: "http://localhost:3001"
});
