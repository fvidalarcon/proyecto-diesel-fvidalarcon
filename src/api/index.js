import axios from 'axios';

const baseURL='https://api.cne.cl/v3/';
export default (method,url,data,header) =>{
    return axios({
        url:baseURL+url,
        method,
        data,
        headers: header
    });
}
