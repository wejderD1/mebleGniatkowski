<template>
  <div>
    <div class="gallery-wrapper" v-if="isFull">
      <div
        v-for="(item, index) of photos"
        class="gallery-container"
        :key="index"
        @click="fullToggle(index)">
        <GalleryItems :arr="photos[index]" folder="szafy" />
        <!-- <h2 class="gallery-items-title">Szafa Tania{{index}}</h2> -->
      </div>
    </div>
    <div
      v-else
      class="gallery-full-container">
        <img
          v-for="(i, index) in searchImg"
          :key="index"
          :src="require(`../img/szafy/${i.name}.jpg`)"
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
            { name: '261084150_1129672717573695_3573815831858801343_n' },
            { name: '261270240_1129672847573682_6491834688290733315_n' }
          ]
        },
        {
          item: [
            { name: '01_1435529833' }
          ]
        },
        {
          item: [
            { name: '02_1435529874' }
          ]
        },
        {
          item: [
            { name: '03_1435529918' }
          ]
        },
        {
          item: [
            { name: '04_1435529968' }
          ]
        },
        {
          item: [
            { name: '05_1435529997' }
          ]
        },
        {
          item: [
            { name: '06_1435530022' }
          ]
        },
        {
          item: [
            { name: '07_1435530062' }
          ]
        },
        {
          item: [
            { name: '08_1435530095' }
          ]
        },
        {
          item: [
            { name: '09_1435530130' }
          ]
        },
        {
          item: [
            { name: '10_1435530173' }
          ]
        },
        {
          item: [
            { name: '11_1435530240' }
          ]
        },
        {
          item: [
            { name: '12_1435530279' }
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
