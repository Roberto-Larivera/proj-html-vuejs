<script>
import SectionTitle from '../All/SectionTitle.vue';
import MainCardScLatestNews from './MainCardScLatestNews.vue'
export default {
  name: 'MainSectionLatestNews',
  components: {
    SectionTitle,
    MainCardScLatestNews,
  },
  data() {
    return {
      mainLatestNewsList: [
        {
          tag: 'business, Leading',
          date: 'May 5,2019',
          author: 'amanda doe',
          title: 'next investment',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non?...',
          url: '#nogo',
          src: 'h1-img-01.jpg',
        },
        {
          tag: 'business, Leading',
          date: 'May 5,2019',
          author: 'amanda doe',
          title: 'team building',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non?...',
          url: '#nogo',
          src: 'h1-img-02.jpg',
        },
        {
          tag: 'business, Leading',
          date: 'May 5,2019',
          author: 'amanda doe',
          title: 'new business day',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non?...',
          url: '#nogo',
          src: 'h1-img-03.jpg',
        },
        {
          tag: 'business, Leading',
          date: 'May 5,2019',
          author: 'amanda doe',
          title: 'next investment',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non?...',
          url: '#nogo',
          src: 'h1-img-02.jpg',
        },
        {
          tag: 'business, Leading',
          date: 'May 5,2019',
          author: 'amanda doe',
          title: 'team building',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non?...',
          url: '#nogo',
          src: 'h1-img-01.jpg',
        },
        {
          tag: 'business, Leading',
          date: 'May 5,2019',
          author: 'amanda doe',
          title: 'new business day',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non?...',
          url: '#nogo',
          src: 'h1-img-03.jpg',
        },
      ],
      innerStyles: {},
      step: 0,
      transitioning: false
    }

  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
    next() {
      if (this.step === this.mainLatestNewsList.length - 3) {
        this.step = -1
      }
      this.$refs.inner.style.transform = `translateX(-${(100 / 3) * ++this.step}%)`
    },
    prev() {
      if (this.step === 0) {
        this.step = this.mainLatestNewsList.length - 4
        this.$refs.inner.style.transform = `translateX(-${(100 / 3) * ++this.step}%)`
      }
      else {
        this.step -= 2
        this.next()
      }
    },
  },
}
</script>

<template>
  <div class="py-5">
    <div class="container position-relative">
      <div class="bg_plug w-100 position-absolute"></div>

      <div class="w-100 py-5">

        <div class="row mb-5">
          <div class="col ">

            <SectionTitle :title="'Latest news'"
              :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, at.'" :section="'h2'"
              :sectionAlign="'center'" />

          </div>
        </div>

        <div class="row">

          <div class="col d-flex justify-content-start align-items-center">
            <button class="btn rounded-circle" @click="prev">
              <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            </button>
          </div>

          <div class="col-10">
            <div class="row">

              <div class="col">
                <div class="carousel">
                        <div class="inner" ref="inner" :style="innerStyles">
                            <div class="card  p-3" v-for="element,index in mainLatestNewsList" :key="index">
                                <MainCardScLatestNews
                                  :tag="element.tag"
                                  :date="element.date"
                                  :author="element.author"
                                  :title="element.title"
                                  :description="element.description"    
                                  :url="element.url"   
                                  :src="getImagePath(`../../assets/img/${element.src}`)" 
                                />
                            </div>
                        </div>
                    </div>
                
                

              </div>

            </div>

          </div>
          <div class="col d-flex justify-content-end align-items-center">
            <button class="btn rounded-circle" @click="next">
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
  background-image: url(../../../public/svg/svg-4.svg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 30%;
  height: 500px;
  left: 0;
  top: -20%;
  pointer-events: none;
}

.btn {
  @include btn-carousel-default;

}

.carousel {
    width: 100%;
    overflow: hidden;
    text-align: center;
    .inner {
        display: flex;
        transition: all 500ms ease-in-out;
    }
    .card {
        flex-basis: calc(100% / 3);
        flex-shrink: 0;
        border: none;
        background-color: $background_color-5 !important;
    }
}
</style>
