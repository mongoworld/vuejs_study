<template>
    <div style="border : 1px solid red;">
        체크박스 목록<br/>
        <input type="checkbox" v-model="selected" value="apple" />사과<br/>
        <input type="checkbox" v-model="selected" value="grape" />포도<br/>
        <input type="checkbox" v-model="selected" value="tangerine" />귤<br/>
        <input type="checkbox" v-model="selected" value="pear" />배<br/>
        <p>선택목록 : {{selected}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected : []
        }
    }
}
</script>