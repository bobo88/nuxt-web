import Vue from 'vue'

/**
 *
 * @param {*} type
 * 1 - Facebook， 2 - Reddit， 3 - Pinterest， 4 - Twitter， 5 - WhatsApp
 * 分享封装函数
 * @returns URL
 */
Vue.prototype.$shareTo = (type, url) => {
  console.log(type)
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
  // URL 拼接返回
  return sharePrefix[type] + '?' + shareSuffix[type] + encodeURIComponentURL + (extraParameters[type] ? '&' + (extraParameters[type] + encodeURIComponentURL) : '')
}
