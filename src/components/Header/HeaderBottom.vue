<script>
import AllButton from '../All/AllButton.vue';
import SectionTitle from '../All/SectionTitle.vue';
import { store } from '../../store'
export default {
    name: 'HeaderBottom',
    components: {
        AllButton,
        SectionTitle,
    },
    data() {
        return {
            store,
            autoPlay: null,
        }
    },
    methods: {
        nextClick() {
            if (this.store.headerBottomCurrent == (this.store.headerBottomList.length - 1)) {
                this.store.headerBottomCurrent = 0;
            } else {
                this.store.headerBottomCurrent++;
            }
        },

        prevClick() {
            if (this.store.headerBottomCurrent == 0) {
                this.store.headerBottomCurrent = (this.store.headerBottomList.length - 1)
            } else {
                this.store.headerBottomCurrent--;
            }
        },
        hoverStop() {
            //console.log('SONO IN HOVER');
            clearInterval(this.autoPlay);
            this.autoPlay = null;
        },
        hoverPlay() {
            //console.log('SONO FUORI HOVER');
            this.startAutoPlay();
        },
        startAutoPlay() {
            this.autoPlay = setInterval(this.nextClick, 3000);
        },
    },
    mounted() {
        this.startAutoPlay()
    },

}
</script>

<template>
    <div class="row h-100 ">
        <div class="col-1 h-100 d-flex align-items-center">
            <button class="btn rounded-circle" @click="nextClick()">
                <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            </button>

        </div>
        <div class="col-5 h-100 d-flex flex-column justify-content-center">
            <SectionTitle :section="'h1'" :title="'our team'"
                :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, consequuntur nam harum quam fuga optio!'" />
            <div class="group_buttons d-flex flex-wrap gap-5">
                <AllButton :text="'read more'" />
                <AllButton :text="'purchase'" :color="'tm_orange'" />
            </div>
        </div>
        <div class="col-1 offset-5 h-100 d-flex align-items-center justify-content-end">
            <button class="btn rounded-circle" @click="prevClick()">
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
