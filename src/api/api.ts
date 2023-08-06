import axios from "axios";
import {CutomFormData } from "../components/Profile/ProfileInfo/ProfileDataForm";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '6f4db439-9884-4ff2-8dec-d35fda8e60cc'
    }
})


export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then((response) => {
                return response.data
            })
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {})
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then((response) => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<ResponseType<{ userId: number }>>('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    },
    getCaptchaUrl() {
        return instance.get<{url: string}>('security/get-captcha-url')
            .then(res => res.data)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status})
    },
    updateProfilePhoto(file: any) {
        let formData = new FormData()
        formData.append('file', file)
        return instance.put('profile/photo', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    },
    updateProfileData(data: CutomFormData) {
        return instance.put<ResponseType>('profile', data)
    }
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}


