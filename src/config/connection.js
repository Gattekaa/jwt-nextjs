import axios from 'axios'
import { parseCookies } from 'nookies'

const { token } = parseCookies()

const connection = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: { Authorization: + process.env.SECRET },
})



if(token) {
    connection.defaults.headers['Authorization'] = `Bearer ${token}`
}

export default connection