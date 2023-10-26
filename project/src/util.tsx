import CryptoJS from 'crypto-js'
import { IUser } from "./models/IUser";

export const storeUser = ( user: IUser ) => {
    var st = JSON.stringify(user)
    st = encrypt(st)
    localStorage.setItem('user', st)
}

export const getUser = () => {
    var stUser = localStorage.getItem('user')
    if (stUser) {
        try {
            stUser = decrypt(stUser)
            const obj = JSON.parse(stUser) as IUser
            return obj 
        } catch (error) {
            localStorage.removeItem('user')
        }
    }
    return null
}

export const encrypt = (plainText: string) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, 'key123').toString()
    return cipherText
}

export const decrypt = (cipherText: string) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, 'key123')
    const plainText = bytes.toString(CryptoJS.enc.Utf8);
    return plainText
}