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
    }

}
</script>

<template>
    <div>
        <div v-if="section == 'h1'">
            <h1>
                {{ title }}<span class="text_orange">.</span>
            </h1>
            <p>
                {{ description }}
            </p>
        </div>

        <div v-else-if="section == 'h2'" :class="sectionAlign == 'center'? 'text-center d-flex flex-column align-items-center' : ''">
            <h2>
                {{ title }}<span class="text_orange">.</span>
            </h2>
            <p>
                {{ description }}
            </p>
            <div class="line_twxt-orange"></div>
        </div>
        <div v-else-if="section == 'h3'" :class="sectionAlign == 'center'? 'text-center d-flex flex-column align-items-center' : ''">
            <h3>
                {{ title }}<span class="text_orange">.</span>
            </h3>
            <p>
                {{ description }}
            </p>
            <div class="line_twxt-orange"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2,
h1,
h3 {
    font-weight: 700;
    color: $text_color-14;
    text-transform: capitalize;
}

.text_orange {
    color: $text_color-8;
}

p {
    color: $text_color-11;
    font-weight: 300;
}
.line_twxt-orange{
    width: 50px;
    border: 1px solid $border_color-5;
}
</style>