<script>
import MainSectionSkill from './MainSectionSkill.vue'
import MainSectionFounder from './MainSectionFounder.vue'
import MainSectionEvents from './MainSectionEvents.vue'
import MainSectionCreativeLeader from './MainSectionCreativeLeader.vue' 
import MainSectionLatestNews from './MainSectionLatestNews.vue' 
import MainSectionTestimonials from './MainSectionTestimonials.vue' 
import MainSectionVideo from './MainSectionVideo.vue' 
import MainSectionContact from './MainSectionContact.vue' 
export default {
  name: 'AppMain',
  components: {
    MainSectionSkill,
    MainSectionFounder,
    MainSectionEvents,
    MainSectionCreativeLeader,
    MainSectionLatestNews,
    MainSectionTestimonials,
    MainSectionVideo,
    MainSectionContact,
  },
  data() {
    return {

    }
  }

}
</script>

<template>
  <main>
    <section id="section_skill">
      <MainSectionSkill />
    </section>

    <section id="section_founder">
      <MainSectionFounder />
    </section>

    <section id="section-events">
      <MainSectionEvents />
    </section>

    <section id="section-creative_leader">
      <MainSectionCreativeLeader />
    </section>

    <section id="section-latest_news">
      <MainSectionLatestNews />
    </section>

    <section id="section-testimonials">
      <MainSectionTestimonials />
    </section>

    <section id="section-video">
      <MainSectionVideo />
    </section>

    <section id="section-contact">
      <MainSectionContact />
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: $background_color-5;
}
</style>
