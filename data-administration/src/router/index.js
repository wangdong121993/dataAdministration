/**
 *Created For:路由管理
 *Author:wangdong
 *Date:2019/1/24
 */
import chartShow from "./modules/chartShow"
import dataCount from "./modules/dataCount"
import productData from "./modules/productData"
export default [
    {
        path:"*",
        name:"notFound",
        // component:resolve => require(['@/components/NotFound'], resolve)
        component:() => import(/* webpackChunkName: "noFound" */ '@/components/NotFound')
    },
    {
        path:"/login",
        name:"login",
        component:() => import(/* webpackChunkName: "noFound" */ '@/views/login'),
        meta:{
            title:"系统登录"
        }
    },
    {
        path: '/',
        name: 'container',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Container'),
        children:[
            chartShow,
            dataCount,
            productData
        ]
    }
]