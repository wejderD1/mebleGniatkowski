<template>
  <a href="http://facebook.com/Meble-Gniatkowski-110074451602036/?tsid=0.7106689355161742&source=result" target="_blank">
    <b-icon-facebook
      class="social-link rounded-circle"
      v-bind:class="className">
    </b-icon-facebook>
  </a>
</template>

<script>
export default {
  props: [
    'className'
  ]
}
</script>

<style lang="scss">
.social-link{
  width: 30px;
  height: 30px;
  color: #175e57;
  transition: all .5s linear;
  background-color: #fff;
  &:hover{
    transform: scale(1.1);
  }
}
</style>
