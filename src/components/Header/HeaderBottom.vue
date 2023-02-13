<script>
import AllButton from '../All/AllButton.vue';
import HeaderSlide from './HeaderSlide.vue';
export default {
    name: 'HeaderBottom',
    components:{
        AllButton,
        HeaderSlide,
    },
    data() {
        return {

        }
    }

}
</script>

<template>
    <div class="row">
        <div class="col-1">
            <font-awesome-icon icon="fa-solid fa-arrow-left-long" />

        </div>
        <div class="col-5">
            <HeaderSlide />
            <div class="group_buttons d-flex flex-wrap gap-2">
                <AllButton :text="'read more'"/>
                <AllButton :text="'purchase'" :color="'tm_orange'"/>
            </div>
        </div>
        <div class="col-1 offset-5">
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />

        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
