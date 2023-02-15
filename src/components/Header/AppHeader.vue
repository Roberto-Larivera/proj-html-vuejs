<script>
import HeaderTop from './HeaderTop.vue'
import HeaderBottom from './HeaderBottom.vue'
import { store } from '../../store'
export default {
  name: 'AppHeader',
  components: {
    HeaderTop,
    HeaderBottom,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
    srcImage() {
      // let gigi = `/img/${this.store.headerBottomList[this.store.headerBottomCurrent].imgSrc}`
      // let pippo = this.getImagePath(gigi)
      // let gatto = gigi
      // console.log(gigi)
      // console.log('gatto',gatto)
      // console.log(this.store.headerBottomList[this.store.headerBottomCurrent].imgSrc)
      return `/img/${this.store.headerBottomList[this.store.headerBottomCurrent].imgSrc}`
      //return this.store.headerBottomList[this.store.headerBottomCurrent].imgSrc
    }
  },
  computed: {
    // srcImage() {
    //   let gigi = `/img/${this.store.headerBottomList[this.store.headerBottomCurrent].imgSrc}`
    //   let pippo = this.getImagePath(gigi)
    //   let gatto = gigi
    //   console.log(gigi)
    //   console.log('gatto',gatto)
    //   console.log(this.store.headerBottomList[this.store.headerBottomCurrent].imgSrc)
    //   return gatto
    //   //return this.store.headerBottomList[this.store.headerBottomCurrent].imgSrc
    // }
  }

}

</script>

<template>
  <!-- <header class="bg_image-slide" :style="{backgroundImage: url(getImagePath(`../../assets/img/${srcImage}`))}"> -->
  <!-- <header class="bg_image-slide" :style="{backgroundImage: `url(../../assets/img/${srcImage}`}"> -->
  <header class="bg_image-slide" :style="{ backgroundImage: 'url(' + srcImage() + ')' }">
    <!-- <header class="bg_image-slide" :style=" backgroundImage: url(srcImage)"> -->
    <!-- BG SLIDERS HEADER  -->
    <div class="bg-sliders">
      <div class="container">
        <!-- ROW TOP LINKS  -->
        <div class="header_top">
          <HeaderTop />
        </div>
        <!-- END ROW TOP LINKS  -->
        <!-- ROW BOTTOM JUMBOTRON  -->
        <div class="header_bottom">
          <HeaderBottom />
        </div>
        <!-- END ROW BOTTOM JUMBOTRON  -->
      </div>
    </div>
    <!-- END - BG SLIDERS HEADER  -->

  </header>
</template>

<style lang="scss" scoped>
header {
  .header_top {
    height: 100px;
  }

  .header_bottom {
    height: 600px;
  }

  &.bg_image-slide {
    // background-image: url('../../assets/img/rev-slider-main-home-img-03.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
