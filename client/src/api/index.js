import axios from "axios";

const SERVER_URL = "http://localhost:3001/api/";

const Api = axios.create({
    baseURL: SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default Api;

export const BASE_URI = "http://localhost:3001"