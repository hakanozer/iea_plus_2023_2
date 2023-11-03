import axios from 'axios'
import { JWTUser } from './models/JWTUser'

const baseUrl = 'https://dummyjson.com/'
const config = axios.create({
    baseURL: baseUrl,
    timeout: 15000
})

export const login = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }
    return config.post<JWTUser>('auth/login', sendObj)
}