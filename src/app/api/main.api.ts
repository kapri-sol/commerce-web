import axios from "axios";

const MainApi = axios.create({
    baseURL: "http://localhost:8080"
});

export default MainApi;
