<script>
import SectionTitle from '../All/SectionTitle.vue';
export default {
  name: 'MainSectionLatestNews',
  components: {
    SectionTitle,
  },
  data() {
    return {
    }
  }

}
</script>

<template>
  <div class="bg_plug p-5">
    <div class="container">

      <div class="w-100 py-5">

        <div class="row">
          <div class="col ">

            <SectionTitle :title="'Latest news'"
              :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, at.'" :section="'h2'"
              :sectionAlign="'center'" />

          </div>
        </div>

        <div class="row">

          <div class="col 1">
            <button class="btn rounded-circle">
              <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            </button>
          </div>

          <div class="col-10">
            <div class="row row-cols-3">
              <div class="col">
                <div class="content-top w-100 mb-4">

                  <div class="top-imgs d-flex flex-column position-relative">
                    <img src="../../assets/img/h1-img-01.jpg" alt="img-1">
                    <div class="text-bg text-center p-1 px-3 position-absolute d-flex align-items-center">
                      <span class="me-2">
                        <font-awesome-icon icon="fa-solid fa-tag" />
                      </span>
                      <span>
                        lollo
                      </span>
                    </div>
                  </div>
                </div>

                <div class="content-bottom">
                  <div>
                    <span>
                      <a href="#nogo">
                        <span>
                          <font-awesome-icon icon="fa-regular fa-clock" />
                        </span>
                        data
                      </a>
                    </span>
                    <span>
                      <a href="#nogo">
                        <span>
                          <font-awesome-icon icon="fa-regular fa-user" />
                        </span>
                        data
                      </a>
                    </span>
                  </div>
                  <h5>
                    Next Investment
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat amet, nam eaque facere assumenda
                    quo.
                  </p>

                  <a href="#nogo">
                    read more
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div class="col 1">
            <button class="btn rounded-circle">
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </button>


          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  @include btn-carousel-default;

}

.text-bg {
  background-color: $background_color-8;

  right: 10px;
  bottom: -10px;

  span {
    color: $text_color-3;
    font-weight: 300;
    font-size: 0.7rem;
    text-transform: capitalize;
    

  }
}

.content-bottom {
  p {
    @include pargh_default;
  }
  
  a {
    @include link_default;
    text-transform: capitalize
  }
  span{
    a{
      @include pargh-card_default;
    }
  }
}
</style>
