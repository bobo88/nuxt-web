module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // 关闭eslint错误 “HTML标记前后的预期换行”
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    "no-console": "off",
    // vue/html-自关闭
    'vue/html-self-closing': ["error", {
      "html": {
        "void": "never",
        "normal": "any",
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}
