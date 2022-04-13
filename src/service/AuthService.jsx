import axios from "axios"

const API_URL = "/api/v1"

class AuthService {

    // Login user
    async login(request) {
        return axios.post(`${API_URL}/login`, request)
    }

    // Register user
    async register(request) {
        return axios.post(`${API_URL}/register`, request)
    }

    // Logout user
    async logout(cookies) {
        cookies.remove("token", {path: "/"})
        localStorage.removeItem("current_user")
    }

}

export default new AuthService()
