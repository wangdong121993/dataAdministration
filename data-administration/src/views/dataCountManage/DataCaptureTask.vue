/**
*Created For:数据抓取任务
*Author:wangdong
*Date:2019/1/30
*/
<template>
    <div>
        <div class="search-top">
            <time-query style="margin: 0 10px;">
            </time-query>
            <div class="search-top-button">
                <el-button type="primary">查询</el-button>
                <el-button type="primary">建任务</el-button>
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
                <el-table-column type="index" width="50" fixed="left" label="序号"></el-table-column>
                <el-table-column label="批次" prop="batch" width="120"></el-table-column>
                <el-table-column label="创建时间" prop="createTime" width="140"></el-table-column>
                <el-table-column label="数据源" prop="dataSource" width="120"></el-table-column>
                <el-table-column label="分类" prop="classify" width="120"></el-table-column>
                <el-table-column label="完成时间" prop="successTime" width="120"></el-table-column>
                <el-table-column label="数据大小" prop="dataNum" width="120"></el-table-column>
                <el-table-column label="数据量" prop="amountNum" width="120"></el-table-column>
                <el-table-column label="状态" prop="status" width="120"></el-table-column>
                <el-table-column label="清洗状态" prop="clearStatus" width="120"></el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
                        <el-col :span="24" class="tc cursor">
                            <span @click="againExecute(scope.row)">重新执行</span>
                        </el-col>
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
                startTime:"",
                endTime:"",
                searchAfter:{
                    startTime:"",
                    endTime:""
                },
                list:[
                    {
                        batch: 111,
                        createTime:"2019-11-11 10:10:10",
                        dataSource:"国家药监局",
                        classify:"药品生产企业",
                        successTime:"2019-12-21 12:12",
                        dataNum:"12MB",
                        amountNum:"23212条",
                        status:"成功",
                        clearStatus:"完成",
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
            againExecute(item){
                console.log("重新执行",item)
            },
            handleSelectionChange(val){
                console.log("选中的勾选",val);
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