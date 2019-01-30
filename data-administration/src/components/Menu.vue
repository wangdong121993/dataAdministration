/**
*Created For:
*Author:wangdong
*Date:2019/1/24
*/
<template>
    <div class="menu">
        <div class="logo" @click="goIndex()">
            <div class="" :style="'background-image:url('+(!collapse?img1:img2)+')'"></div>
            <!--<template v-if="collapse">-->
                <!--<img src="../assets/logo-small.png" alt="">-->
            <!--</template>-->
        </div>
        <el-menu
                class="el-menu-vertical-demo"
                :unique-opened="true"
                :router="true"
                :collapse="collapse"
                :background-color="'transparent'"
                :text-color = "'#fff'"
        >
            <template v-for="item in items">
                <!--一级-->
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon" style="color:#fff;"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <!--遍历二级导航-->
                        <template v-for="(subItem) in item.subs">
                            <!--判断是否存在三级导航-->
                            <template v-if="subItem.subs">
                                <el-submenu :index="subItem.index" :key="subItem.index">
                                    <template slot="title">{{ subItem.title }}</template>
                                    <el-menu-item v-for="(childItem,j) in subItem.subs" :key="j" :index="childItem.index">
                                        <!--三级-->
                                        {{ childItem.title }}
                                    </el-menu-item>
                                </el-submenu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
        <div class="menu-hide" @click="menuCut()">{{collapse?'> >':`&lt; &lt;  收起`}}</div>
    </div>
</template>

<script>
    import img1 from "../assets/logo.png";
    import img2 from "../assets/logo-small.png";
    export default {
        name: "",
        data() {
            return {
                img1: img1,
                img2: img2,
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-bell',
                        index: 'promotionPrice',
                        title: '特价',
                        id: "",  // 对应后台数据
                        auth: true,  //是否有权限
                        subs: [
                            {
                                index: '/promotionPrice/activityList',
                                title: '活动管理',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: 'second',
                        title: '秒杀',
                        id: "",  // 对应后台数据
                        auth: true,  //是否有权限
                        subs: [
                            {
                                index: '/second/secList',
                                title: '活动管理',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            },
                            {
                                index: '/second/page',
                                title: '页面管理',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-off',
                        index: 'lottery',
                        title: '抽奖',
                        id: "",  // 对应后台数据
                        auth: true,  //是否有权限
                        subs: [
                            {
                                index: '/lottery/activityManage',
                                title: '活动管理',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            }
                        ]
                    },
                    // 鹅蛋管理
                    {
                        icon: 'el-icon-news',
                        index: 'score',
                        title: '鹅蛋',
                        id: "",  // 对应后台数据
                        auth: true,  //是否有权限
                        subs: [
                            {
                                index: '/score/scoreConfigure',
                                title: '鹅蛋配置',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            }
                        ]
                    },
                    // 优惠券管理
                    {
                        icon: 'el-icon-tickets',
                        index: 'coupon',
                        title: '优惠券',
                        id:"",  // 对应后台数据
                        auth:true,  //是否有权限
                        subs: [
                            {
                                index: '/coupon/list',
                                title: '优惠券配置',
                                id:"",  // 对应后台数据
                                auth:true,  //是否有权限
                            },
                            {
                                index: '/coupon/statistics',
                                title: '优惠券统计',
                                id:"",  // 对应后台数据
                                auth:true,  //是否有权限
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-picture',
                        index: 'advertise',
                        title: '广告',
                        id: "",  // 对应后台数据
                        auth: true,  //是否有权限
                        subs: [
                            {
                                index: '/advertise/advertiseFloat',
                                title: '浮层广告',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            },
                            {
                                index: '/advertise/advertiseTop',
                                title: '头部广告',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            },
                            {
                                index: '/search/keyword',
                                title: '搜索推广',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            }
                        ]
                    },
                    // 厂家旗舰店
                    {
                        icon: 'el-icon-goods',
                        index: 'factory',
                        title: '厂家旗舰店',
                        id: "",  // 对应后台数据
                        auth: true,  //是否有权限
                        subs: [
                            {
                                index: '/factory/pageManage',
                                title: '页面管理',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            }
                        ]
                    },
                    // 模块内容配置
                    {
                        icon: 'el-icon-setting',
                        index: 'module',
                        title: '模块内容配置',
                        id: "",  // 对应后台数据
                        auth: true,  //是否有权限
                        subs: [
                            {
                                index: '/module/firstScreen/1/0/0',
                                title: '首屏大图',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            },
                            {
                                index: '/module/floorAdvertise/1/0/0',
                                title: '楼层广告',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            },
                            {
                                index: '/module/activityRecommend/1/0/0',
                                title: '专题推荐',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            },
                            {
                                index: '/module/goodsRecommend/1/0/0',
                                title: '商品推荐',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            },
                            {
                                index: '/module/standardItemRecommend',
                                title: '标准商品推荐',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            },
                            {
                                index: '/module/video',
                                title: '视频播放',
                                id: "",  // 对应后台数据
                                auth: true,  //是否有权限
                            }
                        ]
                    }
                ]
            }
        },
        watch: {},
        computed: {},
        mounted() {

        },
        components: {},
        methods: {
            menuCut(){
                this.collapse = !this.collapse;
            },
            goIndex(){
                this.$router.replace({path:"/"});
            }
        }
    }
</script>

<style scoped lang="scss">
    .logo{
        width: 100%;
        height: 70px;
        transition: width 0.3s;
        cursor: pointer;
        div{
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
    .menu{
        min-height: 100%;
        width: auto;
        background-color: #242f42;
        transition: 2s;
    }
    .menu-hide{
        line-height: 64px;
        color: #fff;
        cursor: pointer;
        text-align: center;
    }
    .menu-hide:hover{
        background-color: #192129;
        color: #00c1de;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: auto;
        border-right: 0;
    }
</style>