<template>
<div class="modal">
    <div class="form">
        <h3 class="heading">수정</h3>
        <div class="form-group">
            <label>일련번호</label>
            <input type="text" name="no" class="long" disabled  v-model="info.no" />
        </div>
        <div class="form-group">
            <label>이름</label>
            <input type="text" name="name" class="long"
                ref="name" placeholder="이름을 입력하세요" v-model="info.name" />
        </div>
        <div class="form-group">
            <label>전화번호</label>
            <input type="text" name="tel" class="long"
                placeholder="전화번호를 입력하세요" v-model="info.tel" />
        </div>
        <div class="form-group">
            <label>주 소</label>
            <input type="text" name="address" class="long"
                placeholder="주소를 입력하세요" v-model="info.address" />
        </div>
        <div class="form-group">
            <div>&nbsp;</div>
            <input type="button" class="btn btn-primary" value="수 정" v-on:click="updateBtn" />
            <input type="button" class="btn btn-primary" value="취 소" v-on:click="cancelBtn"  />
        </div>
    </div>
</div>
</template>

<script>
import eventBus from '../EventBus';
export default {
    props : ['info'],
    data() {
        return {
        }
    },
    methods: {
        updateBtn(){
            eventBus.$emit("update",this.info);
        },
        cancelBtn(){
            eventBus.$emit("cancel");
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal { display: block; position: fixed; z-index: 1; 
    left: 0; top: 0; width: 100%; height: 100%;
    overflow: auto; background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); }
.form { background-color: white; margin:100px auto;
    max-width: 400px; min-width: 200px; font: 13px "verdana";
    padding: 10px 10px 10px 10px;  }
.form div { padding: 0;  display: block;  margin: 10px 0 0 0; }
.form label{ text-align: left; margin:0 0 3px 0;  padding:0px;
    display:block; font-weight: bold; }
.form input, textarea, select { box-sizing: border-box;
    border:1px solid #BEBEBE; padding: 7px; margin:0px;
    outline: none;  }
.form .long { width: 100%; }
.form .button{ background: #2B798D; padding: 8px 15px 8px 15px;
    border: none; color: #fff; }
.form .button:hover { background: #4691A4; }
.form .heading { background: #33A17F; font-weight: 300;
    text-align: left; padding : 20px; color: #fff;
    margin:5px 0 30px 0; padding: 10px; min-width:200px;
    max-width:400px; }
</style>
