<template>
<div>
  <div class="container pt-3">
    <div class="nav-inner d-flex justify-content-between align-items-center p-2">
      <img class="logo col-2" src="./assets/g-logo.png" alt="logo" />
      <div class="contact-wrapper">
        <SocialLink className="social-link_small"/>
        <p>tel: 222-222-222</p>
        <p>e-mail: daniel@gmail.com</p>
      </div>
      <Menu/>
    </div>
    <hr>
    <router-view class="main" />
    <hr>
    <Footer />
  </div>
</div>
</template>
<script>
import Menu from './components/Menu.vue'
import SocialLink from './components/SocialLink.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    SocialLink,
    Menu,
    Footer
  }
}
</script>
<style lang="scss">
@import './colorVariable.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
body {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  margin: 0;
  padding: 0;
  height: 100%;
}

.main-title {
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-weight: 300;
  color: #e29578;
  text-transform: uppercase;
}

.container {
  display: flex;
  flex-direction: column;
  background-color: #EDF6F9;
}

.contact-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-left: 10px;
  & p{
    margin: 0;
    font-size: 10px;
  }
}
.social-link_small{
  width: 20px !important;
  height: 20px !important;
}

.main {
  flex: 1 0 auto;
}

// MEDIA
@import "./media.scss";
</style>
