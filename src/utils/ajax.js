/* eslint-disable */
import axios from 'axios'

const apiUrl = process.env.VUE_APP_API_BASE

let ajax = axios.create({
  baseURL: apiUrl
})

const onRequestSuccess = config => {
  return config
}

const onRequestError = config => {
  return config
}

const onResponseSuccess = config => {
  return config
}

const onResponseError = config => {
  return config
}

ajax.interceptors.request.use(onRequestSuccess, onRequestError)
ajax.interceptors.response.use(onResponseSuccess, onResponseError)
ajax.defaults.withCredentials = true

export default ajax
