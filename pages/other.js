// scrollSmoothTo (position) {
//   if (!window.requestAnimationFrame) {
//     window.requestAnimationFrame = function (callback, element) {
//       return setTimeout(callback, 17)
//     }
//   }
//   // 当前滚动高度
//   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
//   // 滚动step方法
//   const step = function () {
//     // 距离目标滚动距离
//     const distance = position - scrollTop
//     // 目标滚动位置
//     scrollTop = scrollTop + distance / 5
//     if (Math.abs(distance) < 1) {
//       window.scrollTo(0, position)
//     } else {
//       window.scrollTo(0, scrollTop)
//       requestAnimationFrame(step)
//     }
//   }
//   step()
// },
// scrollSmoothToSimple (position) {
//   // 阻力，数值越大，滑动越慢
//   const drag = 10
//   const sTop = document.documentElement.scrollTop || document.body.scrollTop
//   if (sTop > 0) {
//     window.requestAnimationFrame(this.scrollSmoothToSimple)
//     window.scrollTo(position, sTop - sTop / drag)
//   }
// },
// // 自定义平滑滚动
// scrollToCustom (type) {
//   // type: 临界点类型
//   // if ()
//   // this.$scrollTo(document, 0, {
//   //   offset: secondBoxTop - windowH
//   // })
// },

// <!-- https://www.facebook.com/sharer/sharer.php    ?app_id=113869198637480&display=popup&sdk=joey&u=https://www.tiktok.com/@happy_videos_follow/video/7045881112307977519?is_from_webapp=1&sender_device=pc&web_id7039267589202150918 -->
// <li>Share to Facebook</li>
// <!-- https://www.reddit.com/submit                   ?url=https://www.tiktok.com/@happy_videos_follow/video/7045881112307977519?is_from_webapp=1&sender_device=pc&web_id7039267589202150918 -->
// <li>Share to Reddit</li>
// <!-- https://www.pinterest.com/pin/create/button/    ?desc=https://www.tiktok.com/@happy_videos_follow/video/7045881112307977519?is_from_webapp=1&sender_device=pc&web_id7039267589202150918&media=https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-common-sg/mtact/static/images/share_img.png`&url=https://www.tiktok.com/@happy_videos_follow/video/7045881112307977519?is_from_webapp=1&sender_device=pc&web_id7039267589202150918 -->
// <li>Share to Pinterest</li>
// <!-- https://twitter.com/intent/tweet                ?refer_source=https://www.tiktok.com/@happy_videos_follow/video/7045881112307977519?is_from_webapp=1&sender_device=pc&web_id7039267589202150918&text=https://www.tiktok.com/@happy_videos_follow/video/7045881112307977519?is_from_webapp=1&sender_device=pc&web_id7039267589202150918 -->
// <li>Share to Twitter</li>
// <!-- https://api.whatsapp.com/send/                  ?phone&text=https://www.tiktok.com/@happy_videos_follow/video/7045881112307977519?is_from_webapp=1&sender_device=pc&web_id7039267589202150918&app_absent=0 -->
// <li>Share to WhatsApp</li>
