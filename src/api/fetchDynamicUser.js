import baseUrl from 'api/baseUrl'
import axios from 'axios';

const fetchDynamicUser = (userId) => {
    return axios.get(`${baseUrl}/users/${userId}`);
}

export default fetchDynamicUser