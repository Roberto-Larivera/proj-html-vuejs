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
            <SectionTitle 
            :section="'h2'" 
            :sectionAlign="'center'" 
            :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit.'"
            />
          </div>
        </div>
        <div class="row row-cols-4">
          <div class="col">
            <div class="my_card p-3">
              <div class="my_card-img mb-4">
                <img src="../../assets/svg/svg-0.svg" alt="">
              </div>
              <div class="my_card-text">
                <h6>
                  Title
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nesciunt.
                </p>
              </div>
            </div>
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
.my_card{
  text-align: center;
  .my_card-text{
    p{
      font-size: 0.8rem;
    }
  }
}
</style>
