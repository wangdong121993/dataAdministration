/**
* Created For: 公用带时间查询组件
* Author: chenLiYan.
* Date: 2017/12/23 11:11.
*/
<template>
    <el-form :inline="inline" :model="queryForm" :ref="formName" class="query-form">
        <slot name="before"></slot>
        <el-form-item :label="startLabel" :prop="startTimeName" :rules="startTimeRules">
            <el-date-picker
                    v-model="queryForm[startTimeName]"
                    :type="dateType"
                    :editable="false"
                    :style="styleText"
                    :picker-options="pickerOptionsStart"
                    @change="changeStartTime(queryForm[startTimeName])"
                    placeholder="开始时间">
            </el-date-picker>
        </el-form-item>
        <slot name="mid"></slot>
        <template v-if="!onlyOne">
            <el-form-item :label="endLabel" :prop="endTimeName" :rules="endTimeRules">
                <el-date-picker
                        v-model="queryForm[endTimeName]"
                        :type="dateType"
                        :editable="false"
                        :style="styleText"
                        :picker-options="pickerOptionsEnd"
                        @change="changeEndTime(queryForm[endTimeName])"
                        placeholder="结束时间">
                </el-date-picker>
            </el-form-item>
        </template>
        <slot name="after"></slot>
    </el-form>
</template>

<script>
    /* eslint-disable */
    export default {
        name: 'TimeQuery',
        props: {
            inline: {   // 是否行内展示
                type: Boolean,
                default: true
            },
            formObjName: {   // 父组件中startTime\endTime所属对象名称
                type: String,
                default: "queryForm"
            },
            queryForm: {    // 对应的整个搜索表单需要做验证的数据对象，如要校验email,那必须传包含email，且有this.startTimeName，this.endTimeName的对象
                type: Object,
                default: function () {
                    return {
                        [this.startTimeName]: "",
                        [this.endTimeName]: ""
                    }
                }
            },
            formName: {   // form表单名字
                type: String,
                default: "queryForm"
            },
            startTimeName: {
                type: String,
                default: "startTime"  // 父组件中对应startTime的字段名
            },
            endTimeName: {
                type: String,
                default: "endTime"  // 父组件中对应endTimer的字段名
            },
            startLabel: {
                type: String,
                default: ""  // 父组件中对应startTime的label名
            },
            endLabel: {
                type: String,
                default: "至"  // 父组件中对应endTimer的label名
            },
            onlyOne: {   // 是否只显示一个
                type: Boolean,
                default: false
            },
            limitNow: {   // 是否限制时间选择不能超过now
                type: Boolean,
                default: false
            },
            dateType: {   // 时间选择器的类型
                type: String,
                default: "datetime"   // 只支持 datetime 与 date
            },
            styleText: {   // 时间选择器的样式
                type: String,
                default: "width: 190px;"   // 默认设置为
            },
            timeValue:{
                type: Number,
                default: 0
            }
        },
        data() {
            let validateStartTime = (rule, value, callback) => {
                if (this.onlyOne) {
                    callback();
                } else {
                    if (!value && this.queryForm[this.endTimeName]) {
                        callback(new Error('请选择开始时间'));
                    } else if (value && this.queryForm[this.endTimeName]) {
                        this.$refs.queryForm.validateField(this.endTimeName);
                        callback();
                    } else {
                        callback();
                    }
                }
            };
            let validateEndTime = (rule, value, callback) => {
                if (!value && this.queryForm[this.startTimeName]) {
                    callback(new Error('请选择结束时间'));
                } else if (this.queryForm[this.startTimeName] && +new Date(value) < +new Date(this.queryForm[this.startTimeName])) {
                    callback(new Error('结束时间不能小于开始时间!'));
                } else {
                    callback();
                }
            };
            return {
                startTimeRules: [
                    {validator: validateStartTime, trigger: 'blur'}
                ],
                endTimeRules: [
                    {validator: validateEndTime, trigger: 'blur'}
                ],
                // 限制开始日期不能大于结束日期
                pickerOptionsStart: {
                    disabledDate: (time) => {
                        if(this.timeValue>0){
                            return (time.getTime() > new Date(this.queryForm[this.endTimeName]).getTime()||(time.getTime()<new Date(this.queryForm[this.endTimeName]).getTime()-this.timeValue))
                        }else if (this.queryForm[this.endTimeName]) {
                            return time.getTime() > new Date(this.queryForm[this.endTimeName]).getTime();
                        } else if (this.limitNow) {
                            return time.getTime() > new Date().getTime();
                        }
                    }
                },
                pickerOptionsEnd: {
                    disabledDate: (time) => {
                        let fix = 0;
                        if (this.dateType === 'datetime') {
                            fix = 8.64e7
                        }
                        if (this.limitNow) {
                            return time.getTime() + fix <= new Date(this.queryForm[this.startTimeName]).getTime() || time.getTime() > new Date();
                        }else if(this.timeValue>0){
                            return (time.getTime() + fix <= new Date(this.queryForm[this.startTimeName]).getTime())||(time.getTime() + fix > new Date(this.queryForm[this.startTimeName]).getTime()+this.timeValue);
                        } else {
                            return time.getTime() + fix <= new Date(this.queryForm[this.startTimeName]).getTime();
                        }
                    }
                }
            }
        },
        methods: {
            changeStartTime(val) { // 同步改变父组件中对应的 Start的值
                if (this.formObjName && this.$parent[this.formObjName]) {
                    this.$parent[this.formObjName][this.startTimeName] = val;
                } else {
                    this.$parent[this.startTimeName] = val;
                }
            },
            changeEndTime(val) { // 同步改变父组件中对应的 endTime的值
                if (this.formObjName && this.$parent[this.formObjName]) {
                    this.$parent[this.formObjName][this.endTimeName] = val;
                } else {
                    this.$parent[this.endTimeName] = val;
                }
            },
            triggerQuery() {
                // 表单验证
                this.$refs[this.formName].validate((valid) => {
                    if (valid) {
                        // 执行父组件的搜索事件
                        this.$emit('query');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style lang="less" scoped>

</style>
