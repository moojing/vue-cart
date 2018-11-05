/* eslint-disable */
import axios from 'axios'

const apiUrl = process.env.VUE_APP_API_BASE

let ajax = axios.create({
  baseURL: apiUrl
})

let logger = (prefix, config) => {
  console.log(prefix ? prefix : '' + 'logTitle :')
  console.log(prefix ? prefix : '' + 'log :', config)
}
let errlogger = (prefix, err) => {
  console.error(prefix ? prefix : '' + 'err', err)
}

const onRequestSuccess = config => {
  logger('Request__ ', config)
  return config
}

const onRequestError = config => {
  errlogger('ReqErr__', config)
  return config
}

const onResponseSuccess = config => {
  logger('Response__ ', config)
  return config
}

const onResponseError = config => {
  errlogger('ReqEr__', config)
  return config
}

ajax.interceptors.request.use(onRequestSuccess, onRequestError)
ajax.interceptors.response.use(onResponseSuccess, onResponseError)
ajax.defaults.withCredentials = true

export default ajax
