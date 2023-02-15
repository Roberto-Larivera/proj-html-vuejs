<script>
export default {
    name: 'AllButton',
    data() {
        return {

        }
    },
    props:{
        color: String,
        text: String

    }
    

}
</script>

<template>
    <div>
        <button class="py-3 px-4" :class="color">
            {{text}}
            <span>
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
button{
    box-shadow: 5px 5px 15px -7px $background_color-16;
    &:hover {
        box-shadow: 5px 5px 15px -7px $background_color-1;
    }
        background-color: $background_color-1;
        color: $text_color-12;
        border: none;
        text-transform: uppercase;
        font-size: .7rem;
        span{
            border-left: 1px solid $border_color-6;
            padding-left: 10px;
            margin-left: 20px;
        }
        &:hover span{
            margin-left: 0;
            margin-right: 20px;
            border: none;
        }
        &.tm_orange{
            &:hover{
                box-shadow: 5px 5px 15px -7px $background_color-8;
            }
            background-color: $background_color-8;
            color: $text_color-1;
            span{
                border-color: $border_color-1;
            }
        }
    }
</style>
