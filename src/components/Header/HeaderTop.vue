<script>
export default {
    name: 'HeaderTop',
    data() {
        return {
            headerNavBarLink: [
                {
                    name: 'homes',
                    href: '#nogo',
                },
                {
                    name: 'pages',
                    href: '#nogo',
                },
                {
                    name: 'blog',
                    href: '#nogo',
                },
                {
                    name: 'shop',
                    href: '#nogo',
                },
                {
                    name: 'events',
                    href: '#nogo',
                },
                {
                    name: 'elements',
                    href: '#nogo',
                },
            ]
        }
    }

}
</script>

<template>
    <div class="row h-100 p-3 align-content-center justify-content-between">
        <div class="col-auto h-100 d-flex align-items-center">
            <img class="h-25" src="../../assets/img/logo-img-01.png" alt="logo_Everlead">
        </div>
        <div class="col-auto d-flex justify-content-end align-items-center">
            <ul class="d-flex justify-content-between align-content-center mb-0 w-100">
                <template v-for="element in headerNavBarLink">
                    <li class="list_link align-self-center p-2">
                        <a :href="element.href">
                            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                            <span>
                                {{ element.name }}
                            </span>
                        </a>
                    </li>
                </template>
                <li class="align-self-center">
                    <button class="btn">
                        cerca
                    </button>
                </li>
                <li class="align-self-center">
                    <button class="btn">
                        menu
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row {
    ul {

        li {
            list-style: none;

            &:hover a {
                color: $text_color-8;

                .fa-arrow-right-long {
                    display: inline-block;

                }
            }

            &.list_link {

                .fa-arrow-right-long {
                    margin-right: 10px;
                    display: none;
                }
            }

            a {
                text-decoration: none;
                text-transform: uppercase;
                color: $text_color-14;
                font-size: .9rem;
            }
        }
    }
}
</style>
