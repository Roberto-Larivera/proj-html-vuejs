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
      headerBottomList: [
        {
          imgSrc: 'rev-slider-main-home-img-03.jpg'
        },
        {
          imgSrc: 'rev-slider-main-home-img-02.jpg'
        },
      ],
      isFixed: false,
      isScrolled: false,
    }
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).url;
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
    },
    handleScroll() {
      let headerTop = document.querySelector('.header_top');
      let currentPosition = headerTop.getBoundingClientRect().top;
      this.isFixed = currentPosition <= 0;
      this.isScrolled = window.pageYOffset < 100;
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
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

}

</script>

<template><!-- <header class="bg_image-slide" :style="{backgroundImage: url(getImagePath(`../../assets/img/${srcImage}`))}"> -->
  <!-- <header class="bg_image-slide" :style="{backgroundImage: `url(../../assets/img/${srcImage}`}"> -->
  <header class="bg_image-slide" :style="{ backgroundImage: 'url(' + srcImage() + ')' }">
    <!-- <header class="bg_image-slide" :style=" backgroundImage: url(srcImage)"> -->
    <!-- BG SLIDERS HEADER  -->
    <div class="bg-sliders">
      <div class="container">
        <!-- ROW TOP LINKS  -->
        <div class="bg_header-top" :class="['bg_header-top', { 'bg_header-top--active': isFixed && !isScrolled }]"></div>
        <div class="header_top" :class="['header_top', { 'header_top--fixed': isFixed }]">
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
  padding-top: 100px;

  .bg_header-top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;

    background-color: $background_color-5;
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 15;
  }

  .bg_header-top--active {
    opacity: 0.9;
  }

  .header_top {
    height: 100px;
    transition: all 0.5s ease;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .header_top--fixed{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
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
