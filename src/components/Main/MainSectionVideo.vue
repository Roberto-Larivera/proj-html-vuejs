<script>
export default {
  name: 'AppTemplate',
  data() {
    return {

    }
  }

}
</script>

<template>
  <div class="bg_plug w-100">

    <div class="w-100 position-relative">

      <img class="w-100" src="../../assets/img/h1-img-04.jpg" alt="">

      <span class="position-absolute top-50 start-50 translate-middle">
        <button class="btn rounded-circle">
          <span class="d-flex align-items-center justify-content-center">
            <font-awesome-icon icon="fa-solid fa-play" />
          </span>
        </button>
      </span>

    </div>

  </div>
</template>

<style lang="scss" scoped>
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
