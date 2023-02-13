<script>
import AllButton from '../All/AllButton.vue';
export default {
    name: 'HeaderBottom',
    components:{
        AllButton,
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
            freccia 1
        </div>
        <div class="col-5">
            <h1>
                Our Team
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores maiores totam assumenda necessitatibus cupiditate eos, alias libero unde odit!
            </p>
            <div class="group_buttons d-flex flex-wrap gap-2">
                <AllButton :text="'read more'"/>
                <AllButton :text="'purchase'" :color="'tm_orange'"/>
            </div>
        </div>
        <div class="col-1 offset-5">
            freccia 2
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
