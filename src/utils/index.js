import axios from "axios";

let instance = axios.create({
    baseURL: "http://39.101.1.199:88/api",
    timeout: 10000,
});

export default instance;
