<script>
import  {DateTime}  from 'luxon';

export default {
  name: 'MainMiniCard',
  data() {
    return {
      DateTime,
    }
  },
  props: {
    title: {
      type: String,
      default: 'Titolo Mini Card'
    },
    date: {
      type: String,
      default: 'Jan 1, 0000'
    },
    time: {
      type: String,
      default: '0:00 am - 0:00 pm'
    },
    address: {
      type: String,
      default: '###. ## 0000, ###'
    },
    url: {
      type: String,
      default: '#nogo'
    },

  },
  methods: {
    newDay(element) {
      const dt = DateTime;

      return dt.fromFormat(element,'LLL d, yyyy').toFormat('dd');

    },
    newMonth(element) {
      const dt = DateTime;

      return dt.fromFormat(element, 'LLL d, yyyy').toFormat('LLL, yyyy');

    }
  },

}
</script>

<template>
  <div>
    <div class="min_card d-flex p-3">
      <div class="min_card-left">
        <div class="date  w-100 text-center p-1 px-3">
          <div>{{newDay(date)}}</div>
          <span>{{newMonth(date)}}</span>
        </div>
      </div>
      <div class="min_card-right ms-3">
        <h6>
          {{title}}
        </h6>
        <p class="mb-1">
          <font-awesome-icon icon="fa-regular fa-clock" />
          <span>
            {{time}}, {{ date }}
          </span>
        </p>
        <p>
          <font-awesome-icon icon="fa-solid fa-location-dot" />
          <span>
            {{address}}
          </span>
        </p>
        <a class="my-3" :href="url">
          read more
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.min_card-left {
  .date {
    background-color: $background_color-8;

    div {
      font-family: 'Playfair Display', serif;
      text-decoration: none;
      color: $text_color-1;
      font-weight: 800;
    }

    span {
      color: $text_color-3;
      font-weight: 300;
      font-size: 0.7rem;
      text-transform: capitalize;

    }
  }
}
p {
  @include pargh-card_default;
  .fa-clock,
  .fa-location-dot{
    color: $text_color-8;
    margin-right: .5rem;
  }
}

a {
  @include link_default;



}
</style>
