<template>
  <div id="container">
      <div class="page-header">
         <h1 class="text-center">게시판 api 연동 테스트</h1>
      </div>
      <board-list v-bind:list="list" />
      <component v-bind:is="currentView" v-bind:info="info"></component>
  </div>
</template>

<script>
import BoardList from './components/BoardList'
import CreateForm from './components/CreateForm'
import UpdateForm from './components/UpdateForm'
import UpdatePhoto from './components/UpdatePhoto'
import eventBus from './EventBus';
import CONF from './config';

export default {
  name: 'app',
  components: {
    BoardList,
    CreateForm,
    UpdateForm,
    UpdatePhoto
  },
  data() {
    return {
      currentView : null,
      info : { no:0, name:'', tel:'', address:'', photo:'' },
      list : {
          pageno:1, 
          pagesize: CONF.PAGESIZE, 
          totalcount:0, 
          contacts:[]
      }
    }
  },
  created(){
      eventBus.$on("addCreateForm", () => {
          this.currentView = 'create-form';
      });
      eventBus.$on("pageChanged",(page)=>{
          this.list.pageno = page;
          this.$axios.get(CONF.READ, {
              params : { 
                  pageno:this.list.pageno, 
                  pagesize:this.list.pagesize 
              } 
          })
          .then((response) => {
              this.list = response.data;
          })
          .catch(()=> {
              this.list.contacts = [];
          })
      });
      eventBus.$on("cancel",()=>{
        this.currentView = null;
      })
      eventBus.$on("insert",(data)=>{
        this.currentView = null;
        this.$axios.post(CONF.CREATE,  data)
          .then((response) => {
            if (response.data.status === "success") {
              this.list.pageno = 1;
              this.selectList();
            } else {
              console.log('연락처 추가 실패 : ' + response.data.message);
            }
          })
          .catch((ex)=> {
              console.log('addContact failed : ', ex);
          })
      })

      eventBus.$on("editForm",(item)=>{
          this.currentView = 'update-form';
          this.info = item;
      })

      eventBus.$on("update",(data)=>{
        this.currentView = null;
        this.$axios.put(`${CONF.UPDATE}/${data.no}`,  data)
          .then((response) => {
            if (response.data.status === "success") {
              this.selectList();
            } else {
              console.log('연락처 수정 실패 : ' + response.data.message);
            }
          })
          .catch((ex)=> {
              console.log('addContact failed : ', ex);
          })
      });

      eventBus.$on("editPhoto",(item)=>{
        this.currentView = 'update-photo';
        this.info = item;
      })

      eventBus.$on("updatePhoto",(info,file)=>{
          let data = new FormData();
          data.append('photo', file);
          this.currentView = null;
          this.$axios.post(`${CONF.UPDATE_PHOTO}/${info.no}/photo`, data)
          .then((response) => {
            if (response.data.status === "success") {
              this.selectList();
            } else {
              console.log('연락처 사진 변경 실패 : ' + response.data.message);
            }
          })
          .catch((ex) => {
              console.log('updatePhoto failed', ex);
          });
      })

      eventBus.$on("removeItem",(no)=>{
          this.$axios.delete(`${CONF.DELETE}/${no}`)
          .then((response) => {
            if (response.data.status === "success") {
              this.selectList();
            } else {
              console.log('연락처 삭제 실패 : ' + response.data.message);
            }
          })
          .catch((ex) => {
              console.log('delete failed', ex);
          })
      })

    },
    mounted() {
      this.selectList();
    },
    methods: {
      selectList(){
        this.$axios.get(CONF.READ, {
            params : { 
                pageno:this.list.pageno, 
                pagesize:this.list.pagesize 
            } 
        })
        .then((response) => {
            this.list = response.data;
        })
        .catch((ex)=> {
            console.log('fetchContacts failed', ex);
            this.list.contacts = [];
        })
      }
    },
}
</script>

<style scoped>
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
