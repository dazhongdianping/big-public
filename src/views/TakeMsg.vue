<template>
    <div style="margin-top: 100px">
        <label>请设置你的密码</label><input type="text" ref="pass"><br>
        <input type="button" value="确认" @click="ToRegister">
    </div>
</template>

<script>
    export default {
        name: "Msg",
        methods:{
            ToRegister:function () {
                this.$axios({
                    method:'post',
                    url:'http://127.0.0.1:8083/public',
                    data:{code:2,phoneNum:this.$route.params.phonenum,pass:this.$refs.pass.value},
                }).then(res=>{
                    console.log(res)
                    var d = new Date();
                    d.setDate(d.getDate()+7);
                    this.$Cookie.setCookie('Token',res.data,d,'/')
                    this.$router.push('/');
                })
            }
        },
    }
</script>

<style scoped>

</style>