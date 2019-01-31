/**
*Created For:分类特征参数
*Author:wangdong
*Date:2019/1/30
*/
<template>
    <div>
        <div class="search-top">
            <div class="search-top-button">
                <el-button type="primary">创建</el-button>
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
                <el-table-column type="index" label="序号" width="50"></el-table-column>
                <el-table-column label="名称" prop="classifyName" width="120"></el-table-column>
                <el-table-column label="类型" prop="type" width="120"></el-table-column>
                <el-table-column label="创建时间" prop="createTime"></el-table-column>
                <el-table-column label="版本号" prop="version" width="120"></el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
                        <template v-if="scope.row.operate">
                            <el-row>
                                <el-col class="tc cursor" :span="12">
                                    <span>复制</span>
                                </el-col>
                                <el-col class="tc cursor" :span="12">
                                    <span>查看</span>
                                </el-col>
                            </el-row>
                        </template>
                        <template v-else>
                            <el-row>
                                <el-col class="tc cursor" :span="8">
                                    <span>复制</span>
                                </el-col>
                                <el-col class="tc cursor" :span="8">
                                    <span>删除</span>
                                </el-col>
                                <el-col class="tc cursor" :span="8">
                                    <span>查看</span>
                                </el-col>
                            </el-row>
                        </template>
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
    export default {
        name: "",
        data() {
            return {
                list:[
                    {
                        classifyName:"基础分类特征",
                        type:"默认",
                        createTime:"2019-02-03 10:10:10",
                        version:"v1",
                        operate: 0,
                    },
                    {
                        classifyName:"基础分类特征",
                        type:"自定义",
                        createTime:"2019-02-03 10:10:10",
                        version:"v2",
                        operate: 1,
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
        components: {},
        methods: {
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