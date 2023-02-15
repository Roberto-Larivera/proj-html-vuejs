<script>
import MainLogoScClient from './MainLogoScClient.vue'
export default {
  name: 'MainSectionClient',
  components:{
    MainLogoScClient,
  },
  data() {
    return {
      mainClientList: [
        {
          src: 'h4-clients-img-01.png',
          hover: 'h4-clients-img-02.png'
        },
        {
          src: 'h4-clients-img-03.png',
          hover: 'h4-clients-img-04-1.png'
        },
        {
          src: 'h4-clients-img-05.png',
          hover: 'h4-clients-img-06-1.png'
        },
        {
          src: 'h4-clients-img-07.png',
          hover: 'h4-clients-img-08-1.png'
        },
        {
          src: 'h4-clients-img-09.png',
          hover: 'h4-clients-img-10-1.png'
        },
      ]
    }
  }

}
</script>

<template>
  <div class="bg_plug py-5">
    <div class="container">

      <div class="row py-5">
        <div class="col-10 offset-1">
          <div class="row row-cols-5">
            <div class="col" v-for="element in mainClientList">
              <MainLogoScClient 
              :src="element.src"
              :hover="element.hover"
              />
            </div>
          </div>


        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
