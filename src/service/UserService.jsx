import axios from "axios"
import {Cookies} from "react-cookie"

const API_URL = "/api/v1/users"
const cookies = new Cookies()

class UserService {

    async findById(id) {
        return axios.get(`${API_URL}/${id}`, {
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
    }

    async updateById(request, id) {
        return axios.put(`${API_URL}/${id}`, request, {
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
    }

}

export default new UserService()
