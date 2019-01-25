/**
*Created For:
*Author:wangdong
*Date:2019/1/24
*/
<template>
    <div class="container">
        <v-menu></v-menu>
        <v-header></v-header>
        <div class="content-wrapper">
            <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>

<script>
    import vMenu from "./Menu"
    import vHeader from "./Header"
    export default {
        name: "",
        data() {
            return {}
        },
        watch: {},
        computed: {},
        mounted() {

        },
        components: {vMenu,vHeader},
        methods: {}
    }
</script>

<style scoped>
    .container{
        width:100%;
        height: 100%;
    }
    .content-wrapper{
        min-height: 100%;
        background-color: #fff;
    }
</style>