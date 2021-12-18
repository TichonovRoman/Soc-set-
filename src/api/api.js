import axios from 'axios';

const instance = axios.create({  //это добавляем повторяющееся в один файл и добавляем где нужно
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cdcf9189-0a6c-4ea6-a766-22c26d9d1d3e"
    }
})

export const usersApi = {
getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        { withCredentials: true })
        .then(response => {
            return response.data
        })
},

unfollowAction(id) {
    return instance.delete(`follow/${id}`)
        },

followAction(id) {
    return instance.post(`follow/${id}`, {})
        }


}





