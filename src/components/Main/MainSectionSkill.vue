<script>
import SectionTitle from '../All/SectionTitle.vue';
import MainCard from './MainCard.vue';
export default {
  name: 'MainSectionSkill',
  components: {
    MainCard,
    SectionTitle,
  },
  data() {
    return {
      mainCardsLink: [
        {
          title: 'knowing',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          src: 'svg-0.svg',
        },
        {
          title: 'selling',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          src: 'svg-1.svg',
        },
        {
          title: 'Learning',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          src: 'svg-2.svg',
        },
        {
          title: 'contact',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          src: 'svg-3.svg',
        },
      ]
    }
  }

}
</script>

<template>
  <div>
    <div class="container mb-5">
      <div class="position-relative">
        <div class="box_bg h-100 w-100 position-absolute"></div>
        <div class="row">
          <div class="col-10 offset-1">

            <div class="box_content p-5">
              <div class="row pb-5">
                <div class="col ">
                  <SectionTitle :section="'h2'" :sectionAlign="'center'" :title="'our specialties'"
                    :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit.'" />
                </div>
              </div>
    
              <div class="row row-cols-4">
                <div class="col" v-for="element in mainCardsLink">
                  <MainCard :title="element.title" :description="element.description" :srcImage="element.src" />
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
.container{
  & > div{
  background-color: $background_color-1;

  }
}
.box_bg {
  top: -10%;
  background-color: $background_color-1;

}

.box_content {
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  z-index: 10;

}
</style>
