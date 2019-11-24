<template>
    <div style="border : 3px dotted #0065ac;">
      watch : 주로 긴처리 시간이 필요한 서버통신에 적합하다는 특징이 있다 <br/>
      x : <input type="text" v-model="x" /><br/>
      y : <input type="text" v-model="y"><br/>
      결과 : {{sum}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            x : 0,
            y : 0,
            sum : 0
        }
    },
    watch: {
        x(v){
            console.log("X",v);
            this.sum = Number(this.y) + Number(v);
        },
        y(v){
            console.log("Y",v);
            this.sum = Number(this.x) + Number(v);
        }
    },
}
</script>