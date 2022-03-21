<template>
  <div class="container">
    <div class="home-inner">
      <Carousel />
    </div>
  </div>
</template>
<script>
import Carousel from '../components/Carousel.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    Carousel
  }
}
</script>

<style lang="scss">
.logo {
  width: 100px;
}

.home-inner hr{
  display: block;
  height: 1px;
  width: 100%;
  color: #83C5BE;
}
</style>
