<script>
export default {
  name: 'MainPercentage',
  data() {
    return {

    }
  },
  props: {
    title: String,
    percentage: Number,
  }

}
</script>

<template>
  <div>
    <div class="my_row mb-3">
      <div class="text d-flex justify-content-between">
        <h6>
          {{title}}
        </h6>
        <span>
          {{ percentage }}%
        </span>
      </div>
      <div class="bar-live w-100 position-relative">
        <div class="bar-active position-absolute" :style="`width: ${percentage}%`"></div>
        <div class="bar-border"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bar-live{
    .bar-active{
      height: 3px;
      background-color: $fill_color-3;
      left: 0;
      top: -1px;
    }
    .bar-border{
      border: 1px solid $border_color-4;
    }
    
  }
</style>
