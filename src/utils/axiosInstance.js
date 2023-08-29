import axios from 'axios';
import * as rootApi from "../api/root.api"



export default function axiosInstance (endpoint, method = 'GET', body, header = {}){
    return axios({
        method: method,
        url: `${rootApi.API_URL}/${endpoint}`,
        data: body,
        headers: {
            ...header,
            
        }
    })
}