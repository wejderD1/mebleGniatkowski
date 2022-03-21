<template>
  <div>
    <div class="gallery-wrapper" v-if="isFull">
      <div
        v-for="(item, index) of files"
        class="gallery-container"
        :key="{index}"
        @click="fullToggle(index)">
        <img
          v-for="(i, index) in item.fName"
          :src="require(`../img/szafy/${i.name}-min.jpg`)"
          alt="meble"
          :key="index">
        <h2 class="gallery-items-title">Szafa Tania{{index+1}}</h2>
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
        <button class="btn btn-primary prew-btn">
          <b-icon-arrow-left @click="fullToggle"></b-icon-arrow-left>
          wsteć
        </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['searchImg'],
  data () {
    return {
      isFull: true,
      files: [
        {
          fName: [
            { name: '01_1435529833' }
          ]
        },
        {
          fName: [
            { name: '02_1435529874' }
          ]
        },
        {
          fName: [
            { name: '03_1435529918' }
          ]
        },
        {
          fName: [
            { name: '04_1435529968' }
          ]
        },
        {
          fName: [
            { name: '05_1435529997' }
          ]
        },
        {
          fName: [
            { name: '06_1435530022' }
          ]
        },
        {
          fName: [
            { name: '07_1435530062' }
          ]
        },
        {
          fName: [
            { name: '08_1435530095' }
          ]
        },
        {
          fName: [
            { name: '09_1435530130' }
          ]
        },
        {
          fName: [
            { name: '10_1435530173' }
          ]
        },
        {
          fName: [
            { name: '11_1435530240' }
          ]
        },
        {
          fName: [
            { name: '12_1435530279' }
          ]
        }
      ]
    }
  },
  methods: {
    fullToggle (i) {
      this.isFull = !this.isFull
      this.$emit('transmitInfo', this.files[i])
    }
  }
}
</script>

<style lang="scss" scoped>
.szafy-wrapper{
  display: flex;
  justify-content: center;
}
</style>
