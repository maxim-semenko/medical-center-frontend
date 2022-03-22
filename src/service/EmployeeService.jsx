import axios from "axios"
import {Cookies} from "react-cookie"

const API_URL = "/api/v1/employees"
const cookies = new Cookies()

class EmployeeService {

    async findAll(page = 0, size = 0) {
        console.log(API_URL)
        // const params = new URLSearchParams([['page', (page - 1)], ['size', size], ['sort', 'name']]);
        return axios.get(API_URL)
    }

    async findById(id) {
        return axios.get(`${API_URL}/${id}`)
    }

    async findAllPatientsByEmployeeId(page = 0, size = 0, employeeId) {
        console.log(API_URL)
        // const params = new URLSearchParams([['page', (page - 1)], ['size', size], ['sort', 'name']]);
        return axios.get(`${API_URL}/${employeeId}/users`)
    }


}

export default new EmployeeService()
