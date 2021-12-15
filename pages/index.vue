<template>
  <!-- <el-container class="container-box">
    <el-aside class="aside-box" style="background: #069;">Aside</el-aside>
    <el-container>
      <el-header style="background: #333;">Header</el-header>
      <el-main>Main</el-main>
      <el-footer style="background: #f60;">Footer</el-footer>
    </el-container>
  </el-container> -->
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
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    isMobile: false,
    events: 'bbb'
  }),
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
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  },
  async asyncData ({ app, $axios }) {
    const { API } = app
    const data = await API.get('demo')
    console.log('------ 请求数据完成 --------')
    return {
      apiData: data
    }
  },
  fetch (context) {
    console.log('fetch----------', context.USER_AGENT, this.isMobile)
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
    console.log(3333, this.isMobile)
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
