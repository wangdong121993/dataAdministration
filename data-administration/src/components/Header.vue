/**
*Created For:
*Author:wangdong
*Date:2019/1/24
*/
<template>
    <div class="header">
        <el-dropdown class="top-con" size="small">
            <span class="el-dropdown-link">
            欢迎光临<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown" class="drop-down">
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
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
    .header{
        height:40px;
        background: #fff;
        color: #333;
        padding-right: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.5);
        .top-con{
            font-size: 14px;
            cursor: pointer;
        }
    }
    .drop-down{
        padding: 10px 0;
    }
</style>