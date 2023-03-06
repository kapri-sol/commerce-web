import axios from "axios";

const MainApi = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true
});

export default MainApi;
