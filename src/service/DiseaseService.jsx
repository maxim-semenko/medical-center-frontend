import axios from "axios"
import {Cookies} from "react-cookie"

const API_URL = "/api/v1/diseases"
const cookies = new Cookies()

class DiseaseService {

    async findAll() {
        return axios.get(API_URL, {
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
    }

}

export default new DiseaseService()
