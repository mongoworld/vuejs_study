<template>
  <div id="app">
      <h2> 내용 바인딩 처리 시</h2>
      <p>콧수염표현식 : {{message}}</p>
      <p>v-text  : <span v-text="message"></span></p>
      <h2> HTML 태그 바인딩 처리 시</h2>
      <p>콧수염표현식 : {{tagMessage}}</p>
      <p>v-text : <span v-text="tagMessage"></span></p>
      <p>v-html : <span v-html="tagMessage"></span></p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      message : '이 내용이 화면에 출력됩니다.',
      tagMessage : `<span style="color:#0065ac;">이내용은 HTML이다</span>`
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
