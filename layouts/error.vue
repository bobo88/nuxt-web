<template>
  <div>
    <h1>404错误页面</h1>
  </div>
</template>

<script>

export default {
  data: () => ({
    loading: false,
    isMobile: false
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
  asyncData ({ params }) {
    console.log('process.static----------', process.static, params)
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
    console.log(2222)
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
</style>
