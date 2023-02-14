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
            <SectionTitle 
            :section="'h3'"
            :title="'creative leader'"
            :descriptionBoll="false"
            />


          </div>
        </div>
        <div class="col-5">


        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
