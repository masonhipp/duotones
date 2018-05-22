<template>
  <nuxt />
</template>

<script>

export default {
  components: {
  },
  head: {
    meta : [
      { charset: 'utf-8' },
      { property: 'og:url', content: 'https://duotones.co' },
      { property: 'og:title', content: 'Instant Duotone Effect Generator' },
      { property: 'og:description', content: 'Create beautiful duotone effects instantly in your browser for. Upload your own image or use one of ours: dozens of perfect duotone pairings included.' },
      { property: 'og:image', content: 'https://duotones.co/duotones-preview-4.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ],
    link: [
      { rel: 'canonical', href: 'https://medialoot.com/duotones'}
    ]
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style lang="scss">

</style>
