<template>
  <div id="app">
      <h2> {내용 바인딩 처리 시}</h2>
      <p>콧수염표현식 : {{message}}</p>
      <p>v-text  : <span v-text="message"></span></p>
      <h2> HTML 태그 바인딩 처리 시</h2>
      <p>콧수염표현식 : {{tagMessage}}</p>
      <p>v-text : <span v-text="tagMessage"></span></p>
      <p>v-html : <span v-html="tagMessage"></span></p>
      <p>조건문 : 단순 display : block,none 처리가 아닌 태그의 생성유무를 판단</p>
      <div>
        <input type="button" value="스위치" v-on:click="changeOnOff" />
        <p class="test1" v-if="onoff">SWITCH ON 태그</p>
        <p class="test2" v-else>SWITCH OFF 태그</p>
      </div>
      <div>
        <input type="button" value="디스플레이" v-on:click="changeShowHide" />
        <p v-show="showHide">Display : block</p>
      </div>
      <p>
        <input type="text" v-model="inputValue" /><br/>
        실시간 데이터감지 : {{inputValue}}
      </p>
      <item-component />
      <each-component />
      <bind-component />
      <compute-component />
      <watch-component />
      <axios-component />
      <life-cycle-component />
  </div>
</template>

<script>
import ItemComponent from './components/ItemComponent';
import EachComponent from './components/EachComponent';
import BindComponent from './components/BindComponent';
import ComputeComponent from './components/ComputeComponent';
import WatchComponent from './components/WatchComponent';
import AxiosComponent from './components/AxiosComponent';
import LifeCycleComponent from './components/LifeCycleComponent';
export default {
  name: 'app',
  components : {
    ItemComponent,
    EachComponent,
    BindComponent,
    ComputeComponent,
    WatchComponent,
    AxiosComponent,
    LifeCycleComponent
  },
  data(){
    return {
      message : '이 내용이 화면에 출력됩니다.',
      tagMessage : `<span style="color:#0065ac;">이내용은 HTML이다</span>`,
      onoff : false,
      showHide : true,
      inputValue : ''
    }
  },
  methods: {
    changeOnOff(){
      this.onoff = !this.onoff;
    },
    changeShowHide(){
      this.showHide = !this.showHide;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
