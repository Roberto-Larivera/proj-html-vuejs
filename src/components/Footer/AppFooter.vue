<script>
import FooterSectionLinks from './FooterSectionLinks.vue'
import FooterSectionBanner from './FooterSectionBanner.vue'
export default {
  name: 'AppFooter',
  components:{
    FooterSectionLinks,
    FooterSectionBanner,
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

    <section id="section_banner">
      <FooterSectionBanner />
    </section>
  </footer>
</template>

<style lang="scss" scoped>
</style>
