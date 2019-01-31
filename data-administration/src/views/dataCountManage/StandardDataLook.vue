/**
*Created For:基准数据查看
*Author:wangdong
*Date:2019/1/30
*/
<template>
    <div>
        <div class="search-top">
            <div class="search-con">
                <el-form inline :model="search">
                    <el-form-item style="width: 190px;">
                        <el-select placeholder="省" v-model="search.province" clearable>
                            <el-option v-for="p of area.province" :key="p.sid" :label="p.name" :value="p.sid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="width: 190px;">
                        <el-select placeholder="市" v-model="search.city" clearable>
                            <el-option v-for="c of area.city" :key="c.sid" :label="c.name" :value="c.sid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="width: 190px;">
                        <el-select placeholder="区" v-model="search.distinct" clearable>
                            <el-option v-for="d of area.distinct" :key="d.sid" :label="d.name" :value="d.sid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="width: 190px;">
                        <el-select placeholder="分类状态" v-model="search.classify" clearable>
                            <el-option v-for="item of search.classifyList" :key="item.status" :label="item.label" :value="item.status"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="width: 190px;">
                        <el-select placeholder="商业公司" v-model="search.company" clearable>
                            <el-option v-for="item of search.companyList" :key="item.sid" :label="item.name" :value="item.sid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="width: 190px;">
                        <el-select placeholder="终端名称" v-model="search.terminal" clearable>
                            <el-option v-for="item of search.terminalList" :key="item.type" :label="item.label" :value="item.type"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div class="search-top-button">
                <el-button type="primary">查询</el-button>
                <el-button type="primary">发布</el-button>
                <el-button type="primary">导出</el-button>
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
                <el-table-column label="ID" prop="id" width="80"></el-table-column>
                <el-table-column label="终端名" prop="terminalName" width="80"></el-table-column>
                <el-table-column label="曾用名" prop="usedName" width="80"></el-table-column>
                <el-table-column label="经营范围" prop="manageScope" width="80"></el-table-column>
                <el-table-column label="GSP编码" prop="gsp" width="80"></el-table-column>
                <el-table-column label="省市区县乡镇" prop="area" width="140"></el-table-column>
                <el-table-column label="分类" prop="classify" width="80"></el-table-column>
                <el-table-column label="类型" prop="type" width="80"></el-table-column>
                <el-table-column label="经纬度" prop="longitudeLatitude" width="120"></el-table-column>
                <el-table-column label="创建时间" prop="createTime" width="140"></el-table-column>
                <el-table-column label="更新时间" prop="updateTime" width="140"></el-table-column>
                <el-table-column label="数据来源" prop="dateSource" width="80"></el-table-column>
                <el-table-column label="验证来源" prop="validateSource" width="80"></el-table-column>
                <el-table-column label="在业状态" prop="openStatus" width="80"></el-table-column>
                <el-table-column label="状态" prop="status" width="80"></el-table-column>
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
                area:{
                    province:[],
                    city:[],
                    distinct:[],
                },
                search:{
                    province:"",
                    city:"",
                    distinct:"",
                    classify:1,
                    company:"",
                    terminal:"",
                    classifyList:[
                        {
                            status: 1,
                            label:"已分类"
                        },{
                            status: 0,
                            label:"未分类"
                        }
                    ],
                    companyList:[
                        {
                            sid: 1,
                            name:"东东有限公司"
                        },
                        {
                            sid: 2,
                            name:"东东有限公司分公司"
                        },
                        {
                            sid: 3,
                            name:"东东有限公司小公司"
                        },
                    ],
                    terminalList:[
                        {
                            type: 1,
                            label:"单体药店"
                        },{
                            type: 2,
                            label:"连锁药店"
                        },{
                            type: 3,
                            label:"商业公司"
                        },{
                            type: 5,
                            label:"医院"
                        },{
                            type: 6,
                            label:"卫生院"
                        },{
                            type: 7,
                            label:"个体医疗"
                        }
                    ]
                },
                searchAfter:{
                    province:"",
                    city:"",
                    distinct:"",
                    classify:1,
                    company:"",
                    terminal:"",
                },
                list:[
                    {
                        id:1,
                        terminalName:"东东好帅",
                        usedName:"好帅啊",
                        manageScope:"东大桥",
                        gsp:"gsp编码",
                        area:"北京市朝阳区朝阳县",
                        classify:"已分类",
                        type:"单体药店",
                        longitudeLatitude:"88.88,99.99",
                        createTime:"1993-12-08 10:10:10",
                        updateTime:"1993-12-08 10:10:10",
                        dateSource:"企业查",
                        validateSource:"验证来源",
                        openStatus:"关门",
                        status:"已处理"
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