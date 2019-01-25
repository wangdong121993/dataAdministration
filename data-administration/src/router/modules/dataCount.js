/**
 *Created For:数据计算路由
 *Author:wangdong
 *Date:2019/1/24
 */
export default {
    path:"dataCount",
    component: () => import(/* webpackChunkName: "about" */ '@/components/middleware'),
    children:[
        {
            path:"standardDataDeal",
            name:"standardDataDeal",
            component:() => import(/* webpackChunkName: "about" */ '@/views/dataCountManage/StandardDataDeal')
        }
    ],
}