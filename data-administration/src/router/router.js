import Vue from 'vue'
import Router from 'vue-router'
import route from "./index"
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:
        // [
        //     {
        //         path:"*",
        //         name:"noFound",
        //         component:resolve => require(['@/components/NotFound'], resolve)
        //     },
        //     {
        //         path: '/',
        //         name: 'container',
        //         component: () => import(/* webpackChunkName: "about" */ '@/components/Container')
        //     }
        // ]
        route
})
