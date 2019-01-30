/**
 *Created For:
 *Author:wangdong
 *Date:2019/1/28
 */
import Vue from 'vue'
let echarts = require('echarts/lib/echarts');
// 引入柱状图组件
require('echarts/lib/chart/bar');
require('echarts/lib/chart/pie');
// 引入提示框和title组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
Vue.prototype.$echarts = echarts;