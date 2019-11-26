<template>
  <div id="app">
    이벤트별 증가/감소 처리
    <plus-minus-component />
    키보드로 이동시키기
    <keyboard-move-component />
    Props 예제
    <props-component v-bind:childs="list_1" v-on:removeEvt="removeItem" />
    <child1-component />
    <child2-component />
  </div>
</template>

<script>
import PlusMinusComponent from './components/PlusMinusComponent'
import KeyboardMoveComponent from './components/KeyboardMoveComponent'
import PropsComponent from './components/PropsComponent'
import Child1Component from './components/Child1Component';
import Child2Component from './components/Child2Component';

export default {
  name: 'app',
  components: {
    PlusMinusComponent,
    KeyboardMoveComponent,
    PropsComponent,
    Child1Component,
    Child2Component
  },
  data() {
    return {
      list_1 : [{
        a : '1',
        b : '11',
        c : '111',
        d : '1111',
      },{
        a : '2',
        b : '22',
        c : '222',
        d : '2222',
      },{
        a : '3',
        b : '33',
        c : '333',
        d : '3333',
      }]
    }
  },
  methods: {
    removeItem(item){
      let i = this.list_1.indexOf(item);
      this.list_1.splice(i,1);
      console.log("A",this.list_1.length);
    }
  },
}
</script>

<style>
</style>
