<script>
import SectionTitle from '../All/SectionTitle.vue';
export default {
  name: 'MainSectionSkill',
  components:{
    SectionTitle,
  },
  data() {
    return {

    }
  }

}
</script>

<template>
  <div>
    <div class="container">
      <div class="box_bg">
        <div class="row">
          <div class="col ">
            <SectionTitle  :section="'h1'"/>
            <SectionTitle  :section="'h2'" />
            <SectionTitle  :section="'h3'"/>
            <SectionTitle  :section="'h2'" :sectionAlign="'center'" />
            <SectionTitle  :section="'h3'" :sectionAlign="'center'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box_bg{
  background-color: $background_color-1;
}
</style>
