/**
 *Created For:数据计算路由
 *Author:wangdong
 *Date:2019/1/24
 */
export default {
    path:"dataCount",
    component: () => import(/* webpackChunkName: "about" */ '@/components/middleware'),
    children:[
        //基准数据处理
        {
            path:"standardDataDeal",
            name:"standardDataDeal",
            component:() => import(/* webpackChunkName: "about" */ '@/views/dataCountManage/StandardDataDeal')
        },
        //基准数据查看
        {
            path:"standardDataLook",
            name:"standardDataLook",
            component:() => import(/* webpackChunkName: "about" */ '@/views/dataCountManage/StandardDataLook')
        },
        //流向数据处理
        {
            path:"flowDataDeal",
            name:"flowDataDeal",
            component:() => import(/* webpackChunkName: "about" */ '@/views/dataCountManage/FlowDataDeal')
        },
        //流向数据查看
        {
            path:"flowDataLook",
            name:"flowDataLook",
            component:() => import(/* webpackChunkName: "about" */ '@/views/dataCountManage/FlowDataLook')
        },
        //分类特征参数
        {
            path:"classifyParameter",
            name:"classifyParameter",
            component:() => import(/* webpackChunkName: "about" */ '@/views/dataCountManage/ClassifyParameter')
        },
        //数据抓取任务
        {
            path:"dataCaptureTask",
            name:"dataCaptureTask",
            component:() => import(/* webpackChunkName: "about" */ '@/views/dataCountManage/DataCaptureTask')
        }
    ],
}