<script>
export default {
    name: 'MainCardScLatestNews',
    data() {
        return {

        }
    },
    props:{
        tag: String,
        date: String,
        author: String,
        title: String,
        description: String,
        url: {
            type: String,
            default: '#nogo'
        }

    }

}
</script>

<template>
    <div>
        <div class="content-top w-100 mb-4">

            <div class="top-imgs d-flex flex-column position-relative">
                <img src="../../assets/img/h1-img-01.jpg" alt="img-1">
                <div class="text-bg text-center p-1 px-3 position-absolute d-flex align-items-center">
                    <span class="me-1">
                        <font-awesome-icon icon="fa-solid fa-tag" />
                    </span>
                    <span>
                        {{tag}}
                    </span>
                </div>
            </div>
        </div>

        <div class="content-bottom">
            <div class="box-top">

                <span>
                    <a href="#nogo">
                        <span class="me-1">
                            <font-awesome-icon icon="fa-regular fa-clock" />
                        </span>
                        {{date}}
                    </a>
                </span>

                <span>
                    <a href="#nogo">
                        <span class="me-1 ms-2">
                            <font-awesome-icon icon="fa-regular fa-user" />
                        </span>
                        {{author}}
                    </a>
                </span>

            </div>
            <div class="box-bottom">

                <h5>
                    {{title}}
                </h5>

                <p>
                    {{description}}
                </p>

                <a class="my_links" href="#nogo">
                    read more
                </a>
            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
.text-bg {
    background-color: $background_color-8;

    right: 10px;
    bottom: -10px;

    span {
        color: $text_color-3;
        font-weight: 300;
        font-size: 0.7rem;
        text-transform: capitalize;


    }
}

.content-bottom {
    .box-top {
        a {
            @include pargh-card_default;
            text-decoration: none;
            text-transform: capitalize;

            span {
                color: $text_color-8;

            }
        }
    }

    .box-bottom {

        p {
            @include pargh_default;
        }

        a.my_links {
            @include link_default;
        }
    }
}
</style>
