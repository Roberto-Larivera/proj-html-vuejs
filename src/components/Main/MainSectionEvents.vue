<script>
import MainMiniCard from './MainMiniCard.vue'
export default {
  name: 'MainSectionEvents',
  components:{
    MainMiniCard,
  },
  data() {
    return {
      mainCardsEvents:[
        {
          title: 'melbourne coaching',
          date: 'Jan 7, 2022',
          time:' 9:00 am - 5:00 pm',
          address: 'Cambridge, MA 02138, USA',
          url: '#nogo'
        },
        {
          title: 'new york coaching',
          date: 'Jan 7, 2022',
          time:' 9:00 am - 5:00 pm',
          address: 'Cambridge, MA 02138, USA',
          url: '#nogo'
        },
        {
          title: 'london coaching',
          date: 'Jan 7, 2022',
          time:' 9:00 am - 5:00 pm',
          address: 'Cambridge, MA 02138, USA',
          url: '#nogo'
        },
      ]
    }
  }

}
</script>

<template>
  <div>
    <div class="container">

      <div class="w-100">
        <div class="row">
          <div class="col-10 offset-1">

            <div class="box-content w-100">
              <div class="content-left w-50">

                <div class="card w-100 rounded-0">
                  <div class="card-header p-3">
                    <h4>
                      Upcoming Events
                    </h4>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="element in mainCardsEvents">
                      <MainMiniCard 
                      :title="element.title"
                      :date="element.date"
                      :time="element.time"
                      :address="element.address"
                      />
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
.card{
  .card-header{
    background-color: $background_color-6;
  }
  .list-group-item{
    background-color: $background_color-6;
    &.click{
    background-color: $background_color-3;
    border-color: none !important
    }
  }
}
</style>
