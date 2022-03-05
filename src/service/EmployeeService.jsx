import axios from "axios"
import {Cookies} from "react-cookie"

const EMPLOYEE_API_URL = "/api/v1/employees"
const cookies = new Cookies()

class EmployeeService {

    async findAll(page = 0, size = 0) {
        console.log(EMPLOYEE_API_URL)
        // const params = new URLSearchParams([['page', (page - 1)], ['size', size], ['sort', 'name']]);
        return axios.get(EMPLOYEE_API_URL)
    }

    async findById(id) {
        return axios.get(`${EMPLOYEE_API_URL}/{id}`)
    }


}

export default new EmployeeService()