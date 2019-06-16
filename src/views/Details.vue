<template>
  <div id="details">
    <header style="z-index: 10">
      <span @click="ToHome"><i class="el-icon-arrow-left"></i>返回</span>
      <label>团购详情</label>
    </header>
    <mt-swipe :auto="4500">
      <mt-swipe-item v-for="(item,index) in goodsMsg.img" :key="index">
        <img :src="item" alt>
      </mt-swipe-item>
    </mt-swipe>
    <div class="cost-box">
      <div class="buy-box">
        <div class="price">¥</div>
        <div class="price sum">{{ goodsMsg.price }}</div>
        <div class="past Fix">
          <div class="t">
            <span class="o-price">¥{{ goodsMsg.newprice }}</span>
          </div>
        </div>
        <div class="last">
          <a class="buy-btn" @click="ToBuy">立即购买</a>
        </div>
      </div>
      <ul class="advantage">
        <li>
          <i></i>随时可退
        </li>
        <li>
          <i class="dated"></i>过期自动退
        </li>
      </ul>
    </div>
    <div class="detail-info group-detail change-detail"></div>
    <shops-msg :title="[goodsMsg.Title,goodsMsg.place]"/>
    <bulk-details/>
    <buy-know/>
    <a  class="buy-now">
      <span @click="ToBuy">立即购买</span>
    </a>
    <other-bulk/>
    <look-goods/>
    <footer class="footer">
      <a href="/tuan">首页</a>
      <em>|</em>
      <a >我的点评团</a>
      <em>|</em>
      <a href="http://www.dianping.com/events/m/index.htm">客户端</a>
      <em>|</em>
      <br>
      <a href="https://t.dianping.com">电脑版</a>
      <em>|</em>
      <a href="https://m.dianping.com">大众点评网</a>
      <em>|</em>
      <a href="https://m.dianping.com/feedback">意见反馈</a>
      <br>
      <p class="copyright">copyright 2014 dianping.com</p>
      <iframe id="J_shop_frameMobile" frameborder="0" src style="display:none"></iframe>
    </footer>
  </div>
</template>

<script>
import shopsMsg from "@/components/ShopsMsg";
import bulkDetails from "@/components/BulkDetails";
import buyKnow from "@/components/BuyKnow";
import otherBulk from "@/components/OtherBulk";
import lookGoods from "@/components/LookGoods";
import {mapMutations} from 'vuex';
export default {
  name: "",
  data() {
    return {
      goodsMsg: {}
    };
  },
  components: {
    shopsMsg,
    bulkDetails,
    buyKnow,
    otherBulk,
    lookGoods
  },
  created() {
    this.getDetails();
  },
  mounted(){
    this.ChangeState({name:'headState',value:0})
      window.scrollTo(0,0);
  },
  methods: {
    ...mapMutations(['ChangeState']),
    getDetails:function (){
      this.$axios({
        method: 'get',
        url:'https://www.easy-mock.com/mock/5cfdc08102fa400c0876ef52/jousen/GoodsMsg'
      }).then(res=>{
        let data = res.data.data;
        data.forEach(item => {
          if (Number(item.id) === Number(this.$route.params.id)) {
            this.goodsMsg = item;return
          }
        })
      })
  },
    ToBuy:function () {
       this.$router.push({name:'TakeOrder',params:{id:this.$route.params.id}})
    },
    ToHome:function () {
      this.$router.push('/')
    }
  },
  destroyed() {
    this.ChangeState({name:'headState',value:1})
  }
}

</script>

<style lang='scss' scoped>
  /*~~~~~~~~~~~~~~~~~~*/
  header{
    width: calc(100% - 20px);
    height:50px ;
    background:  #f0f0f0;;;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
  }
  header>span{
    color: #000000;
    max-width: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    font-size: 16px;
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
  /*~~~~~~~~~~~~~~~~~~*/
#details {
  background: #f0f0f0;
  width: 320px;
}
.mint-swipe {
  width: 100%;
  height: 200px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.cost-box {
  padding-left: 15px;
  background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png)
    repeat-x 0 bottom;
  background-size: auto 10px;
  background-color: #fff;
}
.cost-box .buy-box {
  display: -webkit-box;
  display: -moz-box;
  display: box;
  margin-top: 0;
  height: 50px;
  -webkit-box-pack: justify;
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;
  line-height: 50px;
}
.cost-box .buy-box .price {
  padding-right: 0;
  display: inline-block;
}
.buy-box .price {
  font-size: 21px;
  padding-right: 9px;
}
.price {
  color: #f63;
}
.cost-box .buy-box .sum {
  font-size: 30px;
  margin-right: 3px;
}
.cost-box .buy-box .past {
  -webkit-box-flex: 1;
  -webkit-box-align: end;
  display: -webkit-box;
  margin-bottom: 9px;
  line-height: 12px;
}
.cost-box .buy-box .past .t {
  margin-left: 10px;
  font-size: 14px;
  line-height: 12px;
}
.cost-box .buy-box .past .o-price {
  color: #8c8c8c;
  display: inline-block;
  margin-bottom: 5px;
}
.Fix:after {
  display: block;
  content: "\20";
  height: 0;
  clear: both;
}
.cost-box .buy-box .last {
  padding-top: 8px;
  margin-right: 10px;
}
.cost-box .buy-box .buy-btn {
  height: 34px;
  width: 105px;
  color: #fff;
  background-color: #f63;
  border-radius: 5px;
  text-align: center;
  line-height: 35px;
  display: block;
  font-size: 16px;
}
.cost-box .advantage {
  overflow: hidden;
  height: 45px;
  line-height: 45px;
  color: #666;
}
.cost-box .advantage li {
  float: left;
  width: 50%;
}
.cost-box .advantage i {
  background-image: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/comm.png");
  background-size: 25px auto;
  background-position: 0 -275px;
  display: inline-block;
  height: 18px;
  width: 18px;
  vertical-align: sub;
  margin-right: 5px;
}
.cost-box .advantage .dated {
  background-position: 0 -296px;
}
.cost-box .buy-box .past .o-price {
  color: #8c8c8c;
  display: inline-block;
  margin-bottom: 5px;
}
.o-price {
  text-decoration: line-through;
}
span {
  color: #666;
  font-size: 12px;
  line-height: 12px;
}
.detail-info {
  background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png)
    repeat-x 0 bottom;
  background-size: auto 10px;
  padding: 0;
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
  background-color: #fff;
}
.buy-now {
  display: block;
  height: 40px;
  margin: 10px 9px;
  color: #fff;
  background-color: #f63;
  border-radius: 4px;
  text-align: center;
}
.buy-now span {
  color: #fff;
  line-height: 40px;
  font-size: 18px;
}

a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
footer {
  text-align: center;
  padding: 10px 5px;
  font-weight: 400;
  font-size: 12px;
  padding-top: 15px;
}
footer em {
  color: #8c8c8c;
  padding: 0 12px;
  font-weight: 400;
  font-style: normal;
}
footer a {
  color: #adadad;
  line-height: 28px;
}
footer .copyright {
  color: #d1d1d1;
  margin-top: 20px;
  text-shadow: 0 1px 1px #fff;
}
</style>