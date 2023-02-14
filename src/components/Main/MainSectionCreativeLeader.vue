<script>
import SectionTitle from '../All/SectionTitle.vue';
export default {
  name: 'MainSectionCreativeLeader',
  components: {
    SectionTitle,
  },
  data() {
    return {
      
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
              <div class="my_row">
                <div class="text d-flex justify-content-between">
                  <h6>
                    title
                  </h6>
                  <span>
                    0%
                  </span>
                </div>
                <div class="bar-live w-100 position-relative">
                  <div class="bar-active position-absolute"></div>
                  <div class="bar-border"></div>
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
.section-left{
  p {
  @include pargh_default;
}

a {
  @include link_default;
}
}
.section-right{
  .bar-live{
    .bar-active{
      height: 3px;
      background-color: $fill_color-3;
      left: 0;
      top: -1px;
    }
    .bar-border{
      border: 1px solid $border_color-4;
    }
    
  }
}
</style>
