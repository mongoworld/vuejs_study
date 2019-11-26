<template>
  <div>
    <button v-on:click="clickEvent">자식1 버튼</button>
    <div>{{current}}</div>
  </div>
</template>

<script>
import eventBus from '../EventBus';
export default {
  data() {
    return {
      current : ''
    }
  },
  methods: {
    clickEvent(){
      let d = new Date();
      let t = d.toLocaleTimeString() + " " + d.getMilliseconds() + "ms";
      eventBus.$emit("click1",t);
      this.current = t;
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