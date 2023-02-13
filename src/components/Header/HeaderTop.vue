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
    <div class="row row-cols-2 h-100 p-3 align-content-center">
        <div class="col h-100 d-flex align-items-center">
            <img class="h-25" src="../../assets/img/logo-img-01.png" alt="logo_Everlead">
        </div>
        <div class="col d-flex justify-content-end align-items-center">
            <ul class="d-flex justify-content-between align-content-center mb-0 w-100">
               <template v-for="element in headerNavBarLink">
                <li class="align-self-center">
                    <a :href="element.href">
                        {{ element.name }}
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

            a {
                text-decoration: none;
                text-transform: uppercase;
            }
        }
    }
}
</style>
