import axios from 'axios'
import { IUser } from './models/IUser'
import { IProduct, IProducts } from './models/IProducts'
import { UsersModel } from './models/UsersModel'

const baseUrl = 'https://dummyjson.com/'

const config = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    // headers: {"token": "token123"},
    // auth: { username: 'ali', password: '12345' }
})


// User Login
export const userLogin = ( username: string, password: string ) => {
    const sendObj = {
        username: username,
        password: password
    }
    return config.post<IUser>('auth/login', sendObj)
}

export const products = () => {
    return config.get<IProducts>('products')
}

export const singleProduct = (id: String) => {
    return config.get<IProduct>("products/"+id)
}

export const searchProduct = (q: String) => {
    return config.get<IProducts>("products/search?q="+q)
}

export const allUsers = () => {
    return config.get<UsersModel>("users")
}

export const categories = () => {
    return config.get<string[]>("products/categories")
}

export const categoryProduct = (name: string) => {
    return config.get<IProducts>("products/category/"+name)
}
