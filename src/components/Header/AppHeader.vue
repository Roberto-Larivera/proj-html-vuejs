<script>
import HeaderTop from './HeaderTop.vue'
import HeaderBottom from './HeaderBottom.vue'
export default {
  name: 'AppHeader',
  components:{
    HeaderTop,
    HeaderBottom,
  },
  data() {
    return {

    }
  }

}
</script>

<template>
  <header class="bg_image-slide">
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
header{
  .header_top{
    height: 100px;
  }
  .header_bottom{
    height: 600px;
  }
  &.bg_image-slide{
    background-image: url('../../assets/img/rev-slider-main-home-img-03.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
