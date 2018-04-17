<template>
  <div class="modal is-active" v-if="activeModal === name"><div class="modal-background" @click.prevent="closeModal"></div>
    <div class="modal-content is-narrow"><div class="box extra-padding">
        <!-- begin content -->
        <slot>
        </slot>
        <!-- end content -->
    </div></div><button class="modal-close"  @click.prevent="closeModal"></button>
  </div> <!-- end new hero modal -->
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    computed: {
        ...mapState([
          'activeModal',
          'pageStatus'
        ]),
        ...mapGetters([
          'currentHero'
        ]),
    },
    methods: {
      ...mapMutations([
        'openModal',
        'closeModal',
      ]),
      ...mapActions([
        'login',
        'register'
      ])
    }
}
</script>

<style scoped>
.extra-padding{
  padding:1.5rem 2rem 2rem;
}
</style>
