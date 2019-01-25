import Vue from 'vue'
import Router from 'vue-router'
import route from "./index"
import storage from '../storage'
Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(){
        return {x: 0, y: 0}
    },
    routes:
        route
});
router.beforeEach((to, from , next)=>{
    if(to.matched.some(record=>record.meta.noRequiresAuth)){
        next();
    }else{
        if(storage.getters.isLogin){
            next();
        }else{
            next({
                name:"login"
            })
        }
    }
});


export default router