<script>
export default {
  name: 'MainSectionTestimonials',
  data() {
    return {

    }
  }

}
</script>

<template>
  <div class="bg_plug">
    <div class="container h-100">

      <div class="w-100 h-100 py-5">
        <div class="row h-100">
          <div class="col d-flex align-items-center justify-content-start h-100">
            <button class="btn rounded-circle">
              <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            </button>

          </div>
          <div class="col-10 d-flex justify-content-center align-items-center h-100 h-100">

            <div class="content-top d-flex flex-column align-items-center">
              <img src="../../assets/img/h3-img-04.png" alt="">
              <h6>
                name
              </h6>
              <p>
                comment
              </p>
            </div>

            <div class="content-bottom">
              laps
            </div>

          </div>
          <div class="col d-flex align-items-center justify-content-end h-100">
            <button class="btn rounded-circle">
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg_plug {
  background-color: $background_color-14;
  height: 500px;
}

.btn {
  @include btn-carousel-default;
  color: $fill_color-2;

}

.content-top {

  img {
    width: 100px;
    aspect-ratio: 1;
  }
}
</style>
