import Vue from 'vue'

/**
 *
 * 分享封装函数
 * @param {*} type
 * type： 1 - Facebook， 2 - Reddit， 3 - Pinterest， 4 - Twitter， 5 - WhatsApp
 * @param {*} url
 * url: 需要分享出去的地址URL
 * @returns URL （拼接后的地址）
 */
Vue.prototype.$shareTo = (type, url) => {
  const encodeURIComponentURL = encodeURIComponent(url)
  const sharePrefix = [
    '',
    'https://www.facebook.com/sharer/sharer.php',
    'https://www.reddit.com/submit',
    'https://www.pinterest.com/pin/create/button/',
    'https://twitter.com/intent/tweet',
    'https://api.whatsapp.com/send/'
  ]
  const shareSuffix = [
    '',
    'u=', // Facebook
    'url=', // Reddit
    'desc=', // Pinterest
    'refer_source=', // Twitter
    'phone&text=' // WhatsApp
  ]
  const extraParameters = [
    '',
    '',
    '',
    'url=', // Pinterest
    'text=', // Twitter
    ''
  ]
  const USER_INFO = 'web_id7039267589202150918'
  // URL 拼接返回
  return sharePrefix[type] + '?' + shareSuffix[type] + encodeURIComponentURL + '&' + USER_INFO + (extraParameters[type] ? '&' + (extraParameters[type] + encodeURIComponentURL) : '')
}
