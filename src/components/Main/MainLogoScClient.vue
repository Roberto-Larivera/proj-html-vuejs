<script>
import {store} from '../../store.js'

export default {
  name: 'MainLogoScClient',
  
  data(){
    return{
      store
    }
  },
  props:{
    src: String,
    hover: String,
    status: Boolean,
    nIndex: Number
  },
  methods: {
    getImagePath(imgPath){
      return new URL( imgPath, import.meta.url).href;
    }
  },
  
}
</script>

<template>
  <div class="p-3">
    <img class="w-100" :src="getImagePath(`../../assets/img/${store.mainClientList[nIndex].src}`)" v-if="store.mainClientList[nIndex].status == false">
    <img class="w-100" :src="getImagePath(`../../assets/img/${store.mainClientList[nIndex].hover}`)" v-else> 
  </div>
</template>

<style lang="scss" scoped>
</style>
