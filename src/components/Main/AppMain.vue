<script>
import MainSectionSkill from './MainSectionSkill.vue'
import MainSectionFounder from './MainSectionFounder.vue'
export default {
  name: 'AppMain',
  components: {
    MainSectionSkill,
    MainSectionFounder,
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
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: $background_color-5;
}
</style>
