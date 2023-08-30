import axios from "axios";

const url = 'https://course-api.com/react-store-products'

export const customFetch = axios.create({
    baseURL:url,
})