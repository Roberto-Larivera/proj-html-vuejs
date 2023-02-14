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
          <div class="col-10 ">

            <div class="row h-100">
              <div class="col-6 offset-3 d-flex flex-column justify-content-center align-items-center h-100">

                <div class="content-top d-flex flex-column align-items-center justify-content-center gap-3 w-100">

                  <img src="../../assets/img/h3-img-04.png" alt="">
                  <h6>
                    name
                  </h6>
                  <p>
                    "Comment"
                  </p>


                </div>
                <div class="content-bottom d-flex align-items-center justify-content-center w-100">
                  <span>
                    01
                  </span>
                  <div class="bar-live w-50 position-relative">
                    <div class="bar-active position-absolute" :style="`width: ${percentage}%`"></div>

                    <div class="bar-border"></div>

                  </div>
                  <span>
                    03
                  </span>
                </div>

              </div>
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
    width: 120px;
    aspect-ratio: 1;
  }

  h6,
  p {
    @include pargh-title_default;
    color: $text_color-2 ;
  }
}

.content-bottom {
  span {
    color: $text_color-2;
    font-size: .7rem;
    padding: 5px;
  }

  .bar-live {
    .bar-active {
      height: 3px;
      background-color: $fill_color-1;
      left: 0;
      top: -1px;
    }

    .bar-border {
      border: .5px solid $border_color-4;
    }

  }
}
</style>
