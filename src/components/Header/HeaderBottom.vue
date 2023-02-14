<script>
import AllButton from '../All/AllButton.vue';
import SectionTitle from '../All/SectionTitle.vue';
export default {
    name: 'HeaderBottom',
    components:{
        AllButton,
        SectionTitle,
    },
    data() {
        return {

        }
    }

}
</script>

<template>
    <div class="row h-100 ">
        <div class="col-1 h-100 d-flex align-items-center">
            <button class="btn rounded-circle">
                <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            </button>

        </div>
        <div class="col-5 h-100 d-flex flex-column justify-content-center">
            <SectionTitle 
            :section="'h1'"
            :title="'our team'" 
            />
            <div class="group_buttons d-flex flex-wrap gap-5">
                <AllButton :text="'read more'"/>
                <AllButton :text="'purchase'" :color="'tm_orange'"/>
            </div>
        </div>
        <div class="col-1 offset-5 h-100 d-flex align-items-center justify-content-end">
            <button class="btn rounded-circle">
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </button>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.btn {
    @include btn-carousel-default;
}
</style>
