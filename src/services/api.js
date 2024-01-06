import axios from "axios";

const api = axios.create({
    baseURL:'https://viacep.com.bhttps://viacep.com.br/ws'
});

export default api;