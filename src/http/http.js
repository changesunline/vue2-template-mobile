import Axios from './axios.js'

const BASEURL = process.env.VUE_APP_BASE_URL

console.log(process.env)

export default function(url, data, method = 'GET') {
  const params = {
    method,
    url: `${BASEURL}${url}`,
    timeout: 120000,
    error: console.log('error')
  }

  if (method.toLocaleLowerCase() === 'post') {
    params['data'] = JSON.stringify(data)
  }

  return Axios(params)
}
