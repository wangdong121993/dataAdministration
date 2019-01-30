/**
*Created For:登录
*Author:wangdong
*Date:2019/1/25
*/
<template>
    <div class="login">
        <div class="login-contain">
            <el-form :model="ruleName" :rules="rules" ref="ruleName">
                <div class="login-list">
                    <el-form-item prop="username">
                        <el-input v-model="ruleName.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                </div>
                <div class="login-list">
                    <el-form-item prop="username">
                        <el-input v-model="ruleName.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                </div>
            </el-form>
            <div class="goBtn">
                <el-button type="primary" class="login-btn" @click="btnSubmit()">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                ruleName:{
                    username:"",
                    password:"",
                },
                rules:{
                    username:[
                        {required:true,message:"请输入用户名",trigger: 'blur'}
                    ],
                    password: [{required: true, message: "请输入活动名称", trigger: "change"}]
                }
            }
        },
        watch: {},
        computed: {},
        mounted() {

        },
        components: {},
        methods: {
            btnSubmit(){
                this.$refs['ruleName'].validate(valid=>{
                    if(valid){
                        this.$router.replace({path:"/"});
                    } else{
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .login-contain{
        width: 300px;
        height: 220px;
        padding: 40px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        border-radius: 10px;
        .login-list{
            margin-bottom: 40px;
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
        .goBtn{
            text-align: center;
        }
        .login-btn{
            margin: 0 auto;
        }
    }
</style>