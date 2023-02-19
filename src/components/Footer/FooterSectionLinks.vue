<script>
import SectionTitle from '../All/SectionTitle.vue'
import AllButton from '../All/AllButton.vue'
import { store } from '../../store'
export default {
  name: 'FooterSectionLinks',
  components: {
    SectionTitle,
    AllButton,
  },
  data() {
    return {
      store,
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
                <SectionTitle class="title_list_color" :title="'about'" :descriptionBoll="false" :section="'h6'" />
              </div>
              <ul class="ps-0">
                <li class="text_list">
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
                <SectionTitle class="title_list_color" :title="'twitter'" :descriptionBoll="false" :section="'h6'" />
              </div>
              <ul class="ps-0 fa-ul">
                <li class="text_list">
                  <span class="fa-li" style="--fa-li-width: 4em;">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                  </span>
                  <p>
                    <a href="#nogo">@aliasadadm</a> Hi <a href="#nogo">@aliasadadm</a>, can you please submit a ticket
                    at <a href="#nogo">https://t.co/JLV61aXG7d</a> and one of our support agent... <a
                      href="#nogo">https://kkffm.djdndnnjc</a>
                  </p>
                </li>
                <li class="text_list">
                  <span class="fa-li" style="--fa-li-width: 4em;">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                  </span>
                  <p>
                    <a href="#nogo">@aliasadadm</a> Hi <a href="#nogo">@aliasadadm</a>, can you please submit a ticket
                    at <a href="#nogo">https://t.co/JLV61aXG7d</a> and one of our support agent... <a
                      href="#nogo">https://kkffm.djdndnnjc</a>
                  </p>
                </li>
              </ul>


            </div>
            <!-- / END COL -->

            <!-- START COL -->
            <div class="col">
              <div class="mb-3">
                <SectionTitle class="title_list_color" :title="'important links'" :descriptionBoll="false"
                  :section="'h6'" />
              </div>
              <ul class="ps-0">
                <li class="text_list">
                  <a href="#nogo" class="text-decoration-none">
                    About me
                  </a>
                </li>
                <li class="text_list">
                  <a href="#nogo" class="text-decoration-none">
                    About us
                  </a>
                </li>
                <li class="text_list">
                  <a href="#nogo" class="text-decoration-none">
                    Language packs
                  </a>
                </li>
                <li class="text_list">
                  <a href="#nogo" class="text-decoration-none">
                    Become a coach
                  </a>
                </li>
                <li class="text_list">
                  <a href="#nogo" class="text-decoration-none">
                    Monthly events
                  </a>
                </li>

              </ul>


            </div>
            <!-- / END COL -->

            <!-- START COL -->
            <div class="col">
              <div class="mb-3">
                <SectionTitle class="title_list_color" :title="'contact me'" :descriptionBoll="false" :section="'h6'" />
              </div>
              <ul class="ps-0 fa-ul">
                <li class="text_list">
                  <span class="fa-li" style="--fa-li-width: 4em;">
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                  </span>
                  <p>
                    <a href="#nogo" class="text-decoration-none">
                      457 BIGBlue Street, NY 10013
                    </a>
                  </p>
                </li>
                <li class="text_list">
                  <span class="fa-li" style="--fa-li-width: 4em;">
                    <font-awesome-icon icon="fa-solid fa-phone" />
                  </span>
                  <p>
                    <a href="#nogo" class="text-decoration-none">
                      (315) 5512-2579
                    </a>
                  </p>
                </li>
                <li class="text_list">
                  <span class="fa-li" style="--fa-li-width: 4em;">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                  </span>
                  <p>
                    <a href="mailto:everlead@mikado.com" class="text-decoration-none">
                      everlead@mikado.com
                    </a>
                  </p>
                </li>
              </ul>
              <div>
                <form action="" @submit.prevent>
                  <div class="input-group mb-3 w-100">
                    <input class="my_input pb-1 form-control rounded-0" type="text" placeholder="Your name"
                    v-model="store.footerLinks[0].textName">
                    <span class="my_input -sub input-group-text rounded-0">SUBSCRIBE</span>
                  </div>
                  <div class="mb-3 w-100">
                    <input class="my_input pb-1 w-100" type="email" placeholder="Your email"
                    v-model="store.footerLinks[0].textEmail" v-if="store.footerLinks[0].textName != ''">
                  </div>

                  <AllButton 
                  v-if="store.footerLinks[0].textEmail != ''"
                  :text="'send'"
                  :color="'tm_orange'"
                  />
                </form>

              </div>


            </div>
            <!-- / END COL -->

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

        & a {
          @include text-list_default;
        }

        & .fa-li {
          color: $text_color-8;
        }
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

  .my_input {
    background-color: $background_color-14;
    border: none;
    border-bottom: 1px solid $border_color-4;
    color: $background_color-1;
    font-family: 'Playfair Display', serif;
    font-size: .8rem;

    &.-sub{
      font-size: .6rem;
      font-family: 'Lato', sans-serif;
    }

  }
}
</style>
