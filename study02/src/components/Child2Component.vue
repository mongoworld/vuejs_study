<template>
  <div>
    <ul>
      <li v-for="(item, index) in timeList" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import eventBus from '../EventBus';
export default {
  data() {
    return {
      timeList : []
    }
  },
  created() {
    eventBus.$on("click1",this.child1Click);
  },
  methods: {
    child1Click(t){
      this.timeList.push(t);
    }
  },
}
</script>
<style>
  .a{
    width:100px;
    height:100px;
    position:relative;
    border:1px solid red;
    /* transition : left 1s; */
  }
</style>