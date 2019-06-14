<template>
    <div  class="box">
        <header style="z-index: 10">
            <span @click="ToPerMsg"><i class="el-icon-arrow-left"></i></span>
            <label>支付订单</label>
        </header>
        <p>￥{{Price}}</p>
        <p>{{Title}}</p>
        <ul>
            <li>
                <span><img src="https://img.meituan.net/pay/weixin_g2.png"></img>微信支付</span><span><label @click="ToOr"></label></span>
            </li>
        </ul>
        <p @click="Time_Pay">支付</p>


<!--        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--            <p>价格</p>-->
<!--            <p>微信支付</p>-->
<!--            <div @click="Time_Pay">支付</div>-->
    </div>
</template>

<script>
    export default {
        name: "pay",
        data:function () {
            return{
                Time_Pay:'',
                Price:'',
                Title:''
            }
        },
        mounted() {
            this.$store.state.headState=0
        },
        methods:{
            ToOr:function(){
              event.currentTarget.style['border']='1px solid  #f63'
            },
            ToCheck:function()
            {
                var cookie=document.cookie?document.cookie.split('=')[1]:0
                console.log(document.cookie)
                this.$store.commit('awsl',{
                    mapping: 'http://10.3.131.41:8083/public',
                    data:{
                        code:'3',token:cookie
                    },
                    fn:(res)=>{
                        console.log('返回的值：'+res.data)
                        res.data!='false'
                            ?(console.log('检验成功'),this.$store.state.isLogin=1,this.$store.state.userName=res.data)
                            :(console.log('检验失败'))
                    },
                    type:'post'
                })
            },
            //直接支付
            ToPay:function () {
                this.$store.commit('awsl',{
                    mapping: 'http://10.3.131.41:8083/public',
                    data:{
                        code:'7',user:this.$store.state.userName
                    },
                    fn:(res)=>{
                        console.log('返回的值：'+res.data)
                        if(Number(res.data)===1)
                        {
                            this.$router.push('/PersonalMsg')
                        }
                    },
                    type:'post'
                })
            },
            //事后支付
            ToPay2:function () {
                this.$store.commit('awsl',{
                    mapping: 'http://10.3.131.41:8083/public',
                    data:{
                        code:'8',user:this.$store.state.userName,OrderID:this.$route.params.OrderID
                    },
                    fn:(res)=>{
                        console.log('返回的值：'+res.data)
                        if(Number(res.data)===1)
                        {
                            this.$router.push('/PersonalMsg')
                        }
                    },
                    type:'post'
                })
            },
            ToPerMsg:function () {
                this.$router.push('/PersonalMsg')
            }
        },
        created() {
            if(typeof this.$route.params.state == "undefined" || Number(this.$route.params.state) !== 1)
            {
                this.$router.push('/')
            }
            if(typeof this.$route.params.OrderID == "undefined")
            {
                console.log("直接支付")
                this.Time_Pay=this.ToPay;
                this.Price=this.$route.params.price;
                this.Title=this.$route.params.title;
            }
            else
            {
                console.log('事后支付')
                this.Time_Pay=this.ToPay2;
                this.Price=this.$route.params.price;
                this.Title=this.$route.params.title;
                console.log(this.$route.params.price,this.$route.params.title)
            }
            this.ToCheck()
        },
        destroyed() {
            this.$store.state.headState=1
        }
    }
</script>

<style scoped>
    .box{
        width: 100%;
        height: 100%;
        position:relative;
    }
    header{
        width: calc(100% - 20px);
        height:40px ;
        background: #ffffff;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        border-bottom: 1px #cccccc solid;
    }
    header>span{

        color: #b5b5b5;
        max-width: 60px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
        font-size: 14px;
        line-height: 40px;
    }
    header>label{
        color: #000000;
        display: inline-block;
        font-size: 16px;
        line-height: 40px;
        flex: 1;
        text-align: left;
        padding-left: 94px;
    }
    header>span>i{
        display: inline-block;
        font-size: 20px;
        padding-left: 4px;
    }
    header>i{
        line-height: 50px;
        vertical-align: top;
        display: inline-block;
        font-size: 20px;
        padding-left: 8px;
        color: white;
    }
    .box>p:nth-of-type(1)
    {
        font-family: MTfin, "DINAlternate-Bold", "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 30px;
        color: #333;
        letter-spacing: -0.44px;
        font-weight: bolder;
        text-align: center;
        padding-top: 40px;
    }
    .box>p:nth-of-type(2)
    {
        font-size: 10px;
        color: #999;
        letter-spacing: -0.24px;
        text-align: center;
    }
    .box>ul{
        margin-top: 30px;
    }
    .box>ul>li{
        height: 56px;
        border-bottom: 1px solid #efefef;
        display: flex;
        line-height: 56px;
        font-size: 14px;
        padding: 0 30px;
        width: calc(100% - 60px);
    }
    .box>ul>li>span{
        flex: 1;
    }
    .box>ul>li>span:nth-of-type(1)>img{
        width: 20px;
        margin-right: 10px;
    }
    .box>ul>li>span:nth-of-type(2)
    {
        text-align: right;
    }
    .box>ul>li>span>label
    {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #cccccc;
        text-align: right;
    }
    .box>p:nth-of-type(3)
    {
        position: fixed;
        text-align: center;
        background: #f63;
        color: white;
        padding: 8px;
        bottom: 14px;
        left: 0;
        width: 100%;
    }
</style>