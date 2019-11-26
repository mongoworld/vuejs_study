<template>
  <div>
    <p><input type="text" v-on:keydown="moveKeyboard"></p>
    <div v-bind:style="moveposition" class="a"></div>
    {{moveposition.left}} / {{moveposition.top}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveposition : {left :  0, top : 0},
    }
  },
  methods: {
    moveKeyboard(e){
      if(e.keyCode === 37) {
        this.moveposition.left = parseInt(this.moveposition.left) - 20 + "px";
      }
      else if(e.keyCode === 38) {
        this.moveposition.top = parseInt(this.moveposition.top) - 20 + "px";
      }
      else if(e.keyCode === 39) {
        this.moveposition.left = parseInt(this.moveposition.left) + 20 + "px";
      }
      else if(e.keyCode === 40) {
        this.moveposition.top = parseInt(this.moveposition.top) + 20 + "px";
      }
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