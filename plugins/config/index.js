// 将接口地址(API_URL)和BASE_URL都从该文件中导出
import url from './url'
export const API_URL = url // 引入api接口
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
// 根据环境变量配置不同的baseUrl
let baseUrl
if (process.env.NODE_ENV === 'local') {
  baseUrl = 'http://localhost:3000/'
} else if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3000/'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://xxx.com/' // 线上地址
}

export const BASE_URL = baseUrl
