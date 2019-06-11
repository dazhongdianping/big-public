<template>
  <div>
    <div class="detail-info buy-know">
      <div class="con">
        <div class="detail-box">
          <h3 class="tit">
            购买须知
            <i class="icon-comm buy"></i>
          </h3>
          <div class="detail-box">
            <div class="purchase-notes">
              <dl>
                <dt>有效期</dt>
                <dd>
                  <p class="listitem">2017-10-24至2019-06-23</p>
                </dd>
              </dl>
              <dl>
                <dt>除外日期</dt>
                <dd>
                  <p class="listitem">有效期内周末、法定节假日可用</p>
                </dd>
              </dl>
              <dl>
                <dt>使用时间</dt>
                <dd>
                  <p class="listitem">团购券使用时间：11:00-22:00</p>
                </dd>
              </dl>
              <dl>
                <dt>预约提醒</dt>
                <dd>
                  <p class="listitem">无需预约，消费高峰期可能需要等位</p>
                </dd>
              </dl>
              <dl>
                <dt>规则提醒</dt>
                <dd>
                  <p class="listitem">每张团购券建议1人使用</p>
                </dd>
              </dl>
              <dl>
                <dt>包间</dt>
                <dd>
                  <p class="listitem">店内无包间</p>
                </dd>
              </dl>
              <dl>
                <dt>堂食外带</dt>
                <dd>
                  <p class="listitem">堂食外带均可，可免费打包</p>
                </dd>
              </dl>
              <dl>
                <dt>温馨提示</dt>
                <dd>
                  <p class="listitem">本次团购不提供外卖</p>
                  <p class="listitem">佛山店面（黄岐店除外）提供免费wifi</p>
                  <p class="listitem">团购用户不可同时享受商家其他优惠</p>
                  <p class="listitem">酒水饮料等问题，请致电商家咨询，以商家反馈为准</p>
                  <p class="listitem">如部分菜品因时令或其他不可抗因素导致无法提供，商家会用等价菜品替换，具体事宜请与商家协商</p>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.buy-know {
    width: 100%;
    overflow: hidden;
    color: #333;
}
.detail-info {
    background: url('https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png') repeat-x 0 bottom;
    background-size: auto 10px;
    padding: 0;
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
    background-color: #fff;
}
.buy-know .con {
    padding: 0 0 12px 15px;
    font-size: 14px;
}
.detail-info .con .tit {
    background: url('https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png') repeat-x 0 bottom;
    background-size: auto 10px;
    height: 40px;
    line-height: 42px;
    margin-left: 0;
    font-weight: 400;
    margin-bottom: 10px;
    font-size: 14px;
}
.icon-comm.buy {
    background-position: 0 -19px;
    margin-left: 4px;
}
.icon-comm {
    background: url('https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/icon-comm.png') center 0 no-repeat;
    background-size: 14px auto;
    display: inline-block;
    width: 14px;
    position: relative;
    top: 2px;
    height: 14px;
}
.buy-know .con .purchase-notes {
    font-size: 14px;
    padding: 0;
}
.purchase-notes {
   color: #333;
}
.buy-know .con .purchase-notes dl {
    padding: 5px 0 5px 0;
    background: url('https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png') repeat-x 0 bottom;
    background-size: auto 10px;
}
.detail-box dl {
    margin-bottom: 5px;
}
.buy-know .con .purchase-notes dl dt {
    line-height: 28px;
    font-size: 13px;
    display: block;
    color: #999;
}
.buy-know .con .purchase-notes dl dd {
    line-height: 20px;
    width: 90%;
    color: #333;
}
.buy-know .con .purchase-notes dl dd p {
    padding-left: 0;
}
.buy-know .con .purchase-notes dl dd p {
    padding-left: 0;
}
.buy-know .con .listitem {
    margin: 7px 0;
}
.detail-info .con p {
    color: #666;
}
p.listitem:before {
    content: "• ";
    color: #999;
    position: absolute;
}  
p.listitem:before {
    left: 2px!important;
}
</style>