import axios from "axios";
const BASE_URL = "https://fsenode.herokuapp.com/api"
//const BASE_URL = "http://localhost:4003/api";
const AUTH_API = `${BASE_URL}/auth`

const api = axios.create({
   withCredentials: true
});

export const signup = (user) =>
   api.post(`${AUTH_API}/signup`, user)
       .then(response => response.data);

export const profile = () =>
   api.post(`${AUTH_API}/profile`)
      .then(response => response.data);

export const login = (credentials) =>
api.post(`${AUTH_API}/login`, credentials)
   .then(response => response.data);


export const logout = (user) =>
   api.post(`${AUTH_API}/logout`, user)
      .then(response => response.data);