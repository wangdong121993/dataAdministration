/**
*Created For:登录
*Author:wangdong
*Date:2019/1/25
*/
<template>
    <div class="login">
        <div class="login-contain">
            <div class="login-list">
                <input type="text" placeholder="请输入账号">
                <p class="error">账号不能为空</p>
            </div>
            <div class="login-list">
                <input type="text" placeholder="请输入密码">
                <p class="error">密码不能为空</p>
            </div>
            <input type="button" value="登录">
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {}
        },
        watch: {},
        computed: {},
        mounted() {

        },
        components: {},
        methods: {}
    }
</script>

<style scoped lang="scss">
    .login-contain{
        width: 300px;
        height: 380px;
        padding: 40px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        border-radius: 10px;
        .login-list{
            margin-top: 40px;
            input{
                display: block;
                border: 1px solid #f2f2f2;
                font-size: 18px;
                line-height: 40px;
                padding: 0 10px;
                width: 100%;
                box-sizing: border-box;;
            }
        }

    }
</style>