import axios from "axios"
import {Cookies} from "react-cookie"

const VACCINE_API_URL = "/api/v1/vaccines"
const cookies = new Cookies()

class VaccineService {

    async findAll(page = 0, size = 0) {
        console.log(VACCINE_API_URL)
        // const params = new URLSearchParams([['page', (page - 1)], ['size', size], ['sort', 'name']]);
        return axios.get(VACCINE_API_URL)
    }

    async findById(id) {
        return axios.get(`${VACCINE_API_URL}/${id}`)
    }

    async create(request) {
        return axios.post(VACCINE_API_URL, request)
    }

    async update(request, id) {
        return axios.put(`${VACCINE_API_URL}/${id}`, request,)
    }

    async deleteById(id) {
        return axios.delete(`${VACCINE_API_URL}/${id}`)
    }

}

export default new VaccineService()