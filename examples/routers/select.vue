<template>
   <div>
       <h2 style="margin-top:20px">multiple + clearable</h2>
       <p style="margin: 10px 0">1. 多选也可一键清除</p>
        <Select
            multiple
            :max-tag-count="1"
            v-model="formValidate.ainterest"
            clearable
        >
            <Option value="Eat">Eat</Option>
            <Option value="Sleep">Sleep</Option>
            <Option value="Run">Run</Option>
            <Option value="Movie">Movie</Option>
        </Select>
        
       <h2 style="margin-top:20px">filterable clearable</h2>
       <p style="margin: 10px 0">2. 单选时不保留搜索结果，即每次重新弹出都是全部选项</p>
       <Select v-model='test' filterable clearable>
            <Option v-for='item in list' :value='item.value' :label="item.name" :key="item.value"></Option>
            <div slot="empty">2222</div>
        </Select>

        <h2 style="margin-top:20px">filterable clearable OptionGroup</h2>
        <Select v-model="model11" filterable clearable>
            <OptionGroup label="分组">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
        </Select>

        <h2 style="margin-top:20px">OptionGroup</h2>
        <Select v-model="model12">
            <OptionGroup label="分组">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
        </Select>
   </div>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    ainterest: [],
                    binterest: [],
                },
                ruleValidate: {
                    ainterest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    ],
                    binterest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    ],
                },
                test: '',
                list:[{
                    name: '测试测试2',
                    value:1
                },{
                    name: 'dddddd',
                    value:2
                },{
                    name:'测试测试',
                    value:8
                },{
                    name: '\"年龄\"123',
                    value:9
                }],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model11: '',
                model12: '',
                model1: ''
            };
        },
    };
</script>

