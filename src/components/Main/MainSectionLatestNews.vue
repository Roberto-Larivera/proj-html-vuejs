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
      mainLatestNewsList:[
        {
          tag:'business, Leading' ,
          date: 'May 5,2019',
          author: 'amanda doe',
          title: 'next investment',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non?...',
          url:'#nogo',
        },
        {
          tag:'business, Leading' ,
          date: 'May 5,2019',
          author: 'amanda doe',
          title: 'team building',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non?...',
          url:'#nogo',
        },
        {
          tag:'business, Leading' ,
          date: 'May 5,2019',
          author: 'amanda doe',
          title: 'new business day',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, non?...',
          url:'#nogo',
        },
      ]
    }
  }

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

          <div class="col d-flex justify-content-center align-items-center">
            <button class="btn rounded-circle">
              <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            </button>
          </div>

          <div class="col-10">
            <div class="row row-cols-3 flex-nowrap">

              <div class="col" v-for="element in mainLatestNewsList">
                
                <MainCardScLatestNews
                  :tag="element.tag"
                  :date="element.date"
                  :author="element.author"
                  :title="element.title"
                  :description="element.description"    
                  :url="element.url"    
                />

              </div>

            </div>

          </div>
          <div class="col d-flex justify-content-center align-items-center">
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
.bg_plug{
  background-image: url(../../../public/svg/svg-4.svg);
  background-repeat: no-repeat;
  background-position: top left ;
  background-size: 30%;
  height: 500px;
  left: 0;
  top: -20%;
}
.btn {
  @include btn-carousel-default;

}
</style>
