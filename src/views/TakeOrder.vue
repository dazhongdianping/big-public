<template>
    <div class="box">
        <header style="z-index: 10">
            <span @click="ToDetail"><i class="el-icon-arrow-left"></i>返回</span>
            <label>提交订单</label>
        </header>
        <p>{{goods.Title}}</p>
        <p><span>数量</span><el-input-number  size="mini" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></p>
        <p><span>小计</span><span>￥{{goods.price*num}}</span></p>
        <p><input type="text" placeholder="现金券/抵用券/优惠码"></p>
        <p><span>手机号码</span><span>13047071121</span></p>
        <p @click="Pay">提交订单</p>

<!--        <p>提交订单</p>-->
<!--        <p>{{goods.Title}}|{{goods.place}}</p>-->
<!--        <label>数量</label> <input type="text" style="border: 1px solid black"  v-model="num"><br>-->
<!--        <p>总价:{{goods.price*num}}</p>-->
<!--        <div @click="Pay">提交订单</div>-->
    </div>
<!--    <a href="javascript:history.back(-1)">返回</a>-->
</template>

<script>
    export default {
        name: "TakeOrder",
        data:function () {
            return{
                    goods:{},
                    num:1,
            }
        },
        mounted() {
            this.$store.state.headState=0
        },
        created(){
            this.ToCheck();
            this.GetGoodsById(this.$route.params.id)
        },
        methods:{
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
                            ?(console.log('检验成功'),this.$store.state.isLogin=1,this.$store.state.userName=res.data)
                            :(console.log('检验失败'))
                    },
                    type:'post'
                })
            },
            //获取准订单信息
            GetGoodsById:function (id) {
                this.$store.commit("awsl", {
                    mapping:
                        "https://www.easy-mock.com/mock/5cfdc08102fa400c0876ef52/jousen/GoodsMsg",
                    type: "get",
                    fn:(res)=> {
                        let data = res.data.data;
                        data.forEach(item => {
                            if (item.id == id) {
                                this.goods=item;return
                            }
                        })
                        console.log(this.goods)
                    }
                })
            },
            //生成订单，状态未付款
            Pay:function () {
                this.$store.commit('awsl',{
                    mapping: 'http://10.3.131.41:8083/public',
                    data:{
                        code:'6',id:this.$route.params.id,num:this.num,user:this.$store.state.userName
                    },
                    fn:(res)=>{
                        console.log('返回的值：'+res.data)
                        if(Number(res.data)===1){
                            console.log('操作成功')
                            this.$router.push({name:'pay',params:{state:'1',price:this.goods.price*this.num,title:this.goods.Title}})   //1代表付款状态
                        }else{
                            console.log("操作失败")
                        }

                    },
                    type:'post'
                })
            },
            ToDetail:function () {

            },
            handleChange:function(value) {
                // console.log(value);
            }
        },
        destroyed()
        {
            this.$store.state.headState=1
        }

    }
</script>

<style scoped>
    .box
    {
        width: 100%;
        height: 100%;
        background: #f1f1f1;
    }
    header{

        width: calc(100% - 20px);
        height:50px ;
        background: #ffffff;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
    }
    header>span{

        color: #b5b5b5;
        max-width: 60px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
    }
    header>label{
        color: #000000;
        display: inline-block;
        font-size: 16px;
        line-height: 50px;
        flex: 1;
        text-align: left;
        padding-left: 64px;
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
    .box>p:nth-of-type(1){
        height: 36px;
        background: #f1f1f1;
        padding: 10px 14px;
        font-size: 14px;
        color: #999;
        font-weight: 400;
        width: calc(100% - 28px);
    }
    .box>p:nth-of-type(2), .box>p:nth-of-type(3)
    {
        height: 21px;
        padding: 10px 14px;
        display: flex;
        border-bottom: 1px solid #e6e6e6;
        background: #fff;
        width: calc(100% - 28px);
    }
    .box>p:nth-of-type(2)>span{
        flex: 1;
        color: #999;
    }
    .el-input-number /deep/{
        flex: 1;
    }
    .box>p:nth-of-type(3){
        border-bottom: 14px #f1f1f1 solid;
        background: #fff;
        height: 21px;
        padding: 10px 14px;
        width: calc(100% - 28px);
    }
    .box>p:nth-of-type(3)>span{
        flex: 1;
    }
    .box>p:nth-of-type(3)>span:nth-of-type(1)
    {
        color: #999;
    }
    .box>p:nth-of-type(3)>span:nth-of-type(2)
    {
        text-align: right;
    }
    .box>p:nth-of-type(4)
    {
        background: #fff;
        height: 21px;
        padding: 10px 14px;
        border-bottom: 20px #f1f1f1 solid;
        width: calc(100% - 28px);
    }
    .box>p:nth-of-type(5)
    {
        background: #fff;
        height: 21px;
        padding: 10px 14px;
        display: flex;
        width: calc(100% - 28px);
    }
    .box>p:nth-of-type(5)>span{
        flex: 1;
    }
    .box>p:nth-of-type(5)>span:nth-of-type(2)
    {
        text-align: right;
    }
    .box>p:nth-of-type(6)
    {
        margin-top: 30px;
        font-family: inherit;
        text-align: center;
        box-sizing: border-box;
        border: 0;
        background-color: #f63;
        color: #fff;
        border-radius: 2px;
        font-size: 16px;
        padding: 10px;
    }
</style>