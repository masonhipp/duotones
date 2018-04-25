module.exports = {
  head: {
    title: 'Duotone Effect Generator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Create beautiful duotone color pairings and effects' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,900'}
    ],
    script: [
      // { src: 'https://checkout.stripe.com/checkout.js' }
    ]
  },
  plugins: [
  ],
  build: {
    //analyze: true,
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    extractCSS: true
  },
  css: [
    { src: '~assets/css/bulma-mod.sass', lang: 'sass' },
    { src: '~assets/css/main.scss', lang: 'scss' },
    { src: '~assets/css/hero.scss', lang: 'scss' }
  ],
  loading: { color: '#31b5eb' },
  transition: false,
  cache: true,
  ssr: true,
  router: {
    saveScrollPosition: true,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },
  modules: ['@nuxtjs/google-analytics'],
  'google-analytics': {
    id: 'UA-486257-27'
  }
}
