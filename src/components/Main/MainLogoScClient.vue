<script>
export default {
  name: 'MainLogoScClient',
  data(){
    return{

    }
  },
  props:{
    src: String,
    hover: String,
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

    <img class="w-100" :src="getImagePath(`../../assets/img/${src}`)">
    <!-- <img class="w-100" :src="getImagePath(`../../assets/img/${src}`)"> -->
  </div>
</template>

<style lang="scss" scoped>
</style>
