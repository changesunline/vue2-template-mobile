import axios from 'axios'
// import router from '../router'
import { Indicator, MessageBox } from 'mint-ui'

let _axios = axios.create({
  headers: {
      'Content-Type': 'application/json'
  },
  timeout: 8000
})

// 请求拦截
_axios.interceptors.request.use(
  confing => {
    Indicator.open({ spinnerType: 'fading-circle' })
    const token = localStorage.getItem('token')
    //设置请求头
    if (token) {
      config.headers.Token = token
    }

    return confing
  },
  error => {
    return Promise.reject(error)
  }
)

//响应拦截

_axios.interceptors.response.use(
  response => {
    Indicator.close()
    const {status, statusText, data} = response
    if (status != 200 || statusText != 'OK') {
      MessageBox.alert('抱歉，系统出错了')
    }
    console.log(response)
    return data
  },
  error => {
    Indicator.close()
    MessageBox.alert(error.response.data)
    // 获取状态码
    const { status } = error.response

    if (status === 401) {
      MessageBox.alert('请重新登录')
      //清楚token
      localStorage.removeItem('token')
      //跳转到登录页面
      // router.push('/login')
    }
    return Promise.reject(error)
  }
)
export default _axios
