<template>
  <nuxt />
</template>

<script>

export default {
  data: () => ({
    // xx
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
    onResize () {
      console.log(window.innerWidth > 640, window.screen.width > 640)
      if (window.innerWidth > 640 && window.screen.width > 640) {
        console.log('##### PC #####')
        this.$store.commit('SET_DEVICE_TYPE', 1)
      } else {
        console.log('##### M #####')
        this.$store.commit('SET_DEVICE_TYPE', 2)
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.onResize()
    })
    window.addEventListener('resize', this.onResize)
  }
}
</script>

<style scoped>
</style>
