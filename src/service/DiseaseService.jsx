import axios from "axios"
import {Cookies} from "react-cookie"

const API_URL = "/api/v1/diseases"
const cookies = new Cookies()

class DiseaseService {

    async findAll(page = 0, size = 0) {
        console.log(API_URL)
        // const params = new URLSearchParams([['page', (page - 1)], ['size', size], ['sort', 'name']]);
        return axios.get(API_URL)
    }

    async findById(id) {
        return axios.get(`${API_URL}/{id}`)
    }


}

export default new DiseaseService()