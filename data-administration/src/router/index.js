/**
 *Created For:路由管理
 *Author:wangdong
 *Date:2019/1/24
 */
import chartShow from "./modules/chartShow"
import dataCount from "./modules/dataCount"
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
        component:() => import(/* webpackChunkName: "noFound" */ '@/views/login')
    },
    {
        path: '/',
        name: 'container',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Container'),
        children:[
            chartShow,
            dataCount
        ]
    }
]