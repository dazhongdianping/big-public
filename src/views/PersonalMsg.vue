<template>
    <div class="box">
        <header>
            <span @click="ToHome">首页</span>
            <div><span>订单</span><span>抵用券</span></div>
            <span @click="ToCancellation">注销</span>
        </header>
        <nav>
            <ul ref="nav">
                <li @click="ToGetList(userName)">全部订单</li>
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
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
    export default {
        name: "PersonalMsg",
        data:function () {
            return{
                List:[],
                user:''
            }
        },
        computed:{
          ...mapState(['userName'])
        },
        filters:{
            /**
             * @return {string}
             */
            Astate:function(value) {
                if (Number(value)===1) return "已付款"
                return '未付款'
            },
            /**
             * @return {string}
             */
            Tocolor:function (value) {
                if (Number(value)===1) return "red"
                return 'black'
            }
        },
        mounted() {
            this.ChangeState({name:'headState',value:0})
            this.ToChangeColor();
        },
        created(){
            this.ToGetList(this.userName)
        },
        methods:{
            ...mapMutations(['ChangeState']),
            ToHome:function () {
                this.$router.push('/')
            },
            //注销
            ToCancellation:function () {
                this.$cookie.removeCookie('Token','/')
                this.ChangeState({name:'isLogin',value:false})
                this.ChangeState({name:'userName',value:null})
                this.ChangeState({name:'token',value:null})
                this.$router.push('/Logins')
            },
            //获取订单列表
            ToGetList:function (user) {
                this.$axios({
                    method:'post',
                    url:'http://127.0.0.1:8083/public',
                    data:{code:'5',user:user}
                }).then(res=>{
                    let data=JSON.parse(res.data)
                    this.GetGoodsData(data);
                })
            },
            //获取商品数据
            GetGoodsData: function (data) {
                this.$axios({
                    method:'get',
                    url:'https://www.easy-mock.com/mock/5cfdc08102fa400c0876ef52/jousen/DZDPlist',
                }).then(res=>{
                    this.List=[];//清空列表
                    data.forEach(item=>{
                        res.data.data.forEach(em=>{
                                if(Number(em.id)===Number(item.id))
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
                                    }); return false
                                }
                        })
                    })
                })
            },
            //显示未付款订单
            ShowUnpaid:function () {
                this.List=this.List.filter(function (item) {
                      return Number(item.state)===0
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
            },
            ToChangeColor:function () {
                this.$refs.nav.onclick=function (e) {
                    Array.from(e.currentTarget.children).forEach(item=>{
                        if(e.target===item) {
                            item.style.borderBottom='2px solid #f63';
                            return;}
                        item.style.borderBottom='2px solid #fff'
                    })
                }
            }

        },
        destroyed() {
            this.ChangeState({name:'headState',value:1})
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