<template>
  <footer id="footer">
    <div class="footer-inner d-flex justify-content-between align-items-center pe-4">
      <p>&copy; MEBLE Gniatkowski, 2022</p>
      <SocialLink className="social-link_small" />
    </div>
  </footer>
</template>

<script>
import SocialLink from '../components/SocialLink.vue'

export default {
  components: {
    SocialLink
  }
}
</script>

<style lang="scss">
#footer{
  margin-top: 20px;
  padding: 10px;
  flex: 0 0 auto;
}
</style>
