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

                <div class="card w-75">
                  <div class="card-header">
                    <h4>
                      Upcoming Events
                    </h4>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <MainMiniCard />
                        <div class="min_card">
                          <div class="min_card-left">
                            #date
                          </div>
                          <div class="min_card-right">
                            <h6>
                              title
                            </h6>
                            <p>
                              icona + testo
                            </p>
                            <p>
                              icona + testo
                            </p>
                            <a href="#nogo">
                              read more
                            </a>
                          </div>
                        </div>
                    
                    </li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
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

</style>
