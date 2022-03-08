import axios from "axios"
import {Cookies} from "react-cookie"

const API_URL = "/api/v1/medicalCards"
const cookies = new Cookies()

class MedicalCardService {

    async findAll(page = 0, size = 0) {
        console.log(API_URL)
        // const params = new URLSearchParams([['page', (page - 1)], ['size', size], ['sort', 'name']]);
        return axios.get(API_URL)
    }

    async findById(id) {
        return axios.get(`${API_URL}/${id}`)
    }

    async findAllByUserId(page = 0, size = 0, userId) {
        console.log(API_URL)
        // const params = new URLSearchParams([['page', (page - 1)], ['size', size], ['sort', 'name']]);
        return axios.get(`${API_URL}/users/${userId}`)
    }

    async create(request) {
        return axios.post(API_URL, request)
    }

    async update(request, id) {
        return axios.put(`${API_URL}/${id}`, request,)
    }

    async deleteById(id) {
        return axios.delete(`${API_URL}/${id}`)
    }


}

export default new MedicalCardService()