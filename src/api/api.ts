import axios from "axios";

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
            .then((response)=> {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    }
}


