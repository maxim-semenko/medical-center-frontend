import axios from "axios"
import {Cookies} from "react-cookie"

const API_URL = "/api/v1/appointments"
const cookies = new Cookies()

class AppointmentService {

    async findAll() {
        return axios.get(API_URL, {
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
    }

    async findAllByUserId(userId) {
        return axios.get(`${API_URL}/users/${userId}`, {
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
    }

    async findAllByEmployeeId(employeeId) {
        console.log(`${API_URL}/employees/${employeeId}`)
        return axios.get(`${API_URL}/employees/${employeeId}`, {
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
    }

    async findById(id) {
        return axios.get(`${API_URL}/${id}`, {
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
    }

    async create(request) {
        return axios.post(API_URL, request, {
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
    }

    async update(request, id) {
        return axios.put(`${API_URL}/${id}`, request, {
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
    }

    async deleteById(id) {
        return axios.delete(`${API_URL}/${id}`, {
            headers: {'Authorization': `Bearer ${cookies.get("token")}`},
        })
    }

}

export default new

AppointmentService()
