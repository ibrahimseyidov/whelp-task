import baseUrl from 'api/baseUrl'
import axios from 'axios';

const delUser = (id) => {
    return axios.delete(`${baseUrl}/users/${id}`);
}

export default delUser