import axios from "axios"
import {Cookies} from "react-cookie"

const API_URL = "/api/v1/auth"
const cookies = new Cookies()

class DiseaseService {

    async login(request) {
        return axios.get(`${API_URL}/login`)
    }

    async register(request) {
        console.log(API_URL)
        return axios.get(API_URL)
    }




}

export default new DiseaseService()
