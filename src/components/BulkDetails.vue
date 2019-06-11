<template>
  <div class="bulkDetail">
    <div class="detail-info group-detail">
      <div class="con">
        <div class="info Fix">
          <div class="detail-box" style>
            <h3 class="tit">
              团购详情
              <i class="icon-comm detail"></i>
            </h3>
            <div class="detail-tit"></div>
            <table width="100%" cellpadding="0" cellspacing="0" class="detail-table">
              <thead>
                <tr>
                  <th width="50%">名称</th>
                  <th width="25%">数量</th>
                  <th width="25%">单价</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colspan="3">主食3 选 1 (不可重复选)</th>
                </tr>
                <tr>
                  <td>茄汁肉丸意大利面</td>
                  <td class="tc">1份</td>
                  <td class="tc">20 元</td>
                </tr>
                <tr>
                  <td>韩式鱿鱼大虾面</td>
                  <td class="tc">1份</td>
                  <td class="tc">19 元</td>
                </tr>
                <tr>
                  <td>黑椒牛柳焗意面</td>
                  <td class="tc">1份</td>
                  <td class="tc">19 元</td>
                </tr>
                <tr>
                  <th colspan="3">小食</th>
                </tr>
                <tr>
                  <td>奥尔良烤翅</td>
                  <td class="tc">1份</td>
                  <td class="tc">11 元</td>
                </tr>
                <tr>
                  <th colspan="3">饮品2 选 1 (不可重复选)</th>
                </tr>
                <tr>
                  <td>港式奶茶（热）</td>
                  <td class="tc">1杯</td>
                  <td class="tc">10 元</td>
                </tr>
                <tr>
                  <td>韩式柚子茶</td>
                  <td class="tc">1杯</td>
                  <td class="tc">10 元</td>
                </tr>
                <tr class="total">
                  <td></td>
                  <td class="tc">
                    最高价值
                    <br>
                    <strong>团购价</strong>
                  </td>
                  <td class="tc">
                    41元
                    <br>
                    <strong>26元</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <p>免费提供餐巾纸</p>
              <p>温馨提示：名门店暂不提供港式奶茶（热）和韩式柚子茶，饮品可选用可乐/橙汁1罐</p>
              <p>其余店铺饮品可更换为可乐/酷儿橙汁/果粒橙</p>
            </div>
          </div>
        </div>

        <a
          class="J_more-detail"
          data-id="27849345"
          title="更多图文详情"
          data-href="/tuan/deal/moreinfo/27849345"
        >
          <div class="all-shop">
            更多图文详情
            <span class="notice-text">（建议Wifi环境下打开,土豪请随意）</span>
            <i class="arrow-ent right"></i>
          </div>
        </a>
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
.detail-info {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;
  padding: 0;
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
  background-color: #fff;
}
.group-detail .con {
  color: #333;
  font-size: 14px;
}
.detail-info .con {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;
  background-color: #fff;
}
.group-detail .con .info {
  padding: 0 0 10px 0;
}
.detail-info .con .info {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;

  position: relative;
}
.group-detail .con .info > div {
  margin: 0 0 0 13px;
}
.group-detail .con .info h3 {
  margin-left: 0;
  margin-bottom: 0;
  margin-right: -19px;
}
.detail-info .con .tit {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;
  height: 40px;
  line-height: 42px;
  margin-left: 0;
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 14px;
}
.icon-comm {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/icon-comm.png")
    center 0 no-repeat;
  background-size: 14px auto;
  display: inline-block;
  width: 14px;
  position: relative;
  top: 2px;
  height: 14px;
}
.group-detail .con .detail-box > div {
  margin-top: 12px;
}
table.detail-table {
  border-spacing: 0;
  border-collapse: collapse;
  line-height: 22px;
  margin-bottom: 15px;
}
.group-detail .detail-table tr {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;
}
.group-detail .detail-table th:first-child {
  text-align: left;
}
table.detail-table th:first-child {
  width: 70%;
}
.group-detail .detail-table th {
  text-align: right;
  color: #999;
  font-weight: 400;
}
.group-detail .detail-table td,
.group-detail .detail-table th {
  padding: 10px 0;
}
table.detail-table thead th {
  display: none;
  height: 0;
  overflow: hidden;
  text-align: left;
  color: #999;
  background-image: url("../assets/images/xiazai.png");
  background-position: left bottom;
  background-repeat: repeat-x;
  background-size: 1px auto;
}
table th {
  font-size: 14px;
}
.group-detail .detail-table tr {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;
}
.group-detail .detail-table th:last-child {
  text-align: center;
}
.group-detail .detail-table tr.total {
  background-image: none;
}
.group-detail .con .detail-box > div {
  margin-top: 12px;
}
.group-detail .con p {
    line-height: 20px;
    font-size: 14px;
    margin: 7px 0;
}
.group-detail .con p {
  line-height: 20px;
  font-size: 14px;
  margin: 7px 0;
}
.Fix:after {
  display: block;
  content: "\20";
  height: 0;
  clear: both;
}
.notice-text {
  color: #999;
  padding-left: 5px;
  font-size: 10px;
}
span {
  line-height: 12px;
}
.group-detail .con .all-shop {
    padding: 0 10px 0 15px;
}
.detail-info .con .all-shop i {
  float: right;
  margin-top: 17px;
  margin-right: 5px;
}
.detail-info .con .all-shop {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
 
}
</style>