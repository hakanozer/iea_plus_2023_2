import CryptoJS from 'crypto-js'
import { IUser } from "../models/IUser";

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


// likes control
export const addRemoveLike = (id: number) => {
    const stLikes = localStorage.getItem('likes')
    if(stLikes) {
        try {
            const arr = JSON.parse(stLikes) as number[]
            const index = arr.findIndex( item => item === id)
            if (index > -1) {
                arr.splice(index, 1)
                const stArr = JSON.stringify(arr)
                localStorage.setItem('likes', stArr)
            }else {
                arr.push(id)
                const stArr = JSON.stringify(arr)
                localStorage.setItem('likes', stArr)
            }
        } catch (error) {
            localStorage.removeItem('likes')
        }
    }else {
        const arr = [id]
        const stArr = JSON.stringify(arr)
        localStorage.setItem('likes', stArr)
    }
}

export const likeControl = (id: number) => {
    const stLikes = localStorage.getItem('likes')
    if(stLikes) {
        try {
            const arr = JSON.parse(stLikes) as number[]
            const index = arr.findIndex( item => item === id)
            if (index > -1) { 
                return true
            }
        } catch (error) {
            localStorage.removeItem('likes')
        }
    }
    return false
}

export const likesArr = () : number[] =>  {
    const stLikes = localStorage.getItem('likes')
    if(stLikes) {
        try {
            const arr = JSON.parse(stLikes) as number[]
            return arr
        } catch (error) {
            localStorage.removeItem('likes')
        }
    }
    return []
}