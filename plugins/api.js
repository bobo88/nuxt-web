export default function ({ app, $axios, redirect }) {
  console.log('---------- api loading...... ----------')
  const { BASE_URL, API_URL } = require('./config') // 获取封装的base_url和接口管理
  const api = $axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
  // 请求拦截器,在请求之前执行
  api.interceptors.request.use((config) => {
    config.url = API_URL[config.url]
    return config
  }, (error) => {
    return Promise.reject(error)
  })
  // 响应拦截器,在响应之前执行
  api.interceptors.response.use((res) => {
    return res.data
  }, (error) => {
    return Promise.reject(error)
  })
  app.API = api
}
