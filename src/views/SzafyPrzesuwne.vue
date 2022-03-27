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
            { name: '261270240_1129672847573682_6491834688290733315_n' },
            { name: '261084150_1129672717573695_3573815831858801343_n' }
          ]
        },
        {
          item: [
            { name: '154299571_962285037645798_5128330137886635404_n' },
            { name: '154021084_962285007645801_5462433661369016773_n' }
          ]
        },
        {
          item: [
            { name: '147051043_951104038763898_1655025967131565077_n' },
            { name: '146759715_951104082097227_2309577313931370114_n' }
          ]
        },
        {
          item: [
            { name: '204926601_1032904090583892_6505090969742431088_n' },
            { name: '206513023_1032904050583896_1542231089211045449_n' }
          ]
        },
        {
          item: [
            { name: '186503199_1008131313061170_1101767189046640638_n' },
            { name: '185699643_1008131273061174_460016639358371069_n' }
          ]
        },
        {
          item: [
            { name: '275176341_1189447061596260_1404081519772730530_n' }
          ]
        },
        {
          item: [
            { name: '231796060_1058117874729180_3522006081665185184_n' }
          ]
        },
        {
          item: [
            { name: '165280187_979334742607494_4741335227126735546_n' }
          ]
        },
        {
          item: [
            { name: '163224100_976849186189383_3405497006971158416_n' }
          ]
        },
        {
          item: [
            { name: '154089071_962285984312370_5021702887460844102_n' }
          ]
        },
        {
          item: [
            { name: '131076492_918423082031994_152956633455676276_n' }
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
