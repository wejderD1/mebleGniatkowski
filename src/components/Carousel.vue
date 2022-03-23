<template>
<!-- Slider items -->
  <div class="carousel-wrapper">
    <div
      class="slider-items slide"
      ref="slide">
      <img
        src="../img/mebleSystemowe/adas/wiz1_1435503475.jpg"
        alt="slide"
        class="img-fluid"
      />
      <div class="description-slider">
        <a
          href="/gallery/:id"
          class="slider-title">system adaś
        </a>
      </div>
    </div>
    <div
      class="slider-items slide"
      ref="slide">
      <img
        src="../img/mebleSystemowe/astor/wiz1_1435503905.jpg"
        alt="slide"
        class="img-fluid"
      />
      <div class="description-slider">
        <a
          href="/gallery/:id"
          class="slider-title">system astor
        </a>
      </div>
    </div>
    <div
      class="slider-items slide"
      ref="slide">
      <img
        src="../img/slide1.jpg"
        alt="slide"
        class="img-fluid"
      />
      <div class="description-slider">
        <a
          href=""
          class="slider-title">kuchnie zabudowy
        </a>
      </div>
    </div>
    <div
      class="slider-items slide"
      ref="slide">
      <img
        src="../img/slide2.jpg"
        alt="slide"
        class="img-fluid"
      />
      <div class="description-slider">
        <a
          href=""
          class="slider-title">kuchnie zabudowy
        </a>
      </div>
    </div>
    <div
      class="slider-items slide"
      ref="slide">
      <img
        src="../img/slide3.jpg"
        alt="slide"
        class="img-fluid"
      />
      <div class="description-slider">
        <a
          href="/gallery/:id/szafy_przesuwne"
          class="slider-title">szafy przesuwne
        </a>
      </div>
    </div>
    <div
      class="slider-items slide"
      ref="slide">
      <img
        src="../img/slide4.jpg"
        alt="slide"
        class="img-fluid"
      />
      <div class="description-slider">
        <a
          href="/gallery/:id/szafy_przesuwne"
          class="slider-title">szafy przesuwne
        </a>
      </div>
    </div>
        <!-- SLiders controll buttons -->
    <div class="slider-controls position-left">
      <b-icon-arrow-left class="arrow arrow-left" @click="minusSlides(1)"></b-icon-arrow-left>
    </div>
    <div class="slider-controls position-right">
      <b-icon-arrow-right class="arrow arrow-right" @click="plusSlides(1)"></b-icon-arrow-right>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sliderIndex: 1
      // sliders: [
      //   {
      //     id: 1,
      //     src: '../assets/wiz1_1435503475.jpg',
      //     alt: 'slide1',
      //     des: 'meblościanka olek'
      //   },
      //   {
      //     id: 2,
      //     src: '../img/slide2.jpg',
      //     alt: 'slide2',
      //     des: 'system adaś'
      //   },
      //   {
      //     id: 3,
      //     src: '../img/slide3.jpg',
      //     alt: 'slide3',
      //     des: 'system fino'
      //   }
      // ]
    }
  },
  methods: {
    initCarousel () {
      this.sliding = true
    },
    endSlide () {
      this.sliding = false
    },
    showSlides (n) {
      const sliders = this.$el.querySelectorAll('.slide')
      if (n > sliders.length) {
        this.sliderIndex = 1
      }

      if (n < 1) {
        this.sliderIndex = sliders.length
      }

      sliders.forEach(i => {
        i.style.display = 'none'
      })
      sliders[this.sliderIndex - 1].style.display = 'block'
    },

    plusSlides (n) {
      this.showSlides(this.sliderIndex += 1)
    },

    minusSlides (n) {
      this.showSlides(this.sliderIndex -= 1)
    }
  },
  mounted () {
    this.showSlides(this.sliderIndex)
    // setTimeout(this.showSlides(this.plusSlides(this.sliderIndex + 1)), 2000)
  }
}
</script>

<style lang="scss">
.carousel-wrapper {
  display: flex;
  justify-content: center;
  position: relative;
}

.slide {
  position: relative;
  width: 90%;
  height: auto;
  transition: all .5s linear;
  &:hover{
    cursor: pointer;
  }
}

.arrow{
  width: 25px;
  height: 25px;
  fill: #0d523d;

  transition: all .5s linear;
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
}

.position-right{
  right: 0;
}

.position-left{
  left: 0;
}

.slider-controls{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 20px;
}

.description-slider{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;

  transition: all 0.5s linear;
  &:hover{
    opacity: .8;
  }

  &:hover .slider-title{
    opacity: 1;
  }
}

.slider-title{
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
  text-decoration: none;
  opacity: 0;

  transition: all 0.5s linear;
  &:hover{
    color: #fff;
    text-decoration: underline;
  }
}
</style>
