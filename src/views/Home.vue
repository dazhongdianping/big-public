<template>
  <div class="home"></div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  mounted() {
    this.GetData();
  },
  methods:{
    GetData:function () {
      this.$store.commit('awsl', {
        mapping: 'https://www.easy-mock.com/mock/5cfdc08102fa400c0876ef52/jousen/CatEyes',
        data: {},
        fn: (res)=>{
          console.log(res.data.data)
        },
        type: 'get'
      })
    }
  }
}
</script>
<style  scoped>

</style>
