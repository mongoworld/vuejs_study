<template>
  <div id="app">
    <div class="header" id="header">
      <h2>투두리스트 만들어보기</h2>
      <input-component />
    </div>
    <list-component />
  </div>
</template>

<script>
import InputComponent from './components/InputComponent'
import ListComponent from './components/ListComponent'
export default {
  name: 'app',
  components: {
    InputComponent,
    ListComponent
  }
}
</script>

<style>
.header {
  background-color: purple;
  padding : 30px 30px;
  color : yellow;
  text-align: center;
}

.header::after{
  content: "";
  display: table;
  clear: both;
}
</style>
