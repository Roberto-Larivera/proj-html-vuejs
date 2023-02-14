<script>
export default {
    name: 'SectionTitle',
    components: {
    },
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String,
            default: 'Title Section'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum quia fugiat repellat voluptas ex aspernatur accusamus expedita vel architecto.'

        },
        section: String,
        sectionAlign: String,
        descriptionBoll:{
            type: Boolean,
            default: true
        }
    }

}
</script>

<template>
    <div>
        <div v-if="section == 'h1'">
            <h1>
                {{ title }}<span class="text_orange">.</span>
            </h1>
            <p v-if="descriptionBoll">
                {{ description }}
            </p>
        </div>

        <div v-else-if="section == 'h2'" :class="sectionAlign == 'center'? 'text-center d-flex flex-column align-items-center' : ''">
            <h2>
                {{ title }}<span class="text_orange">.</span>
            </h2>
            <p v-if="descriptionBoll">
                {{ description }}
            </p>
            <div class="line_text-orange"></div>
        </div>

        <div v-else-if="section == 'h3'" :class="sectionAlign == 'center'? 'text-center d-flex flex-column align-items-center' : ''">
            <h3>
                {{ title }}<span class="text_orange">.</span>
            </h3>
            <p v-if="descriptionBoll">
                {{ description }}
            </p>
            <div class="line_text-orange"></div>
        </div>

        <div v-else-if="section == 'h4'" :class="sectionAlign == 'center'? 'text-center d-flex flex-column align-items-center' : ''">
            <h4>
                {{ title }}<span class="text_orange">.</span>
            </h4>
            <p v-if="descriptionBoll">
                {{ description }}
            </p>
            <div class="line_text-orange"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// h1,
// h2,
// h3,
// h4 {
//     font-weight: 700;
//     color: $text_color-14;
//     text-transform: capitalize;
// }

.text_orange {
    color: $text_color-8;
}

p {
    @include pargh-title_default;

}
.line_text-orange{
    width: 50px;
    border: 1px solid $border_color-5;
}
</style>