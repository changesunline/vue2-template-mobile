import requestApi from '../http/http.js'

export function queryUserInfo(data) {
  const url =
    '/gateway/base-china/workWeiXin/noTokenFilter/queryUserInfo?' + data
  return requestApi(url)
}
