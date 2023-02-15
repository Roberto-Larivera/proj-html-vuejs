<script>
import MainMiniCard from './MainMiniCard.vue'
export default {
  name: 'MainSectionEvents',
  components: {
    MainMiniCard,
  },
  data() {
    return {
      mainCardsEvents: [
        {
          title: 'melbourne coaching',
          date: 'Jan 7, 2022',
          time: ' 9:00 am - 5:00 pm',
          address: 'Cambridge, MA 02138, USA',
          url: '#nogo'
        },
        {
          title: 'new york coaching',
          date: 'Jan 7, 2022',
          time: ' 9:00 am - 5:00 pm',
          address: 'Cambridge, MA 02138, USA',
          url: '#nogo'
        },
        {
          title: 'london coaching',
          date: 'Jan 7, 2022',
          time: ' 9:00 am - 5:00 pm',
          address: 'Cambridge, MA 02138, USA',
          url: '#nogo'
        },
      ]
    }
  }

}
</script>

<template>
  <div class="bg_plug py-5">
    <div class="container">

      <div class="w-100 py-5">
        <div class="row">
          <div class="col-10 offset-1">

            <div class="box-content w-100">
              <div class="content-left w-50">

                <div class="my_card w-100">
                  <div class="my_card-header p-4 w-100">
                    <h4>
                      Upcoming Events
                    </h4>
                  </div>
                  <ul class="my_list-group p-0">
                    <li class="my_list-group-item p-3" v-for="element in mainCardsEvents">
                      <MainMiniCard :title="element.title" :date="element.date" :time="element.time"
                        :address="element.address" />
                    </li>
                  </ul>
                  
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg_plug {
  background-image: url('../../assets/img/h1-img-09.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.my_card {
  background-color: $background_color-6;

  .my_card-header {
    background-color: $background_color-6;
    box-shadow: 0px 7px 10px 0px $border_color-3;
    position: relative;
    z-index: 2;
  }

  .my_list-group-item {
    background-color: $background_color-6;
    list-style-type: none;
    border-bottom: 1px solid $border_color-3;

    &:hover {
      background-color: $background_color-1;
    }
  }
}
</style>
