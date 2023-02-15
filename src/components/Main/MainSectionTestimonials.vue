<script>
import MainSpyScTestimonial from './MainSpyScTestimonial.vue'
export default {
  name: 'MainSectionTestimonials',
  components: {
    MainSpyScTestimonial,
  },
  data() {
    return {
      mainTestimonialsList: [
        {
          name: 'cynthia clark',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolores laborum adipisci molestiae, facilis quaerat deserunt eveniet alias non veniam?',
          src: 'h3-img-04.png',
          status: true

        },
        {
          name: 'Firstname LastName',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolores laborum adipisci molestiae,  non veniam?',
          src: 'h3-img-07.png',
          status: false
        },
        {
          name: 'Firstname LastName',
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolores laborum adipisci molestiae...',
          src: 'h3-img-08.png',
          status: false
        },
      ]
    }
  }

}
</script>

<template>
  <div class="bg_plug">
    <div class="container h-100 position-relative">
      <div class="text_bg w-100 h-100 position-absolute">
        <div class="h-100 w-100">
          Testimonial
        </div>
      </div>
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

                <template v-for="element in mainTestimonialsList">

                  <MainSpyScTestimonial v-if="element.status" :src="element.src" :name="element.name"
                    :comment="element.comment" />


                </template>
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

.text_bg {
  span {
    font-size: 100%;
    color: $text_color-14;
  }
}

.btn {
  @include btn-carousel-default;
  color: $fill_color-2;

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
