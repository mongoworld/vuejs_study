<template>
  <ul>
        <!-- <li>
            <span>xxxx</span>
            <span> (완료)</span>
            <span class="close">&#x00D7;</span>
        </li> -->
        <li v-bind:class="{checked : item.complete}" v-for="(item, index) in list" :key="index" v-on:click="completeBtn(index)">
            <span>{{item.todo}}</span>
            <span v-if="item.complete"> (완료)</span>
            <span class="close" v-on:click.stop="removeItem(index)">&#x00D7;</span>
        </li>
  </ul>
</template>

<script>
import eventBus from '../EventBus';
export default {
  data() {
    return {
      list : []
    }
  },
  methods: {
    addList(v){
      this.list.push({
        id : new Date().getTime(),
        todo : v,
        complete : false
      })
    },
    removeItem(index){
      this.list.splice(index,1)
    },
    completeBtn(index){
      this.list[index].complete = !this.list[index].complete;
    }
  },
  created() {
    // console.log(eventBus);
    eventBus.$on("addList",this.addList);
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {  margin: 0; padding: 0; }
ul li { 
    cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
    background: #eee; font-size: 14px;  transition: 0.2s;
    -webkit-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;  
}
ul li:hover {  background: #ddd;  }
ul li.checked {
    background: #BBB;  color: #fff; text-decoration: line-through;
}
ul li.checked::before {
    content: ''; position: absolute; border-color: #fff;
    border-style: solid; border-width: 0px 1px 1px 0px; 
    top: 10px; left: 16px;  transform: rotate(45deg);
    height: 8px; width: 8px;
}
.close {
    position: absolute; right: 0; top: 0;
    padding: 12px 16px 12px 16px
}
.close:hover {
    background-color: #f44336;  color: white;
}
</style>
