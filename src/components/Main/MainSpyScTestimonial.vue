<script>
export default {
  name: 'MainSpyScTestimonial',
  data() {
    return {

    }
  },
  props: {
    src: String,
    name: String,
    comment: String,
    percentage: Number,
  },
  methods:{
    getImagePath(imgPath){
      return new URL( imgPath, import.meta.url).href;
    }
  }

}
</script>

<template>
  <div>
    <div class="content-top text-center d-flex flex-column align-items-center justify-content-center gap-3 w-100">

      <img :src="getImagePath(`../../assets/img/${src}`)" :alt="name">
      <h6>
        {{name}}
      </h6>
      <p>
        "{{comment}}"
      </p>


    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.content-top {

  img {
    width: 120px;
    aspect-ratio: 1;
  }

  h6,
  p {
    @include pargh-title_default;
    color: $text_color-2 ;
  }
}


</style>
