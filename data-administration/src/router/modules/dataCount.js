/**
 *Created For:数据计算路由
 *Author:wangdong
 *Date:2019/1/24
 */
export default {
    path:"dataCount",
    component: () => import(/* webpackChunkName: "dataCount" */ '@/components/middleware'),
    children:[
        //基准数据处理
        {
            path:"standardDataDeal",
            name:"standardDataDeal",
            component:() => import(/* webpackChunkName: "dataCount" */ '@/views/dataCountManage/StandardDataDeal')
        },
        //基准数据查看
        {
            path:"standardDataLook",
            name:"standardDataLook",
            component:() => import(/* webpackChunkName: "dataCount" */ '@/views/dataCountManage/StandardDataLook')
        },
        //流向数据处理
        {
            path:"flowDataDeal",
            name:"flowDataDeal",
            component:() => import(/* webpackChunkName: "dataCount" */ '@/views/dataCountManage/FlowDataDeal')
        },
        //流向数据查看
        {
            path:"flowDataLook",
            name:"flowDataLook",
            component:() => import(/* webpackChunkName: "dataCount" */ '@/views/dataCountManage/FlowDataLook')
        },
        //分类特征参数
        {
            path:"classifyParameter",
            name:"classifyParameter",
            component:() => import(/* webpackChunkName: "dataCount" */ '@/views/dataCountManage/ClassifyParameter')
        },
        //数据抓取任务
        {
            path:"dataCaptureTask",
            name:"dataCaptureTask",
            component:() => import(/* webpackChunkName: "dataCount" */ '@/views/dataCountManage/DataCaptureTask')
        }
    ],
}