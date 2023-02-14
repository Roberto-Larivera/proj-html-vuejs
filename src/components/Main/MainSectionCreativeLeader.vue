<script>
import SectionTitle from '../All/SectionTitle.vue';
import MainPercentage from './MainPercentage.vue';
export default {
  name: 'MainSectionCreativeLeader',
  components: {
    SectionTitle,
    MainPercentage,
  },
  data() {
    return {
      mainCreativeList:[
        {
          title: 'mentorship',
          percentage: 78,
        },
        {
          title: 'education',
          percentage: 95,
        },
        {
          title: 'learning',
          percentage: 65,
        },
        {
          title: 'motivation',
          percentage: 83,
        },
      ]
    }
  }

}
</script>

<template>
  <div class="bg_plug p-5">
    <div class="container">

      <div class="w-100 py-5">
        <div class="row">
          <div class="col-5 offset-1">

            <div class="section-left">
              <SectionTitle :section="'h3'" :title="'creative leader'" :descriptionBoll="false" />
              <p class="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam illum beatae cumque reiciendis at,
                suscipit dolorum, eaque dignissimos amet et quia iusto animi maiores ullam excepturi molestiae soluta ex
                odit!
              </p>
              <a href="#nogo">
                read more
              </a>
            </div>

          </div>
          <div class="col-5 p-3">
            <div class="section-right">

              <MainPercentage 
                v-for="element in mainCreativeList"
                :title="element.title"
                :percentage="element.percentage"
              />

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg_plug{
  background-color: $background_color-1;
}
.section-left{
  p {
  @include pargh_default;
}

a {
  @include link_default;
}
}
</style>
