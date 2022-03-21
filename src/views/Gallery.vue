<template>
  <div class="gallery-inner">
    <Submenu />
    <router-view
      v-on:transmitInfo="transmit"
      :searchImg="this.searchImg"
    ></router-view>
  </div>
</template>

<script>
import Submenu from '../components/Submenu.vue'

export default {
  data () {
    return {
      searchImg: []
    }
  },
  components: {
    Submenu
  },
  methods: {
    transmit (files) {
      this.searchImg = files.fName
    }
  }
}
</script>
