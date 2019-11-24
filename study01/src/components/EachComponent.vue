<template>
    <div style="border : 1px solid blue;">
        <ul>
            <li v-for="(item, index) in list" :key="index">
                {{index}} : {{item.txt}} - {{formatDate(item,index)}}
            </li>
        </ul>
        <ul>
            <select>
                <option v-for="(item, index) in product" :key="index" v-bind:value="item.price">{{item.name}}</option>
            </select><br/>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list : [{
                txt : "이것은 내용입니다",
                regDt : new Date()
            },{
                txt : "저것은 내용입니다",
                regDt : new Date()
            },{
                txt : "요것은 내용입니다",
                regDt : new Date()
            }],
            product : [{
                price : 500,
                name : "사료"
            },{
                price : 2000,
                name : "가방"
            },{
                price : 5000,
                name : "신발"
            }]
        }
    },
    methods: {
        formatDate(item){
            let dt = item.regDt;
            let y = dt.getFullYear();
            let m = dt.getMonth()+1;
            let d = dt.getDate();
            let ymd = `${y}-${m}-${d}`;
            return ymd;
        },
    },
}
</script>