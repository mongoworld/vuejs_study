<template>
    <div>
        <input class="input" ref="ip" v-model.trim="inputValue" type="text" placeholder="입력 후 엔터!" v-on:keyup.enter="addList" />
        <span class="addbutton" v-on:click="addList" >추 가</span>
    </div>    
</template>

<script>
import eventBus from '../EventBus';
export default {
    data() {
        return {
            inputValue : ''
        }
    },
    methods: {
        addList(){
            eventBus.$emit("addList",this.inputValue);    
            this.inputValue = "";
            this.$refs.ip.focus();
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
    border: none; width: 75%; height:35px; padding: 10px;
    float: left; font-size: 16px;
}
.addbutton {
    padding: 10px; width: 15%; height:35px; background: #d9d9d9; 
    color: #555; float: left; text-align: center;
    font-size: 13px; cursor: pointer; transition: 0.3s;
}
.addbutton:hover { background-color: #bbb; }
</style>
