import baseUrl from 'api/baseUrl'
import axios from 'axios';

const fetchUsers = () => {
    return axios.get(`${baseUrl}/users`);
}

export default fetchUsers