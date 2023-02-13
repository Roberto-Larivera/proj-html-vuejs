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
    <div class="row row-cols-2 h-100 p-3 align-content-center">
        <div class="col h-100 d-flex align-items-center">
            <img class="h-25" src="../../assets/img/logo-img-01.png" alt="logo_Everlead">
        </div>
        <div class="col d-flex justify-content-end align-items-center">
            <ul class="d-flex justify-content-between align-content-center mb-0 w-100">
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
