scrollSmoothTo (position) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      return setTimeout(callback, 17)
    }
  }
  // 当前滚动高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // 滚动step方法
  const step = function () {
    // 距离目标滚动距离
    const distance = position - scrollTop
    // 目标滚动位置
    scrollTop = scrollTop + distance / 5
    if (Math.abs(distance) < 1) {
      window.scrollTo(0, position)
    } else {
      window.scrollTo(0, scrollTop)
      requestAnimationFrame(step)
    }
  }
  step()
},
scrollSmoothToSimple (position) {
  // 阻力，数值越大，滑动越慢
  const drag = 10
  const sTop = document.documentElement.scrollTop || document.body.scrollTop
  if (sTop > 0) {
    window.requestAnimationFrame(this.scrollSmoothToSimple)
    window.scrollTo(position, sTop - sTop / drag)
  }
},
// 自定义平滑滚动
scrollToCustom (type) {
  // type: 临界点类型
  // if ()
  // this.$scrollTo(document, 0, {
  //   offset: secondBoxTop - windowH
  // })
},