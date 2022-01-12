<template>
  <div>
    <transition name="fade">
      <div v-show="!isHidden" class="first-box">
        <h1 class="todo-title">
          <el-button :type="USER_AGENT === 1 ? 'primary' : 'success'" class="w100Percent vt">Nuxt官网适配 - PC/移动端</el-button>
        </h1>

        <div class="share-box tc mb30">
          <ul>
            <li class="inline-block mr10" v-for="(item, index) in btnTextArr" :key="item">
              <el-button size="mini" :type="btnTypeArr[index]" @click="shareTo(index + 1)">{{ item }}</el-button>
            </li>
          </ul>
        </div>

        <h3 class="todo-desc mb30">当前设备判定为： <span class="color-danger fb">{{ USER_AGENT === 1 ? 'PC端' : 'M端/移动端' }}</span></h3>

        <p class="mb30 pr20 pl20 tc f18 color-info">apiData: {{ apiData }}</p>

        <div class="video-box-bg mb30">
          <div class="video-box">
            <p class="video-item">模拟视频</p>
          </div>
        </div>

        <div class="beauty-image tc">
          <div id="js-transBox" class="trans-box mb30">
            <transition name="fadeInLeft">
              <p v-show="isTrans" class="beauty-tit color-warning">要想访问量好，封面吸引少不了！（我有动画）</p>
            </transition>
          </div>
          <!-- 走马灯 -->
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
      </div>
    </transition>

    <div id="js-secondBox" class="second-box">
      <h3 class="pt20 pb20 tc color-link">第二页</h3>
      <div class="beauty-image mb30 tc">
        <p class="beauty-tit color-warning mb20">要想访问量好，封面吸引少不了！</p>
        <el-carousel trigger="click" class="carousel-box" indicator-position="none">
          <el-carousel-item v-for="item in 3" :key="item">
            <el-image class="box-radius" :src="require('~/assets/images/beauty_' + item + '.png')"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="tc">
        <el-button size="small" type="success" @click="resetStatus">重置状态 - 第一屏/第二屏</el-button>
      </div>
    </div>
  </div>
</template>

<script>
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
    // isTrans标签：页面滑动 - 触发动画效果
    isTrans: true,
    loading: false,
    isMobile: false,
    // 切换到 “第二屏” 时是否隐藏 “第一屏”
    hiddenFirstFlag: true,
    // “第一屏” 默认展示
    isHidden: false,
    events: 'bbb',
    btnTypeArr: ['primary', 'success', 'info', 'warning', 'danger'],
    btnTextArr: ['FB', 'Reddit', 'Pin', 'TW', 'WhatsApp']
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
    this.scrollInit(0)
  },
  methods: {
    shareTo (type) {
      console.log('Type: ', type)
      // console.log(this.$shareTo(type))
      const shareUrl = this.$shareTo(type, 'https://activity.vskit.tv/checkin/index.html')
      window.open(shareUrl, '_blank')
    },
    scrollInit (delay) {
      window.onscroll = this.debounce(this.onScroll, delay)
    },
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    // 重置
    resetStatus () {
      this.isHidden = false
      this.$scrollTo(document, 0, {
        offset: 0
      })
    },
    // 防抖函数
    debounce (fn, delay) {
      // 借助闭包
      let timer = null
      return function () {
        if (timer) {
          clearTimeout(timer)
        }
        // 简化写法
        timer = setTimeout(fn, delay)
      }
    },
    onScroll () {
      // console.log('scroll......')
      const secondBox = document.getElementById('js-secondBox')
      const transBox = document.getElementById('js-transBox')
      // 获取当前页面滚动条纵坐标的位置
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 获取 "第二屏" 页面距离顶部的位置
      const secondBoxTop = secondBox.offsetTop
      const transBoxTop = transBox.offsetTop
      // 获取 浏览器/设备 的屏幕高度
      const windowH = window.innerHeight
      console.log(scrollTop, secondBoxTop, windowH)
      // 临界点 - 1：“第二屏” 刚好要展示出来，scrollTop > secondBoxTop - windowH。
      // 临界点 - 2：当 “第二屏” 展示出来超过 30% 时，“设定时间” 内全部展示 “第二屏”，否则 “设定时间” 内展示 “第一屏” 底部（用户再次滑动依然执行此机制）。
      // 公式：  scrollTop - (secondBoxTop - windowH) > windowH * 0.3
      // 备注： 0.3 属于自定义数值（可根据实际情况 调大 / 调小）
      if (scrollTop - (secondBoxTop - windowH) > windowH * 0.3) {
        this.scrollInit(100)
        console.log('临界点 - 2')
        this.$scrollTo(secondBox, 0, {
          offset: secondBoxTop
        })
        // 平缓隐藏掉 “第一屏”
        setTimeout(() => {
          this.hiddenFirstFlag ? (this.isHidden = true) : (this.isHidden = false)
        }, 500)
      } else if (scrollTop - (secondBoxTop - windowH) > 0) {
        this.scrollInit(100)
        console.log('------ 11 ------')
        this.$scrollTo(document, 0, {
          offset: secondBoxTop - windowH
        })
      } else {
        this.scrollInit(0)
        scrollTop > transBoxTop - 50 ? (this.isTrans = false) : (this.isTrans = true)
        console.log(scrollTop, transBoxTop, '------ 22 -----')
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
