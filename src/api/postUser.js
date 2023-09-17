import baseUrl from 'api/baseUrl'
import axios from 'axios';

const postUser = (newUser) => {
    return axios.post(`${baseUrl}/users`, newUser);
}

export default postUser