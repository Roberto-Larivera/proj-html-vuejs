<script>
export default {
    name: 'HeaderSlide',
    components: {
    },
    data() {
        return {

        }
    },
    props:{
        title:{
            type: String,
            default: 'Our Team'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum quia fugiat repellat voluptas ex aspernatur accusamus expedita vel architecto.'

        }
    }

}
</script>

<template>
    <div>
        <h1>
            {{title}}<span class="text_orange">.</span>
        </h1>
        <p>
            {{description}}
        </p>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: $text_color-14;
}
.text_orange{
    color: $text_color-8;
}
p{
    color: $text_color-12;
    font-weight: 300;
}
</style>