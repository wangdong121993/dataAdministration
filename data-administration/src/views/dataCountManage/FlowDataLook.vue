/**
*Created For:流向数据查看
*Author:wangdong
*Date:2019/1/30
*/
<template>
    <div>
        <div class="search-top">
            <time-query style="margin: 0 10px;">
                <template slot="before">
                    <el-form-item style="width: 190px;">
                        <el-select placeholder="企业名称" v-model="search.classify" clearable>
                            <el-option v-for="item of search.classifyList" :key="item.status" :label="item.label" :value="item.status"></el-option>
                        </el-select>
                    </el-form-item>
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
                </template>
                <template slot="after">
                    <el-form-item style="width: 190px;">
                        <el-select placeholder="状态" v-model="search.status" clearable>
                            <el-option v-for="item of search.statusList" :key="item.status" :label="item.label" :value="item.status"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="width: 190px;">
                        <el-select placeholder="商业公司" v-model="search.businessCompany" clearable>
                            <el-option v-for="item of search.businessCompanyList" :key="item.sid" :label="item.name" :value="item.sid"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="width: 190px;">
                        <el-select placeholder="终端分类" v-model="search.terminal" clearable>
                            <el-option v-for="item of search.terminalList" :key="item.type" :label="item.label" :value="item.status"></el-option>
                        </el-select>
                    </el-form-item>
                </template>
            </time-query>
            <div class="search-top-button">
                <el-button type="primary">查询</el-button>
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
                <el-table-column label="流向ID" prop="id" width="120"></el-table-column>
                <el-table-column label="批次号" prop="batchNumber" width="120"></el-table-column>
                <el-table-column label="流向来源" prop="flowSource"></el-table-column>
                <el-table-column label="流向时间" prop="flowTime" width="140"></el-table-column>
                <el-table-column label="商业公司名" prop="businessCompany" width="120"></el-table-column>
                <el-table-column label="省市区" width="140">
                    <template slot-scope="scope">
                        <p class="">{{scope.row.area}}</p>
                    </template>
                </el-table-column>
                <el-table-column label="业务分类" prop="taskClassify" width="140"></el-table-column>
                <el-table-column label="数据类型" prop="dataType" width="80"></el-table-column>
                <el-table-column label="终端名" prop="terminalName" width="80"></el-table-column>
                <el-table-column label="商品名" prop="goodsName" width="80"></el-table-column>
                <el-table-column label="规格" prop="pkg" width="80"></el-table-column>
                <el-table-column label="销售金额" prop="salePrice" width="80"></el-table-column>
                <el-table-column label="数量" prop="number" width="80"></el-table-column>
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
    import timeQuery from "./../../components/TimeQuery"
    export default {
        name: "",
        data() {
            return {
                area:{
                    province:[],
                    city:[],
                    distinct:[]
                },
                search:{
                    company:"",
                    province:"",
                    city:"",
                    distinct:"",
                    status:1,
                    businessCompany:"",
                    terminal:1,
                    statusList:[
                        {
                            status: 1,
                            label:"已匹配"
                        },{
                            status: 0,
                            label:"未匹配"
                        }
                    ],
                    businessCompanyList:[
                        {
                            sid: 1,
                            name:"东东有限公司"
                        },{
                            sid: 2,
                            name:"东东有限公司"
                        },{
                            sid: 3,
                            name:"东东有限公司"
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
                startTime:"",
                endTime:"",
                searchAfter:{
                    company:"",
                    province:"",
                    city:"",
                    distinct:"",
                    startTime:"",
                    endTime:"",
                    status:1,
                    businessCompany:"",
                    terminal:1,
                },
                list:[
                    {
                        id:1,
                        batchNumber: 111111,
                        flowSource:'企业查',
                        flowTime:"2019-09-12 10:10:10",
                        businessCompany:"东东有限公司",
                        area:"天津市上方市朝阳区",
                        taskClassify:"重要业务",
                        dataType:"数字",
                        terminalName:"大终端",
                        goodsName:"大产品",
                        pkg:"大包的",
                        salePrice:90.00,
                        number:92929,
                        status:"未处理"
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