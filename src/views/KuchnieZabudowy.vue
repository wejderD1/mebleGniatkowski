<template>
  <div>
    <div class="gallery-wrapper" v-if="isFull">
      <div
        v-for="(item, index) of photos"
        class="gallery-container"
        :key="index"
        @click="fullToggle(index)">
        <GalleryItems :arr="photos[index]" folder="kuchnieZabudowy" />
        <!-- <h2 class="gallery-items-title">Szafa Tania{{index}}</h2> -->
      </div>
    </div>
    <div
      v-else
      class="gallery-full-container">
        <img
          v-for="(i, index) in searchImg"
          :key="index"
          :src="require(`../img/kuchnieZabudowy/${i.name}.jpg`)"
          alt="meble">
        <Button :function="fullToggle" />
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import GalleryItems from '../components/GalleryItems.vue'

export default {
  props: ['searchImg'],
  components: {
    Button,
    GalleryItems
  },
  data () {
    return {
      isFull: true,
      photos: [
        {
          item: [
            { name: '249259626_1111608319380135_8926402232052575151_n' },
            { name: '249998310_1111608226046811_4640593710431849539_n' }
          ]
        },
        {
          item: [
            { name: '274747344_1189441678263465_4432828573132373652_n' },
            { name: '274885936_1189441861596780_3974999906619755173_n' }
          ]
        },
        {
          item: [
            { name: '75089994_2453409324712183_1630106132267663360_n' },
            { name: '75369219_2453409418045507_7303113186973057024_n' }
          ]
        },
        {
          item: [
            { name: '121969457_3341755539210886_1966190563222996972_n' },
            { name: '122007652_3341755439210896_968823799572353373_n' }
          ]
        },
        {
          item: [
            { name: '122065057_3341755662544207_596552187783178308_n' },
            { name: '122094390_3341756209210819_8476882212414036930_n' }
          ]
        },
        {
          item: [
            { name: '126161311_3434998876553218_604161568731678868_n' },
            { name: '126396893_3434996739886765_1761960039129046301_n' }
          ]
        },
        {
          item: [
            { name: '250903174_4421110951275334_8950834331680045046_n' },
            { name: '251775933_4421110867942009_2760784121010990338_n' }
          ]
        },
        {
          item: [
            { name: '271947405_4695681193818307_7179259047181696091_n' }
          ]
        },
        {
          item: [
            { name: '969752233143856' }
          ]
        },
        {
          item: [
            { name: '969752366477176' }
          ]
        },
        {
          item: [
            { name: 'IMG_20151026_193237' }
          ]
        },
        {
          item: [
            { name: 'IMG_20160219_113802' }
          ]
        },
        {
          item: [
            { name: 'IMG_20160331_153856' }
          ]
        },
        {
          item: [
            { name: '20161020_133037' }
          ]
        },
        {
          item: [
            { name: '20161215_190449' }
          ]
        },
        {
          item: [
            { name: '20170322_115153' }
          ]
        }
      ]
    }
  },
  methods: {
    fullToggle (i) {
      this.isFull = !this.isFull
      this.$emit('transmitInfo', this.photos[i])
    }
  }
}
</script>
