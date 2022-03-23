<template>
  <div>
    <figure v-for="(i, ind) in this.imgArr.item" :key="ind">
      <img :src="require(`../img/${folder}/${i.name}-min.jpg`)" alt="photo">
    </figure>
  </div>
</template>

<script>
export default {
  props: ['arr', 'folder'],
  data () {
    return {
      imgArr: Object.assign({}, this.arr)
    }
  },
  mounted () {
    console.log(this.folder)
  }
}
</script>
