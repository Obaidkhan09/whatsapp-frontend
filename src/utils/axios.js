import axios from 'axios';

const instance = axios.create({
    baseURL : "http://localhost:5000",
    // baseURL : "http://192.168.68.164:5000",
    // baseURL : "https://chatapp-09.herokuapp.com/",

    
});

export default instance;