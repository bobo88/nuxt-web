<template>
  <div>
    <h1 class="todo-title mb20">
      <el-button :type="USER_AGENT === 1 ? 'primary' : 'success'" class="w100Percent vt">Nuxt官网适配 - PC/移动端</el-button>
    </h1>

    <h3 class="todo-desc mb30">当前设备判定为： <span class="color-danger fb">{{ USER_AGENT === 1 ? 'PC端' : 'M端/移动端' }}</span></h3>

    <p class="mb30 pr20 pl20 tc f18 color-info">apiData: {{ apiData }}</p>

    <div class="beauty-image tc">
      <p class="beauty-tit color-warning mb20">要想访问量好，封面吸引少不了！</p>
      <el-carousel trigger="click" class="carousel-box" indicator-position="none">
        <el-carousel-item v-for="item in 4" :key="item">
          <el-image class="box-radius" :src="require('~/assets/images/beauty_' + item + '.png')"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="mb30 tc">
      <el-empty description="描述文字 - TODO - 1"></el-empty>
      <el-empty description="描述文字 - TODO - 2"></el-empty>
    </div>

    <div id="js-secondBox" class="second-box">
      <h3 class="pt20 pb20 tc color-link">第二页</h3>
      <div class="beauty-image tc">
        <p class="beauty-tit color-warning mb20">要想访问量好，封面吸引少不了！</p>
        <el-carousel trigger="click" class="carousel-box" indicator-position="none">
          <el-carousel-item v-for="item in 3" :key="item">
            <el-image class="box-radius" :src="require('~/assets/images/beauty_' + item + '.png')"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
// import SmoothScroll from 'smooth-scroll'
export default {
  async asyncData ({ app, $axios }) {
    const { API } = app
    const data = await API.get('demo')
    console.log('------ 请求数据完成 --------')
    return {
      apiData: data
    }
  },
  data: () => ({
    loading: false,
    isMobile: false,
    events: 'bbb'
  }),
  fetch (context) {
    console.log('fetch----------', context.USER_AGENT, this.isMobile)
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'descriptions',
          name: 'descriptions',
          content: 'Home page description'
        }
      ]
    }
  },
  computed: {
    USER_AGENT () {
      return this.$store.state.USER_AGENT
    }
  },
  beforeCreate () {
    console.log(11111)
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    // xxx
  },
  mounted () {
    this.$nextTick(function () {
      this.onScroll()
    })
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
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
    onScroll () {
      console.log('scroll......')
      const secondBox = document.getElementById('js-secondBox')
      // 获取当前页面滚动条纵坐标的位置
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 获取 "第二屏" 页面距离顶部的位置
      const secondBoxTop = secondBox.offsetTop
      // 获取 浏览器/设备 的屏幕高度
      const windowH = window.innerHeight
      console.log(scrollTop, secondBoxTop, windowH)
      // 临界点 - 1：“第二屏” 刚好要展示出来，scrollTop > secondBoxTop - windowH。
      // 临界点 - 2：当 “第二屏” 展示出来超过 30% 时，“设定时间” 内全部展示 “第二屏”，否则 “设定时间” 内展示 “第一屏” 底部（用户再次滑动依然执行此机制）。
      // 公式：  scrollTop - (secondBoxTop - windowH) > windowH * 0.3
      // const scroll = new SmoothScroll()
      if (scrollTop - (secondBoxTop - windowH) > windowH * 0.3) {
        console.log('临界点 - 2')
        // console.log(this.$scrollTo)
        this.$scrollTo(secondBox, 0, {
          offset: secondBoxTop
        })
        // scroll.animateScroll(secondBox)
        // window.scrollTo(secondBoxTop)
        // this.scrollSmoothTo(secondBoxTop)
        // this.scrollSmoothToSimple(secondBoxTop)
      }
    }
  }
}
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
  .container-box {
    width: 100%;
    height: 100vh;
  }
  .box-radius {
    border-radius: 10px;
    overflow: hidden;
  }
</style>
