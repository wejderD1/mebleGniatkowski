<template>
  <div class="kontakty-inner">
    <div class="text-wrapper">
      <h1 class="main-title">O firmie</h1>
      <About />
    </div>
    <div class="text-wrapper">
      <h1 class="main-title">kontakt</h1>
      <Contakts />
    </div>
  </div>
</template>

<script>
import About from '../components/About.vue'
import Contakts from '../components/Contakts.vue'
export default {
  components: {
    About,
    Contakts
  }
}
</script>

<style lang="scss">
.text-wrapper {
  margin: 20px 0;
  padding-bottom: 20px;
}
</style>
