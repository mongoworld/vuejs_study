<template>
    <div style="border : 1px solid green;">
        <p v-for="(item, index) in src" 
            :key="index" 
            style="float:left;" 
            v-on:click="changeImg(item,index)" 
            v-on:mouseover="changeImg(item,index)">
            <img v-bind:src="item.url" style="width:100px;height:100px;" v-bind:class="{ on : index === selectedIndex}"/>
        </p>
        <div style="clear:both;">
            <img v-bind:src="mainImg" style="width:200px;" />
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
           selectedIndex : 0,
           mainImg : 'http://image2.megabox.co.kr/mop/poster/2019/37/FC0155-CBED-48D6-B4F8-0F686D79CE86.large.jpg',
           src : [{
               url : 'http://image2.megabox.co.kr/mop/poster/2019/37/FC0155-CBED-48D6-B4F8-0F686D79CE86.large.jpg',
            },{
               url : 'http://image2.megabox.co.kr/mop/poster/2019/9C/551031-55AA-44A4-A56B-DD5C99114721.large.jpg',
            },{
               url : 'http://image2.megabox.co.kr/mop/poster/2019/1D/A14577-C8BF-4416-9CD8-21433730A1EA.large.jpg',
            }] 
        }
    },
    methods: {
        changeImg(item,index){
            this.mainImg = item.url;
            this.selectedIndex = index;
        }
    },
}
</script>
<style>
    .on {
        border : 3px solid green;
    }
</style>