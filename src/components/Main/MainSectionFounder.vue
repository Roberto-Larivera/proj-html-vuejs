<script>
import SectionTitle from '../All/SectionTitle.vue'
export default {
  name: 'MainSectionFounder',
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
  <div>
    <div class="container my-5">

      <div class="bg_section d-flex justify-content-center align-atimes-center p-5 ">
        <div class="row">
          <div class="col-10 offset-1">
            
            <div class="box_content d-flex align-items-center w-100 h-100 p-5 position-relative">
              <div class="content-left h-100">
                <img class="w-100" src="../../assets/img/h1-blog-img-04.jpg" alt="section-founder">
              </div>
              <div class="content-right p-5 position-absolute ">
                <SectionTitle :title="'jason bickford'" :description="'Founder and Executive Director'" :section="'h3'" />
                <p class="mt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem provident officia blanditiis.
                </p>
                <div class="div">
                  icona icona icona firma
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
.bg_section {
  background-image: url(../../../public/svg/svg-4.svg);
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 25%;
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
      font-weight: 300;
      color: $text_color-11;
      font-size: .8rem;

    }


  }
}
</style>
