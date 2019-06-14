<template>
    <div class="box">
        <header>
            <span @click="ToHome">首页</span>
            <div><span>订单</span><span>抵用券</span></div>
            <span @click="ToCancellation">注销</span>
        </header>
        <nav>
            <ul>
                <li @click="ToGetList($store.state.userName)">全部订单</li>
                <li @click="ShowUnpaid">待付款</li>
                <li>可使用</li>
                <li>退款/售后</li>
            </ul>
        </nav>
        <ul class="list">
            <li v-for="(item,index) in List" :key="index">
                <p>{{item.title}}</p>
                <div>
                    <img :src="item.src">
                    <section>
                        <p>{{item.mintitle}}</p>
                        <p>数量:{{item.num}} |{{item.date}}</p>
                    </section>
                </div>
                <p><span>团购 | {{'订单号：'+item.order}}</span><span>更多</span><span @click="ToPayOrToKnow(item)" :class="{'red':!Number(item.state)}">{{item.state|Astate}}</span></p>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "PersonalMsg",
        data:function () {
            return{
                List:[],
                user:''
            }
        },
        filters:{
            Astate:function(value) {
                if (value==1) return "已付款"
                return '未付款'
            },
            Tocolor:function (value) {
                if (value==1) return "red"
                return 'black'
            }
        },
        mounted() {
            this.$store.state.headState=0
        },
        created(){
            this.ToCheck();
        },
        methods:{
            ToHome:function () {
                this.$router.push('/')
            },
            //注销
            ToCancellation:function () {
                this.$cookie.removeCookie('Token','/')
                this.$store.state.isLogin=0,this.$store.state.userName=''
                this.$router.push('/Logins')
            },
            //Token检验
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
                            ?(console.log('检验成功'),this.$store.state.isLogin=1,this.$store.state.userName=res.data,this.ToGetList(res.data))
                            :(console.log('检验失败'))
                    },
                    type:'post'
                })
            },
            //获取订单列表
            ToGetList:function (user) {
                this.$store.commit('awsl',{
                    mapping: 'http://10.3.131.41:8083/public',
                    data:{
                        code:'5',user:user
                    },
                    fn:(res)=>{
                       // console.log('返回的值：'+res.data)
                        let data=JSON.parse(res.data)
                        this.userData=res.data;
                       // console.log( this.userData)
                        this.GetGoodsData(data);
                    },
                    type:'post'
                })
            },
            //获取商品数据
            GetGoodsData: function (data) {
                this.$store.commit('awsl', {
                    mapping: 'https://www.easy-mock.com/mock/5cfdc08102fa400c0876ef52/jousen/DZDPlist',
                    data: {},
                    fn: (res) => {
                        this.List=[];
                        console.log(  res.data.data)
                        data.forEach(function (item) {
                            res.data.data.forEach(function (em) {
                                if(em.id==item.id)
                                {
                                    this.List.push({
                                        title:em.title,
                                        src:em.url,
                                        mintitle:'',
                                        num:item.Quanlity,
                                        date:item.date,
                                        state:item.state,
                                        order:item.order,
                                        price:em.nowprice,
                                    })
                                  //  console.log(em);
                                    return
                                }
                            }.bind(this))
                        }.bind(this))
                      //  console.log(this.List)
                        // res.data.data.forEach(function (item) {
                        //     if(item.id==data[0].id)
                        //     {
                        //         console.log(item);return
                        //     }
                        // })
                    },
                    type: 'get'
                })
            },
            //显示未付款订单
            ShowUnpaid:function () {
                console.log(666)
                this.List=this.List.filter(function (item,index) {
                    console.log(index)
                      return item.state==0
                })
            },
            //未付款去支付，已付款去了解详情
            ToPayOrToKnow:function (item) {
              if(Number(item.state)===0)
              {
                  console.log('未付款',item)
                   this.$router.push({name:'pay',params:{OrderID:item.order,state:'1',title:item.title,price:item.price*Number(item.num)}})
              }else{
                  console.log('已付款')
              }
            }

        },
        destroyed() {
            this.$store.state.headState=1
        }
    }
</script>

<style scoped>
    .red{
        color: red !important;
    }
    .box {
        width: 100%;
    }

    header {
        height: 48px;
        display: flex;
        text-align: center;
    }

    header > span {

        flex: 1;
        font-size: 13px;
        line-height: 48px;
        color: #777;
    }

    header > div {
        display: inline-block;
        flex: 120px;
        line-height: 48px;
        font-size: 14px
    }

    header > div > span {
        width: 70px;
        display: inline;
        background-color: #f63;
        color: #fff;
        padding: 8px 20px;
        border-radius: 1px;
        border: 1px solid #f63;
    }

    header > div > span:nth-of-type(2) {
        background-color: #ffffff;
        color: #f63;
        box-sizing: border-box;
        padding: 8px 13px;
    }

    nav > ul {
        display: flex;
        height: 46px;
        line-height: 46px;
        font-size: 14px;
        text-align: center;
        color: black;
    }

    nav > ul > li {
        flex: 1;
        box-sizing: border-box;
    }

    nav > ul > li:nth-of-type(1) {
        border-bottom: 2px solid #f63;
    }

    .list {

    }

    .list > li {
        padding: 0 10px;
        border-bottom: 10px solid #efefef;
    }
    .list > li>p:nth-of-type(1)
    {
        color: #111;
        font-size: 15px;
        font-weight: bolder;
        height: 45px;
        line-height: 45px;
    }
    .list > li>div
    {
        height: 80px;
        display: flex;
    }
    .list > li>div>img{
        width: 80px;
    }
    .list > li>div>section{
        flex: 1;
        background: #f8f8f8;
        padding-left: 10px;
        padding-top: 10px;
    }
    .list > li>div>section>p{
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        color: #555;
    }
    .list > li>p:nth-of-type(2)
    {
        font-size: 13px;
        color: #777;
        display: flex;
        line-height: 28px;
        padding:7px 0
    }
    .list > li>p:nth-of-type(2)>span{

    }
    .list > li>p:nth-of-type(2)>span:nth-of-type(1)
    {
        width: 160px;
    }
    .list > li>p:nth-of-type(2)>span:nth-of-type(2){
        margin-right: 10px;
    }
    .list > li>p:nth-of-type(2)>span:nth-of-type(2),span:nth-of-type(3)
    {
        color: black;
        text-align: center;
        flex: 1;
        border: 1px solid #bbb;;
        font-size: 12px;
    }
</style>