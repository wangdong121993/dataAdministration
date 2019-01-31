/**
*Created For:流向数据处理
*Author:wangdong
*Date:2019/1/30
*/
<template>
    <div>
        <div class="search-top">
            <time-query style="margin:0 10px;">
                <template slot="before">
                    <el-col :span="4" class="clearfix">
                        <el-form-item class="search-item">
                            <el-input placeholder="批次号"></el-input>
                        </el-form-item>
                    </el-col>
                </template>
                <template slot="after">
                    <el-button type="primary" class="mt3">查询</el-button>
                </template>
            </time-query>
            <div class="search-top-button">
                <el-button type="primary">导入处理</el-button>
                <el-button type="primary">数据筛选处理</el-button>
                <el-button type="primary">发布</el-button>
            </div>
        </div>
        <div class="search-con">
            <el-table
                    header-cell-class-name="el-table-thead"
                    ref="listTable"
                    :data="list"
                    border
                    style="width: 100%;"
                    @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" fixed="left" ></el-table-column>
                <el-table-column label="批次号" prop="batchNumber" width="120"></el-table-column>
                <el-table-column label="企业" prop="company" width="120"></el-table-column>
                <el-table-column label="备注" prop="remark"></el-table-column>
                <el-table-column label="导入时间" prop="importTime" width="140"></el-table-column>
                <el-table-column label="类型" prop="type" width="120"></el-table-column>
                <el-table-column label="状态" prop="status" width="120"></el-table-column>
                <el-table-column label="处理时间" prop="dealTime" width="140"></el-table-column>
                <el-table-column label="总数量" prop="amountNum" width="80"></el-table-column>
                <el-table-column label="匹配成功" prop="matchSuccess" width="80"></el-table-column>
                <el-table-column label="未匹配" prop="notMatch" width="80"></el-table-column>
                <el-table-column label="下载" width="100">
                    <template slot-scope="scope">
                        <el-col :span="24" class="tc cursor"><span @click="notClassify(scope.$index)">未匹配数据</span></el-col>
                    </template>
                </el-table-column>
                <el-table-column label="统计" prop="source">
                    <template slot-scope="scope">
                        <el-col :span="24" class="tc cursor"><span @click="statisticsDown(scope.$index)">详情</span></el-col>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-wrapper">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="pages.pageSize"
                        layout="total, prev, pager, next, jumper"
                        :total="pages.totalCount"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import timeQuery from "./../../components/TimeQuery"
    export default {
        name: "",
        data() {
            return {
                batchNumber:"",
                startTime:"",
                endTime:"",
                searchAfter:{
                    batchNumber:"",
                    startTime:"",
                    endTime:"",
                },
                list:[
                    {
                        batchNumber:20190102001,
                        company:"亚宝制药",
                        remark:"12月份",
                        importTime:"2019/01/02 12:31:22",
                        type:"导入",
                        status:"未处理",
                        dealTime:"2019/01/02 14:31:22",
                        amountNum: 12306,
                        matchSuccess: 10000,
                        notMatch:223,
                    },
                    {
                        batchNumber:20190102001,
                        company:"亚宝制药",
                        remark:"12月份",
                        importTime:"2019/01/02 12:31:22",
                        type:"导入",
                        status:"未处理",
                        dealTime:"2019/01/02 14:31:22",
                        amountNum: 12306,
                        matchSuccess: 10000,
                        notMatch:223,
                    }
                ],
                pages:{
                    pageNo: 1,
                    totalCount: 100,
                    pageSize: 20
                }
            }
        },
        watch: {},
        computed: {},
        mounted() {

        },
        components: {timeQuery},
        methods: {
            handleSelectionChange(val){
                console.log("选中的勾选",val);
            },
            toggleSelection(){
                this.$refs.listTable.toggleRowSelection(this.list[1])
            },
            //未分类
            notClassify(index){
                console.log("未匹配",index)
            },
            //详情
            statisticsDown(index){
                console.log("统计详情",index)
            },
            //分页处理
            handleSizeChange(val){
                console.log("每页",val)
            },
            //当前页
            handleCurrentChange(val){
                console.log("当前页",val)
            }
        }
    }
</script>

<style scoped>

</style>