<template>
    <div style="border : 3px dotted green;">
       computed : 미리 캐싱하여 사용됨
       <input type="number" v-model="no" /><br/>
       총합 : {{sum}}<br/>
       <input type="number" v-model="no1" /><br/>
       <input type="number" v-model="no2" /><br/>
       {{no1}} + {{no2}} = {{total}}<br/>
       필터링 예제<br/>
       <p>국가명 : <input type="text" v-bind:value="contryname" v-on:keyup="changeName" /></p>
       <table id="list">
           <thead>
               <tr>
                   <th>번호</th>
                   <th>국가명</th>
                   <th>수도</th>
                   <th>지역</th>
               </tr>
           </thead>
           <tbody id="contact">
               <tr v-for="(item, index) in filtered" :key="index">
                   <td>{{item.no}}</td>
                   <td>{{item.name}}</td>
                   <td>{{item.capital}}</td>
                   <td>{{item.region}}</td>
               </tr>
           </tbody>
       </table>
    </div>
</template>
<script>
export default {
    data(){
        return {
           no : 0,
           no1 : 0,
           no2 : 0,
           contryname : '',
           contries : [{
               no : 1,
               name : '미국',
               capital : '워싱턴DC',
               region : 'america'
           },{
               no : 2,
               name : '프랑스',
               capital : '파리',
               region : 'france'
           },{
               no : 3,
               name : '중국',
               capital : '베이징',
               region : 'asia'
           },{
               no : 4,
               name : '피지',
               capital : '수바',
               region : 'oceania'
           }]
        }
    },
    computed: {
        sum(){
            let n = this.no;
            console.log(Date.now())
            return ((1+n) * n) / 2;
        },
        total(){
            return Number(this.no1) + Number(this.no2);
        },
        filtered(){
            let cname = this.contryname.trim();
            return this.contries.filter(function(item){
                if(item.name.indexOf(cname) > -1){
                    return true;
                }
            });
        }
    },
    methods: {
        changeName(e){
            this.contryname = e.target.value;
        }
    },
}
</script>
<style>
    #list { width : 400px; border : 1px solid black; border-collapse: collapse;}
    #list td, #list th { border : 1px solid black; text-align: center;}
    #list > thead > tr {color : yellow; background-color: purple;}
</style>