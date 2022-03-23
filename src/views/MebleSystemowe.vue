<template>
  <div>
    <div class="gallery-wrapper" v-if="isFull">
      <div
        v-for="(item, index) of photos"
        class="gallery-container"
        :key="index"
        @click="fullToggle(index)">
        <GalleryItems :arr="photos[index]" folder="mebleSystemowe" />
        <!-- <h2 class="gallery-items-title">Szafa Tania{{index}}</h2> -->
      </div>
    </div>
    <div
      v-else
      class="gallery-full-container">
        <img
          v-for="(i, index) in searchImg"
          :key="index"
          :src="require(`../img/mebleSystemowe/${i.name}.jpg`)"
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
            { name: 'adas/wiz1_1435503475' },
            { name: 'adas/wiz2_1435503486' }
          ],
          title: 'System ADAŚ'
        },
        {
          item: [
            { name: 'astor/wiz1_1435503905' },
            { name: 'astor/wiz2_1435503911' }
          ],
          title: 'System ASTOR'
        },
        {
          item: [
            { name: 'capri/wiz1_1435504379' },
            { name: 'capri/wiz2_1435504387' }
          ],
          title: 'System CAPRI'
        },
        {
          item: [
            { name: 'celtik/ar1_celtik_-RGB_color-0000 R55_1606129047' },
            { name: 'celtik/ar2_celtik_-origRGB-0000 dab s_1606129234' }
          ],
          title: 'System CELTIK'
        },
        {
          item: [
            { name: 'craft/ar1_wer2_-RGB_color-0000_1520407416' },
            { name: 'craft/ar2_-RGB_color-0000_1520407539' }
          ],
          title: 'System CRAFT'
        },
        {
          item: [
            { name: 'daria/ar5_daria_b_-RGB_color-0002_1584961617' },
            { name: 'daria/ar5_daria_b_-RGB_color-0000_1584961601' }
          ],
          title: 'System DARIA'
        },
        {
          item: [
            { name: 'fino/ar4_fino_b_-RGB_color-0000_1584961453' },
            { name: 'fino/wiz2_1435503760' }
          ],
          title: 'System FINO'
        },
        {
          item: [
            { name: 'hawana/wiz2_1435504191' },
            { name: 'hawana/ar6_hawana_-RGB_color-0000_1584961953' }
          ],
          title: 'System HAWANA'
        },
        {
          item: [
            { name: 'ika/ar2_pop_1457017776' },
            { name: 'ika/ar2_pop_nelson_1457017829' }
          ],
          title: 'System IKA'
        },
        {
          item: [
            { name: 'imperialLed/ar1_imperial_led_b_-RGB_color-_1584958511' },
            { name: 'imperialLed/ar1_imperial_led_b_-RGB_color-_1584958532' }
          ],
          title: 'System IMPERIAL LED'
        },
        {
          item: [
            { name: 'ladis/ar2_pop_opis_1457016670' },
            { name: 'ladis/ar2_pop_opis2_1457017573' }
          ],
          title: 'System LADIS'
        },
        {
          item: [
            { name: 'largo/wiz1_1435503865' },
            { name: 'largo/wiz2_1435503891' }
          ],
          title: 'System LARGO'
        },
        {
          item: [
            { name: 'magnum/ar1_magnum_-RGB_color-0000_1584958168' },
            { name: 'magnum/ar2_magnum_-RGB_color-0000_1584957904' }
          ],
          title: 'System MAGNUM'
        },
        {
          item: [
            { name: 'malibu/ar1_malibu_-RGB_color-0000_1584960383' },
            { name: 'malibu/ar1_malibu2_-RGB_color-0000pop_1584960398' }
          ],
          title: 'System MALIBU'
        },
        {
          item: [
            { name: 'modern/wiz1_1435504078' },
            { name: 'modern/wiz2_1435504087' }
          ],
          title: 'System MODERN'
        },
        {
          item: [
            { name: 'olek/ar1_dostrzal_1495199217' },
            { name: 'olek/ar7_olek_b_-RGB_color-0000_1584962092' }
          ],
          title: 'System OLEK'
        },
        {
          item: [
            { name: 'wegas/ar2_vegas_-origRGB-0000 dab le_1606128003' },
            { name: 'wegas/w12_1606127702' }
          ],
          title: 'System WEGAS'
        },
        {
          item: [
            { name: 'wenus/ar3_wenus_-RGB_color-0000_1584961115' },
            { name: 'wenus/wiz2_1435504334' }
          ],
          title: 'System WENUS'
        },
        {
          item: [
            { name: 'clio/ar1_wer2_-RGB_color-0000_1520427944' },
            { name: 'clio/ar2_-RGB_color-0000_1520427778' }
          ],
          title: 'System CLIO'
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

<style lang="scss">
.gallery-items-title{
  text-transform: uppercase;
  font-size: 15px;
  padding-top: 10px;
  text-align: center;
}

.gallery-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.gallery-container{
  display: grid;
  grid-template-row: 1fr 1fr;
  grid-row-gap: 0px;
  justify-items: center;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  transition: all .3s linear;
  & figure{
    margin: 0;
  }
  & img{
    width: 90%;
    height: auto;
  }
  &:hover{
    transform: scale(1.01);

  }
}

.gallery-container .active{
  justify-items: end;
}

.gallery-full-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & img{
    width: 80%;
    height: auto;
    padding-bottom: 20px;
  }

.prew-btn{
    text-align: center;
    text-transform: uppercase;
    background-color: #e29578;
    border-color: #e29578;
  }
}
</style>
