<script>
import FooterSectionLinks from './FooterSectionLinks.vue'
export default {
  name: 'AppFooter',
  components:{
    FooterSectionLinks
  },
  data(){
    return{

    }
  }
  
}
</script>

<template>
  <footer>
    <section id="section_links">
      <FooterSectionLinks />
    </section>
  </footer>
</template>

<style lang="scss" scoped>
</style>
