import axios from 'axios'

axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
})
axios.interceptors.request.use(config => {})

axios.interceptors.response.use(config => {})
