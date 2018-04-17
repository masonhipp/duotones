<template>
  <div class="wrapper">
    <section class="hero is-medium is-bold fourohfour">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-vcentered">
              <h1 class="title is-1">{{ error.statusCode }}</h1>
              <h2 class="subtitle is-2">{{ error.message }}</h2>
            </div>
            <div class="column is-one-third">
              <img style="float:right; width:auto;height:auto;max-width:100vw;" src="https://medialoot.com/assets/img/site/pencil-hi.png" >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  props:[
    'error'
  ],
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.fourohfour {
  .title{
    font-weight:bold;
  }
  background-color:#f3f3f3;
}
.wrapper{
  background-color:#fafafa;
  border-top:2px solid #31b5eb;
}
.title
{
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

.button.is-large{
    height:2.75em;
    padding:.5em 1.5em .65em;
}
</style>
