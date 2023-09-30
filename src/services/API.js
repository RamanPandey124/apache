import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:2100'})

export default API