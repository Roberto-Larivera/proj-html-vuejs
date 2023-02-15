<script>
import SectionTitle from '../All/SectionTitle.vue'
import AllButton from '../All/AllButton.vue'
export default {
  name: 'MainSectionFounder',
  components: {
    SectionTitle,
    AllButton,
  },
  data() {
    return {
      MainSectionFounderList: [
        "h1-blog-img-01.jpg",
        "h1-blog-img-02.jpg",
        "h1-blog-img-03.jpg",
        "h1-blog-img-04.jpg",
      ],
      MainSectionFounderCurrent: 0,
      autoPlay: null
    }
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
    nextClick() {
      if (this.MainSectionFounderCurrent == (this.MainSectionFounderList.length - 1)) {
        this.MainSectionFounderCurrent = 0;
      } else {
        this.MainSectionFounderCurrent++;
      }
    },

    prevClick() {
      if (this.MainSectionFounderCurrent == 0) {
        this.MainSectionFounderCurrent = (this.MainSectionFounderList.length - 1)
      } else {
        this.MainSectionFounderCurrent--;
      }
    },
    hoverStop() {
      //console.log('SONO IN HOVER');
      clearInterval(this.autoPlay);
      this.autoPlay = null;
    },
    hoverPlay() {
      //console.log('SONO FUORI HOVER');
      this.startAutoPlay();
    },
    startAutoPlay() {
      this.autoPlay = setInterval(this.nextClick, 3000);
    },
  },
  mounted() {
    this.startAutoPlay()
  },
}
</script>

<template>
  <div>
    <div class="container bg_section my-5 py-5">

      <div class=" d-flex justify-content-center align-atimes-center ">
        <div class="row">
          <div class="col-10 offset-1">

            <div class="box_content d-flex align-items-center w-100 h-100 position-relative">
              <div class="content-left h-100">
                <div class="position-relative" @mouseenter="hoverStop()" @mouseleave="hoverPlay()">

                  <template v-for="element, index in MainSectionFounderList">
                    <img class="w-100" :src="getImagePath(`../../assets/img/${element}`)" alt="section-founder"
                      v-if="MainSectionFounderCurrent == index">
                  </template>

                  <div class="position-absolute bottom-0 start-0">
                    <button class="py-3 px-4 tm_orange" @click="prevClick()">
                      <span>
                        <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                      </span>
                    </button>

                    <button class="py-3 px-4 tm_orange" @click="nextClick()">
                      <span>
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                      </span>
                    </button>
                  </div>

                </div>
              </div>
              <div class="content-right p-5 position-absolute ">
                <SectionTitle :title="'jason bickford'" :description="'Founder and Executive Director'"
                  :section="'h3'" />
                <p class="mt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem provident officia blanditiis.
                </p>
                <div class="div">
                  <ul class="d-flex list_icon">
                    <li>
                      <a href="#nogo">
                        <span>
                          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                        </span>

                      </a>
                    </li>
                    <li>
                      <a href="#nogo">
                        <span>
                          <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        </span>

                      </a>
                    </li>
                    <li>
                      <a href="#nogo">
                        <span>
                          <font-awesome-icon icon="fa-brands fa-twitter" />
                        </span>

                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
button {
  box-shadow: 5px 5px 15px -7px $background_color-16;
  border: none;
  text-transform: uppercase;
  font-size: .7rem;

  &:hover span {
    border: none;
  }

  &.tm_orange {
    &:hover {
      box-shadow: 5px 5px 15px -7px $background_color-8;
    }

    background-color: $background_color-8;
    color: $text_color-1;

    span {
      border-color: $border_color-1;
    }
  }
}
.list_icon{
  padding: 0;
  li{
    list-style-type: none;
    margin-right: 1rem;
    a{
      color: $text_color-8;
      &:hover{
        color: $text_color-13;
      }
    }
  }
}
.bg_section {
  background-image: url(../../../public/svg/svg-4.svg);
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 30%;
}

.box_content {

  .content-left {
    width: 65%;
  }

  .content-right {
    width: 45%;
    background-color: $background_color-1 ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    right: 0;

    p {
      @include pargh_default;

    }


  }
}
</style>
