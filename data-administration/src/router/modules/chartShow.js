/**
 *Created For:图表路由
 *Author:wangdong
 *Date:2019/1/24
 */
export default {
    path:"chartShow",
    name:"chartShow",
    component: () => import(/* webpackChunkName: "about" */ '@/views/ChartShow/ChartShow')
}