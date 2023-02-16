<script>
export default {
  name: 'MainSectionVideo',
  data() {
    return {
      videoBool: true
    }
  }

}
</script>

<template>
  <div class="bg_plug w-100">

    <div class="w-100 position-relative">

      <img class="w-100" src="../../assets/img/h1-img-04.jpg" alt="">

      <span class="position-absolute top-50 start-50 translate-middle" v-if="videoBool">
        <button class="btn rounded-circle" @click="videoBool = !videoBool">
          <span class="d-flex align-items-center justify-content-center">
            <font-awesome-icon icon="fa-solid fa-play" />
          </span>
        </button>

      </span>
      <div class="position-absolute top-50 start-50 translate-middle w-100 d-flex justify-content-center" v-else>
        <iframe id="ytplayer" type="text/html" width="720" height="405"
          src="https://www.youtube.com/embed/d9c9KfPf41Y?autoplay=1&loop=1" frameborder="0" allowfullscreen>
        </iframe>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
#ytplayer {
  width: 50%;
}

.bg_plug {
  .btn {
    //@include btn-carousel-default;
    color: $fill_color-2;
    //width: 150px!important;
    font-size: 3em;
    width: 80px;
    aspect-ratio: 1;

  }
}
</style>
