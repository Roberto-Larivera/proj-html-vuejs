<script>
import SectionTitle from '../All/SectionTitle.vue'
export default {
  name: 'FooterSectionLinks',
  components: {
    SectionTitle,
  },
  data() {
    return {
    }
  },
  methods: {
  },

}
</script>

<template>
  <div class="bg_plug py-5">
    <div class="container">

      <div class="row py-5">
        <div class="col-10 offset-1">

          <div class="row row-cols-4">

            <!-- START COL -->
            <div class="col">
              <div class="mb-3">
                <SectionTitle class=".title_list_color" :title="'about'" :descriptionBoll="false" :section="'h6'" />
              </div>
              <ul>
                <li class="text_list ps-0 ">
                  <p>
                    We Created Everland to effectively become the stepping stone towards meeting all your goals &
                    achieving business success.
                  </p>
                </li>
                <li class="icon_list">
                  <span>
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                  </span>

                  <span>
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                  </span>

                  <span>
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                  </span>
                </li>
              </ul>

              
            </div>
            <!-- / END COL -->
            
            <!-- START COL -->
            <div class="col">
              <div class="mb-3">
                <SectionTitle class=".title_list_color" :title="'about'" :descriptionBoll="false" :section="'h6'" />
              </div>
              <ul>
                <li class="text_list ps-0 ">
                  <p>
                    We Created Everland to effectively become the stepping stone towards meeting all your goals &
                    achieving business success.
                  </p>
                </li>
                <li class="icon_list">
                  <span>
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                  </span>

                  <span>
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                  </span>

                  <span>
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                  </span>
                </li>
              </ul>

              
            </div>
            <!-- / END COL -->
            
            <!-- START COL -->

          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg_plug {
  background-color: $background_color-14 ;

  ul {
    li {
      list-style-type: none;

      &.text_list {
        @include text-list_default;
      }

      &.icon_list span {
        color: $text_color-6;
        padding: 10px;


        &:hover {
          color: $text_color-8;

        }
      }
    }
  }
}
</style>
