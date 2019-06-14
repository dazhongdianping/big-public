<template>
    <div style="margin-top: 100px">
        <label>请设置你的密码</label><input type="text" ref="pass"><br>
        <input type="button" value="确认" @click="ToRegister">
    </div>
</template>

<script>
    export default {
        name: "Msg",
        mounted() {
            console.log(this.$route.params.phonenum)
        },
        methods:{
            ToRegister:function () {
                this.$store.commit('awsl', {
                    mapping: 'http://10.3.131.41:8083/public',
                    data: {code:2,phoneNum:this.$route.params.phonenum,pass:this.$refs.pass.value},
                    fn: (res) => {
                        var d = new Date();
                        d.setDate(d.getDate()+7);
                        document.cookie='Token='+res.data+ ';expires='+d.toUTCString()+';path=/';
                        this.$router.push('/PersonalMsg');
                    },
                    type: 'post'
                })
            }
        },
    }
</script>

<style scoped>

</style>