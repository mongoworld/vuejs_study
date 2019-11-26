<template>
  <div>
    <table id="list">
        <thead>
            <tr>
                <th>번호</th>
                <th>이름</th>
                <th>전화번호</th>
                <th>주소</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="contact">
            <tr v-for="(item, index) in childs" :key="index">
                <td>{{item.a}}</td>
                <td>{{item.b}}</td>
                <td>{{item.c}}</td>
                <td>{{item.d}}</td>
                <td><input type="button" value="삭제" v-on:click="removeBtn(item)" /></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props : {
    childs : {
      type : Array
    }
  },
  methods: {
    removeBtn(item){
      // emit을 통하여 정의된 명칭이 부모컴포넌트에 정의된 자식컴포넌트의 v-on 메서드속성으로 적용되며,
      // v-on 속성의 value 값은 부모컴포넌트에서 동작 될 메서드를 값으로 정의한다
      this.$emit("removeEvt",item)
    }
  },
}
</script>
<style>
    #list { width : 400px; border : 1px solid black; border-collapse: collapse;}
    #list td, #list th { border : 1px solid black; text-align: center;}
    #list > thead > tr {color : yellow; background-color: purple;}
</style>
