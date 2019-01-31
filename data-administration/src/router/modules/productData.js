/**
 *Created For:数据计算路由
 *Author:wangdong
 *Date:2019/1/24
 */
export default{
    path:"productDataManage",
    component: () => import(/* webpackChunkName: "productDataManage" */ '@/components/middleware'),
    children:[
        {
            path:"authorityData",
            name:"authorityData",
            component:()=>import(/* webpackChunkName: "dataCount" */ '@/views/productDataManage/AuthorityData')
        },{
            path:"standardData",
            name:"standardData",
            component:()=>import(/* webpackChunkName: "dataCount" */ '@/views/productDataManage/StandardData')
        },{
            path:"flowData",
            name:"flowData",
            component:()=>import(/* webpackChunkName: "dataCount" */ '@/views/productDataManage/FlowData')
        },{
            path:"businessCompany",
            name:"businessCompany",
            component:()=>import(/* webpackChunkName: "dataCount" */ '@/views/productDataManage/BusinessCompany')
        },{
            path:"goodsData",
            name:"goodsData",
            component:()=>import(/* webpackChunkName: "dataCount" */ '@/views/productDataManage/GoodsData')
        },
    ]
}