<template>
  <div class="J_nearby_shop">
    <div class="detail-info">
      <a href="javascript:;" class="hd">
        适用商户(186)
        <p class="arrow-ent right"></p>
      </a>
      <div class="shoplist cont">
        <div class="b-line">
          <div class="flex-box">
            <aside>
              <a
                href="/shop/110416322"
                onclick="_hip.push(['mv', {module: '5_deal_shop', action: 'click'}]);"
              >
                <h3 class="dianMing">{{ title[0] }}</h3>
                <p>
                  <span class="star-pic">
                    <i style="width:70%"></i>
                  </span>
                  <span class="f-r">&gt;100km</span>
                </p>
              </a>
            </aside>
            <a
              class="dis call-link l-line"
              onclick="LXAnalytics(&quot;moduleClick&quot;, &quot;b_f38f2ma7&quot;, { &quot;deal_id&quot;:27849345, &quot;poi_id&quot;:&quot;110416322&quot; }, {isLeave: 0});"
              href="tel:02081179552"
            >
              <i></i>
            </a>
          </div>
        </div>
        <div class="col-list">
          <div
            class="item"
            onclick="_hip.push(['mv', {module: '5_deal_allshop', action: 'click'}]);"
          >
            <div class="blo">
              <i class="icon-comm location"></i>
              {{ title[1] }}
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
  props:['title'],
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.detail-info {
  background: url('https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png')
    repeat-x 0 bottom;
  background-size: auto 10px;
  padding: 0;
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
  background-color: #fff;
}   
.detail-info .hd {
    background: url('https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png') repeat-x 0 bottom;
    background-size: auto 10px;
    height: 40px;
    line-height: 42px;
    margin-left: 15px;
    color: #999;
    font-weight: 400;
    font-size: 14px;
    display: block;
    position: relative;
}
.arrow-ent.right {
    -webkit-transform: rotate(-45deg);
}
.detail-info .hd .arrow-ent {
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -5px;
}
.arrow-ent {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-right: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    cursor: pointer;
}
.shoplist .flex-box {
    padding-left: 15px;
    display: -webkit-box;
}
.shoplist .flex-box aside {
    background: url('https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-right.png') repeat-y right;
    background-size: 1px auto;
    -webkit-box-flex: 1;
    margin: 15px 0;
}
a {
    color: #878787;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.shoplist .flex-box aside h3 {
    font-weight: 700;
    font-size: 18px;
}
.shoplist .flex-box aside p {
    font-size: 14px;
    margin-top: 15px;
    line-height: 14px;
}
.shoplist .star-pic {
    width: 86px;
    height: 16px;
    background: url('https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/detail-star0.png') no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 1px;
}
span {
    color: #666;
    font-size: 12px;
    line-height: 12px;
}
.shoplist .flex-box aside .f-r {
    margin-right: 10px;
    float: right;
    margin-top: 2px;
}
.shoplist .call-link {
    display: block;
    margin: 15px 0;
    padding: 0 22px;
    display: box;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -ms-box-align: center;
    box-align: center;
}
.shoplist .col-list {
    padding-left: 15px;
}
.shoplist .col-list .item {
    padding: 14px 0;
    line-height: 14px;
    font-size: 14px;
    color: #333;
    position: relative;
    display: box;
    display: -webkit-box;
    display: -ms-flexbox;
}
.shoplist .col-list .item .blo:last-of-type {
    -webkit-box-flex: 1;
    box-flex: 1;
    -ms-box-flex: 1;
    -ms-flex: 1;
    margin-right: 15px;
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
.shoplist .star-pic i {
    background: url('https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/detail-star.png') no-repeat;
    display: inline-block;
    height: 16px;
    overflow: hidden;
    background-size: auto 100%;
}
.blo,.dianMing{
  width: 95%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

</style>