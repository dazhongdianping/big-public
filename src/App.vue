<template>
  <div id="app">
    <header style="z-index: 10">
      <span>位置<i class="el-icon-arrow-down"></i></span><input type="text" placeholder="输入商品名、地点"><i class="el-icon-user"></i>
    </header>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name:'app',
    data(){
      return{

      }
    },
    methods:{
    },
    mounted() {

    }
  }
</script>
<style lang="scss">
  html,body
  {
    width: 100%;
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100%;
}
</style>
<style scoped lang="css">
  header{
    position: fixed;
    width: 100%;
    height:50px ;
    background: #f63;;
    padding-left: 10px;
    padding-right: 10px;
  }
  header>span{
    color: #fff;
    max-width: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    font-size: 16px;
    line-height: 50px;
  }
  header>span>i{
    display: inline-block;
    padding-left: 4px;
  }
  header>input{
    margin-left: 10px;
    margin-top: 10px;
    height: 62%;
    line-height: 50px;
    vertical-align: top;
    width: 56%;
    font-size: 12px;
    background-color: #fff;
    padding: 0 0 0 30px;
    color: #b8b8b8;
    text-align: left;
    transition: left .2s,right .2s;
    border-radius: 25px;
  }
  header>i{
    line-height: 50px;
    vertical-align: top;
    display: inline-block;
    font-size: 20px;
    padding-left: 8px;
    color: white;
  }
</style>
