import axios from "axios";

// single Axios instance for our app

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents () {
        return apiClient.get('/events')
    },
    
    getEvent(id) {
        return apiClient.get('/events/'+ id )
    }
}