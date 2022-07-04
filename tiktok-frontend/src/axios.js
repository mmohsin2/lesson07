import axios from "axios";

const instance = axios.create({
    baseURL:"https://tiktok-clone-mern.herokuapp.com/",
});

export default instance;