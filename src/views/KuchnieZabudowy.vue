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
            { name: '187710053_1010843079456660_5006424405426843583_n' },
            { name: '186498457_1010843036123331_7889809743427458219_n' }
          ]
        },
        {
          item: [
            { name: '185305728_1007878403086461_3483614097762537093_n' },
            { name: '185663734_1007878363086465_1434509148960063636_n' }
          ]
        },
        {
          item: [
            { name: '177487724_996955947512040_581065108418112299_n' },
            { name: '177565174_996956014178700_1121844150512598224_n' }
          ]
        },
        {
          item: [
            { name: '165219786_979333915940910_5070831918884103487_n' },
            { name: '165053943_979333722607596_3164533455393593174_n' }
          ]
        },
        {
          item: [
            { name: '153988909_962285894312379_2972714898900698043_n' },
            { name: '154006605_962285707645731_318339387888216082_n' }
          ]
        },
        {
          item: [
            { name: '176880267_995375484336753_8269906102858026399_n' },
            { name: '176331667_995375447670090_3579464815447598795_n' }
          ]
        },
        {
          item: [
            { name: '146591659_950773915463577_14881663606721144_n' },
            { name: '146546298_950773782130257_4989593213008576615_n' }
          ]
        },
        {
          item: [
            { name: '141074933_942672129607089_3331063380649557190_n' },
            { name: '140834266_942672006273768_4715567834601681408_n' }
          ]
        },
        {
          item: [
            { name: '139263730_939010099973292_154092698253198772_n' },
            { name: '139767352_939010073306628_3387032485342483155_n' }
          ]
        },
        {
          item: [
            { name: '131891828_922395541634748_8239430508682442272_n' },
            { name: '131908046_922395401634762_7051764190499720929_n' }
          ]
        },
        {
          item: [
            { name: '129119992_913233005884335_4558810432895741775_n' },
            { name: '129294162_913231159217853_7892548807808253114_n' }
          ]
        },
        {
          item: [
            { name: '129587050_913221859218783_6482984466573498040_n' },
            { name: '129225155_913222725885363_7063294608033800354_n' }
          ]
        },
        {
          item: [
            { name: '127566834_906855766522059_5358392630520910446_n' },
            { name: '127528918_906855386522097_1651775860706924626_n' }
          ]
        },
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
            { name: '122094390_3341756209210819_8476882212414036930_n' },
            { name: '122065057_3341755662544207_596552187783178308_n' }
          ]
        },
        {
          item: [
            { name: '126396893_3434996739886765_1761960039129046301_n' },
            { name: '126161311_3434998876553218_604161568731678868_n' }
          ]
        },
        {
          item: [
            { name: '251775933_4421110867942009_2760784121010990338_n' },
            { name: '250903174_4421110951275334_8950834331680045046_n' }
          ]
        },
        {
          item: [
            { name: '147917378_952424978631804_4847942989867530486_n' }
          ]
        },
        {
          item: [
            { name: '145764205_949726812234954_60200852018563907_n' }
          ]
        },
        {
          item: [
            { name: '129246773_913226535884982_3391590937121369044_n' }
          ]
        },
        {
          item: [
            { name: '131906661_922306668310302_2177917755704218944_n' }
          ]
        },
        {
          item: [
            { name: '131154961_918722738668695_4217146612841463695_n' }
          ]
        },
        {
          item: [
            { name: '168246884_983527492188219_9043370105914785415_n' }
          ]
        },
        {
          item: [
            { name: '154165553_962284434312525_5317900362151340763_n' }
          ]
        },
        {
          item: [
            { name: 'Zdjęcie-0002' }
          ]
        },
        {
          item: [
            { name: 'IMG_20160219_113802' }
          ]
        },
        {
          item: [
            { name: 'IMG_20151026_193237' }
          ]
        },
        {
          item: [
            { name: '20170322_115153' }
          ]
        },
        {
          item: [
            { name: 'Zdjęcie-0187' }
          ]
        },
        {
          item: [
            { name: 'Zdjęcie-0001' }
          ]
        },
        {
          item: [
            { name: '969752366477176' }
          ]
        },
        {
          item: [
            { name: '969752233143856' }
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
