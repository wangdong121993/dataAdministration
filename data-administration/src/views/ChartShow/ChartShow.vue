/**
*Created For:图表展示
*Author:wangdong
*Date:2019/1/24
*/
<template>
    <div class="echarts-wrapper">
        <div ref="echarts" class="echarts">
            <div class="echarts-list">
                <span class="title">基准数据分析率</span>
                <div class="base-content" id="base"></div>
                <div class="base-bottom">
                    <div class="base-first base-child">
                        <div id="baseFirst"></div>
                        <p>一级分类</p>
                    </div>
                    <div class="base-second base-child">
                        <div id="baseSecond"></div>
                        <p>二级分类</p>
                    </div>
                    <div class="base-third base-child">
                        <div id="baseThird"></div>
                        <p>三级分类</p>
                    </div>
                </div>
            </div>
            <div class="echarts-list echarts-match">
                <div class="match-left">
                    <span class="title">流向数据匹配率</span>
                    <div id="matchData" class="matchData"></div>
                </div>
                <div class="match-right">
                    <ul>
                        <li>
                            <p>232222条</p>
                            <p>终端数据</p>
                        </li>
                        <li>
                            <p>232222条</p>
                            <p>流向数据</p>
                        </li>
                        <li>
                            <p>232222条</p>
                            <p>商品数据</p>
                        </li>
                        <li>
                            <p>232222条</p>
                            <p>商业公司</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="echarts-list">
                <span class="title">终端数据统计</span>
                <div id="terminalDataStatistics" class="terminalDataStatistics"></div>
            </div>
            <div class="echarts-list">
                <span class="title">流向数据统计</span>
                <div class="screen-condition">
                    <time-query :dateType="timeOption.dateType" :timeValue="timeOption.timeValue">
                        <template slot="after">
                            <el-select v-model="company" placeholder="企业" clearable style="margin-top: 2px;">
                                <el-option
                                        v-for="item in list"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </template>
                    </time-query>

                </div>
                <div id="screenCondition" class="screenCondition"></div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    //引入highcharts
    import HighCharts from 'highcharts'
    require('highcharts/modules/exporting')(HighCharts);
    import timeQuery from "@/components/TimeQuery"
    export default {
        name: "",
        data() {
            return {
                startTime:"",
                endTime:"",
                company:"",
                list:[
                    {
                        value:"1",
                        label:"全部"
                    }
                ],
                timeOption:{
                    dateType:"month",
                    timeValue:2*30*24*60*60*1000
                }
            }
        },
        watch: {},
        computed: {},
        mounted() {
            this.drawBaseData();
            this.drawMatchData();
            this.terminalDataStatistics();
            this.screenCondition();
        },
        components: {timeQuery},
        methods: {
            //基准数据分析率
            drawBaseData(){
                //大饼图
                let bigPie = this.$echarts.init(document.querySelector("#base"));
                // let bigPie=this.$echarts.init(document.querySelector("#screenCondition"));
                bigPie.setOption({
                    series:[{
                        type:"pie",
                        data:[
                            {
                                value:16.2,
                                name:"未分类16.2%",
                                itemStyle:{
                                    color: "#7cb5ec",
                                }
                            },{
                                value:16.2,
                                name:"部分分类16.2%",
                                itemStyle:{
                                    color: "#434348",
                                }
                            },{
                                value:67.6,
                                name:"已分类67.6",
                                itemStyle:{
                                    color: "#90ed7d",
                                }
                            }
                        ]
                    }]
                });
                let classify = document.querySelectorAll(".base-bottom .base-child");
                console.log(classify);
                //一级分类
                this.drawBaseDataSmallPie({num:16.2,color:"#8d4653"},{num:83.8,color:"#91e8e1"},classify[0].querySelector("div"))
                //二级分类
                this.drawBaseDataSmallPie({num:16.2,color:"#434348"},{num:83.8,color:"#f7a35c"},classify[1].querySelector("div"))
                //三级分类
                this.drawBaseDataSmallPie({num:16.2,color:"#f15c80"},{num:83.8,color:"#8085e9"},classify[2].querySelector("div"))
            },
            drawBaseDataSmallPie(classify1,classify2,dom){
                let smallPie = this.$echarts.init(dom);
                smallPie.setOption({
                    series:[{
                        type:"pie",
                        labelLine:{
                            normal:{
                                length:1
                            }
                        },
                        name:"分类 ",
                        data:[
                            {
                                value:classify1.num,
                                name:`已${classify1.num}%`,
                                itemStyle:{
                                    color: classify1.color,
                                }
                            },{
                                value:classify2.num,
                                name:`未${classify2.num}%`,
                                itemStyle:{
                                    color: classify2.color,
                                }
                            }
                        ]
                    }]
                });
            },
            //流向数据匹配率
            drawMatchData(){
                let matchData = this.$echarts.init(document.querySelector("#matchData"));
                matchData.setOption({
                    series:[{
                        type:"pie",
                        data:[
                            {
                                value:16.2,
                                name:"以匹配16.2%",
                                itemStyle:{
                                    color: "#91e8e1",
                                }
                            },
                            {
                                value:83.8,
                                name:"未匹配83.8%",
                                itemStyle:{
                                    color: "#f7a35c",
                                }
                            }
                        ]
                    }]
                });
            },
            //终端数据统计
            terminalDataStatistics(){
                HighCharts.chart("terminalDataStatistics",{
                    title:"",
                    chart:{
                        type:"column"
                    },
                    credits:{
                        enabled: false,
                    },
                    exporting:{
                        enabled: false,
                    },
                    xAxis:{
                        type:"category"
                    },
                    yAxis:{
                        title:{
                            text:""
                        }
                    },
                    legend:{
                        enabled: false,
                    },
                    plotOptions:{
                        series:{
                            borderWidth: 0,
                            dataLabels:{
                                enabled: true,
                                format:'{point.y:.2f}%'
                            }
                        }
                    },
                    series:[
                        {
                            name:'',
                            colorByPoint: true,
                            data:[{
                                name: '单体药店',
                                y: 90.33,
                                drilldown: 'Microsoft Internet Explorer',
                            }, {
                                name: '连锁门店',
                                y: 24.03,
                            }, {
                                name: '连锁总店',
                                y: 10.38,
                            }, {
                                name: '民营医院',
                                y: 4.77,
                            }, {
                                name: '社区卫生所',
                                y: 0.91,
                            }, {
                                name: '乡镇卫生院',
                                y: 0.2,
                            }]
                        }
                    ]
                });
            },
            //流向数据统计
            screenCondition(){
                let screenChart=this.$echarts.init(document.querySelector("#screenCondition"));
                let options={
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                    },
                    grid: {
                        top: "5%",
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['1月', '2月', '3月', '4月', '5月', '6月'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            type:'bar',
                            barWidth: '50%',
                            data:[10, 52, 200, 334, 390, 330]
                        }
                    ]
                };
                screenChart.setOption(options);
            },
            drawCharts(){
                let myChart=this.$echarts.init(document.querySelector("#echarts"));
                // let myChart=this.$echarts.init(this.$refs.echarts)
                myChart.setOption({
                    title: { text: '在Vue中使用echarts' },
                    tooltip: {},
                    xAxis: {
                        type: 'category',
                        data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
                    },
                    yAxis: {},
                    series: [{
                        type: 'bar',
                        // data: [30,20, 36, 10, 10, 20]
                        data:[{
                            value: 30,
                            name:"衬衫",
                            itemStyle:{
                                color: "#f30"
                            }
                        },{
                            value: 20,
                            name:"羊毛衫",
                            itemStyle: {
                                color:"#ff0"
                            }
                        },{
                            value: 20,
                            name:"雪纺衫",
                        },{
                            value: 20,
                            name:"裤子",
                        }]
                    }]
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../scss/chartShow/chartShow.scss";
</style>