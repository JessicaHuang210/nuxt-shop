export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  // srcDir: "src",
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  // 頁面轉場
  pageTransition: "fade",
  /*
   ** Global CSS
   */
  css: ["~assets/scss/index.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/axios",
    "~/plugins/filter.js",
    "~/plugins/firebase.js",
    "~/plugins/vee.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // 全域 sass 變數設定
    "@nuxtjs/style-resources",
    // fontawesome
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          //import whole set
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  // 全域 sass (變數、mixin、extend... ) 檔案引入設定
  styleResources: {
    scss: ["~assets/scss/variables.scss", "~assets/scss/mixins.scss"]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
