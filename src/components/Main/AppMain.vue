<script>
import MainSectionSkill from './MainSectionSkill.vue'
import MainSectionFounder from './MainSectionFounder.vue'
import MainSectionEvents from './MainSectionEvents.vue'
export default {
  name: 'AppMain',
  components: {
    MainSectionSkill,
    MainSectionFounder,
    MainSectionEvents,
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
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: $background_color-5;
}
</style>
