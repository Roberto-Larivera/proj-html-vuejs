<script>
import { store } from '../../store'
import SectionTitle from '../All/SectionTitle.vue'
import AllButton from '../All/AllButton.vue'
export default {
  name: 'MainSectionContact',
  components: {
    SectionTitle,
    AllButton
  },
  data() {
    return {
      store
    }
  },
  methods: {
    menuInfoOpen(item, x) {
      if (this.contacts[this.contactActive].messages[this.currentMessage].statusMenu == true && this.contacts[this.contactActive].messages[this.currentMessage] != item) {
        this.contacts[this.contactActive].messages[this.currentMessage].statusMenu = false;
        item.statusMenu = !item.statusMenu
      }
      else if (this.contacts[this.contactActive].messages[this.currentMessage] == item) {
        item.statusMenu = !item.statusMenu
      }
      else {
        item.statusMenu = !item.statusMenu
      }
      this.currentMessage = x;

    }
  },

}
</script>

<template>
  <div class="bg_plug py-5">
    <div class="container">

      <div class="row py-5">
        <div class="col-10 offset-1 d-flex justify-content-between align-items-center">

          <div class="content-left w-50">
            <div class="left-img p-4 position-relative">
              <img class="w-100" src="../../assets/img/h1-contact-rev-01.png">
              <div class="w-100 h-100 position-absolute top-50 start-50 translate-middle">

                <template v-for="element,index in store.mainContactList ">
                  <span :id="`icon_plus-${index}`" class="icon_plus p-2 position-absolute" @mouseover="element.status = true" @mouseleave="element.status = false">
                    <span class="position-relative z-1">
                      <font-awesome-icon icon="fa-solid fa-circle-plus" />
                    </span>
                    <div class="box-info p-3 position-relative" v-if="element.status">
                      <h6>
                        {{element.title}}
                        
                      </h6>
                      <a class="my_links" href="#nogo">
                        read more
                      </a>
                    </div>
                  </span>
                </template>

              </div>
            </div>
          </div>

          <div class="content-right w-50">
            <SectionTitle :title="'Contact us'"
              :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit.'" :section="'h2'" />
            <form action="" @submit.prevent>
              <div class="mt-5 mb-4 w-100">
                <input class="my_input -left pb-2 w-50" type="text" name="firstname" id="input-first_name"
                  placeholder="Your Name">
                <input class="my_input -right pb-2" type="email" name="email" id="input-email" placeholder="Your Email">
              </div>
              <div class="mb-4">
                <textarea class="my_input -textarea w-100" name="inputmessage" id="input-message" cols="10" rows="2"
                  placeholder="Write a message..."></textarea>
              </div>
              <AllButton :color="'tm_orange'" :text="'send'" />
            </form>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-left {
  .icon_plus {
    color: $text_color-8;
    font-size: 1rem;
    span{
      z-index: 1;
    }
    &#icon_plus-0 {
      top: 30%;
      left: 23%;
    }

    &#icon_plus-1 {
      top: 24%;
      left: 48%;
    }

    &#icon_plus-2 {
      top: 63%;
      left: 76%;
    }

    .box-info {
      background-color: $background_color-1;
      width: 250px;
      box-shadow: 0px 0px 17px 0px $background_color-11;
      z-index: 3;

      a.my_links {
        @include link_default;
      }
    }
  }
}

.my_input {
  background-color: $background_color-5;
  border: none;
  border-bottom: 1px solid $border_color-4;

  &.-left {
    margin-right: 20px;
  }

  &.-right {
    width: calc(50% - 20px);
  }
}
</style>
