<script>
import {store} from '../../store.js'
import MainLogoScClient from './MainLogoScClient.vue'
export default {
  name: 'MainSectionClient',
  components:{
    MainLogoScClient,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMouseOver(nIndex){
      this.store.mainClientList[nIndex].status = true
      //console.log('hai passato in over')
    },
    getMouseOut(nIndex){
      this.store.mainClientList[nIndex].status = false
      //console.log('hai passato in out')
    }
  },

}
</script>

<template>
  <div class="bg_plug py-5">
    <div class="container">

      <div class="row py-5">
        <div class="col-10 offset-1">
          <div class="row list_cols row-cols-5">
            <div class="col" v-for="element, index in store.mainClientList">
              <MainLogoScClient 
              @mouseover="getMouseOver(index)"
              @mouseout="getMouseOut(index)"
              :nIndex="index"
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
