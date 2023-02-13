<script>
export default {
    name: 'HeaderTop',
    data() {
        return {

        }
    }

}
</script>

<template>
    <div class="row row-cols-2">
        <div class="col">
            logo
        </div>
        <div class="col d-flex justify-content-end">
            <ul class="d-flex justify-content-between w-100">
                <li>
                    <a href="#nogo">
                        link                    
                </a>
                </li>
                <li>
                    <a href="#nogo">
                        link                    
                </a>
                </li>
                <li>
                    <a href="#nogo">
                        link                    
                </a>
                </li>
                <li>
                    <a href="#nogo">
                        link                    
                </a>
                </li>
                <li>
                    <a href="#nogo">
                        link                    
                </a>
                </li>
                <li>
                    <a href="#nogo">
                        link                    
                </a>
                </li>
                <li>
                    <a href="#nogo">
                        button                    
                </a>
                </li>
                <li>
                    <a href="#nogo">
                        button                    
                </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row{
    ul{
        li{
            list-style: none;
            a{
                text-decoration: none;
            }
        }
    }
}
</style>
