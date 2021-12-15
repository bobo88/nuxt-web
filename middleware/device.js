export default function (context) {
  const isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }
  const reg = /\/m|\/m\//
  const hasMPath = reg.test(context.route.fullPath)
  const userAgent = context.req ? context.req.headers['user-agent'] : ''
  if (!isMobile(userAgent)) {
    context.store.commit('SET_DEVICE_TYPE', 1)
    console.log('------------ 监测到当前设备：PC 端 --------------------')
    // 若终端为pc但是路径中包含/m/或者/m的
    if (hasMPath) {
      // ...
    }
  } else {
    context.store.commit('SET_DEVICE_TYPE', 2)
    console.log('------------ 监测到当前设备：M 端 --------------------')
    // 若终端为mobile但是路径中不包含/m/或者/m的
    // 重定向到mobile
    if (!hasMPath) {
      // ...
    }
  }
}
