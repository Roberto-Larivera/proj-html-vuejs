<script>
import MainSectionSkill from './MainSectionSkill.vue'
export default {
  name: 'AppMain',
  components: {
    MainSectionSkill,
  },
  data() {
    return {

    }
  }

}
</script>

<template>
  <main>
    <section class="section_skill">
      <MainSectionSkill />
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: $background_color-5;
}
</style>
