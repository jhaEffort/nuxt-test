export default {
  mode: 'universal',
  /*
  ** Server configuration
  */
  server: {
    port: 8000,
    host: 'localhost'
  },
  /*
  ** Environment variable configuration
  */
  env: {
    baseUrl: 'http://localhost:8000'
  },
  /*
 ** Router configuration
 */
  router: {
    extendRoutes(routes, resolve) {
      console.log('输出的路由', routes)
      routes.push({
        path: '/',
        redirect: {
          name: 'timeline-title'
        }
      })
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
