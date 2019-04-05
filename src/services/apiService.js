import axios from 'axios';
import * as apiURL from '../config';

export const callApi = (endpoint, method='GET', body) => {
    return axios({
        method: method,
        url: `${apiURL.BASE_URL}/${endpoint}`,
        data: body
    });
}