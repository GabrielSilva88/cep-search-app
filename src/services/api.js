import axios from "axios";

//via sep api Correios gratuito.

const api = axios.create({
    baseURL:'https://viacep.com.bhttps://viacep.com.br/ws'
});

export default api;