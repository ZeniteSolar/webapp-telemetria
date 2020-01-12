import axios from 'axios';

const baseURL = process.env.VUE_APP_API_URL;

export default () => {
    return axios.create({
        baseURL: baseURL,
        withCredentials: false,
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        }
    })
}