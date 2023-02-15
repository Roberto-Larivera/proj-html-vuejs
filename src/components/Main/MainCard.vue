<script>
export default {
  name: 'MainCard',
  data() {
    return {

    }
  },
  props: {
    title:{
      type: String,
      default: 'Title Card'
    },
    description:{
      type: String,
      default: 'Lorem ipsum'
    },
    srcImage: String,
    urlImage:{
      type: String,
      default: 'https://via.placeholder.com/150/150'
    },
  }

}
</script>

<template>
  <div class="my_card p-3 d-flex flex-column align-items-center">
    <div class="my_card-img mb-4">
      <img :src="urlImage" alt="placeholder-img-150" v-if="srcImage == null">
      <img :src="`../../../public/svg/${srcImage}`" :alt="title" v-else>
      
      

    </div>
    <div class="my_card-text">
      <h6>
        {{title}}
      </h6>
      <p>
        {{description}}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.my_card{
  text-align: center;
  .my_card-text{
    p{
      @include pargh_default;

    }
  }
}
</style>
