const path = require('path')
export default {
  loading: {
    color: 'blue',
    height: '5px'
  },
  // ssr: false,
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TODO 官网 DEMO',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keyword', content: 'TODO Bob' },
      { hid: 'description', name: 'description', content: '我是来源Nuxt.config.js配置的内容!' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/rem/flexible.js', type: 'text/javascript', charset: 'utf-8'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css', // 直接引入css文件
    {src:'./assets_pc/index.scss', lang: 'scss'}, // PC端样式
    {src:'./assets/index.scss', lang: 'scss'}, // M端样式
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/api',
    '@/plugins/scrollto',
    '@/plugins/tools'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources', // 添加style-resource模块
    'vue-scrollto/nuxt',
    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 300 }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  router: {
    // 在每页渲染前运行中间件判断终端，是移动端还是pc端
    middleware: ['device']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    postcss: [
      require('postcss-px2rem-exclude')({
        remUnit: 75,
        exclude: '/node_modules|assets_pc/i'
      })
    ]
  }
}
