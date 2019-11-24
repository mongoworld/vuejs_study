<template>
    <div v-cloak style="border : 5px solid red;">
        <p>axios list 예제</p>
        <p><input type="text" v-model="name" /></p>
        <table id="list">
           <thead>
               <tr>
                   <th>번호</th>
                   <th>이름</th>
                   <th>전화번호</th>
                   <th>주소</th>
               </tr>
           </thead>
           <tbody id="contact">
               <tr v-for="(item, index) in contactList" :key="index">
                   <td>{{item.no}}</td>
                   <td>{{item.name}}</td>
                   <td>{{item.tel}}</td>
                   <td>{{item.address}}</td>
               </tr>
           </tbody>
       </table>
       <div v-show="isShow">로딩중...</div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            isShow : false,
            contactList : [],
            name : ''
        }
    },
    watch: {
        name(v){
            if(v.length >= 2) {
                // 함수실행
                if(!this.isShow){
                    this.isShow = true;
                    this.getList(v);
                }
            }
            else {
                this.contactList = [];
            }
        }
    },
    methods: {
        getList(v){
            axios.get(`http://sample.bmaster.kro.kr/contacts_long/search/${v}`)
            .then(response => {
                this.isShow = false;
                let d = response.data;
                this.contactList = d;
            })
            .catch(e => {
                console.log("error:",e);
            })
        }
    },
}
</script>
<style>
    #list { width : 400px; border : 1px solid black; border-collapse: collapse;}
    #list td, #list th { border : 1px solid black; text-align: center;}
    #list > thead > tr {color : yellow; background-color: purple;}
    [v-cloak] {
        display : none;
    }
</style>