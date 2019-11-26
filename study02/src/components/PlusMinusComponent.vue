<template>
  <div>
    <input type="text" v-model="money" />
    <br />
    <input type="button" value="입금" v-on:click="plusBtn" />
    <input type="button" value="출금" v-on:click="minusBtn" />
    <br />
    잔고 : {{remain}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      money : 0,
      remain : 10000
    }
  },
  methods: {
    plusBtn(){
      if(Number(this.money) > 0) {
        this.remain = Number(this.remain) + Number(this.money)
      }
      else {
        alert("입금은 1원부터~!");
        return;
      }
    },
    minusBtn(){
      if(Number(this.money) > 0) {
        let total = Number(this.remain) - Number(this.money);
        if(total < 0) {
          alert("출금금액이 더 큽니다");
        }
        else {
          this.remain = Number(this.remain) - Number(this.money)
        }
      }
      else {
        alert("출금은 1원부터!");
        return;
      }
      
    }
  },
}
</script>