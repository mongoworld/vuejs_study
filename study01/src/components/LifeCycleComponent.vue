<template>
    <div style="border : 3px dotted #0065ac;">
       <p>
        라이프 사이클 테스트
      </p>
      <p><input type="text" v-model="x" /></p>
      <p>변경시키기 : {{x}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            x : 0,
        }
    },
    beforeCreate() {
        console.log("beforeCreated")
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    }
}
</script>