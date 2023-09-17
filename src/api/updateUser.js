import baseUrl from 'api/baseUrl'
import axios from 'axios';

const updateUser = (updateNewUser) => {
    const {id} = updateNewUser
    return axios.put(`${baseUrl}/users/${id}`, updateNewUser);
}

export default updateUser