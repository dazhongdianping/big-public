<template>
  <div>
    <div class="detail-info group-other group-last J_group-other">
      <h3 class="hd">尊宝比萨的其他团购</h3>
      <div class="con">
        <a href="/tuan/deal/38194159" class="group">
          <span class="price">￥</span>
          <span class="price big-price">102</span>
          <span class="o-price">￥169</span>
          <span class="tit">尊宝超值实惠A餐</span>
        </a>
        <a href="/tuan/deal/38194169" class="group">
          <span class="price">￥</span>
          <span class="price big-price">112</span>
          <span class="o-price">￥190</span>
          <span class="tit">尊宝超豪华A餐</span>
        </a>
        <a href="/tuan/deal/31114270" class="group">
          <span class="price">￥</span>
          <span class="price big-price">99</span>
          <span class="o-price">￥163</span>
          <span class="tit">三人套餐</span>
        </a>
        <a href="/tuan/deal/38194307" class="group Hide">
          <span class="price">￥</span>
          <span class="price big-price">32</span>
          <span class="o-price">￥64</span>
          <span class="tit">10寸比萨1选1</span>
        </a>
        <a href="/tuan/deal/27870909" class="group Hide">
          <span class="price">￥</span>
          <span class="price big-price">59</span>
          <span class="o-price">￥98</span>
          <span class="tit">苏丹王D24黄金果肉榴莲比萨1个</span>
        </a>
        <a href="/tuan/deal/38194196" class="group Hide">
          <span class="price">￥</span>
          <span class="price big-price">71</span>
          <span class="o-price">￥118</span>
          <span class="tit">尊宝精选A餐</span>
        </a>
        <a href="/tuan/deal/31114310" class="group Hide">
          <span class="price">￥</span>
          <span class="price big-price">68</span>
          <span class="o-price">￥112</span>
          <span class="tit">二人套餐</span>
        </a>
        <a href="/tuan/deal/31121810" class="group Hide">
          <span class="price">￥</span>
          <span class="price big-price">47</span>
          <span class="o-price">￥78</span>
          <span class="tit">单人套餐</span>
        </a>
        <a href="/tuan/deal/38194176" class="group Hide">
          <span class="price">￥</span>
          <span class="price big-price">90</span>
          <span class="o-price">￥148</span>
          <span class="tit">尊宝超值豪华B餐</span>
        </a>
        <a class="view-more J_view_group_more">
          还有6个团购
          <span class="arrow-ent bottom"></span>
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
.group-other.detail-info h3 {
  padding-left: 0;
  padding-right: 13px;
  white-space: nowrap;
  word-wrap: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 10px;
  font-size: 15px;
  color: #323232;
  position: relative;
}
.detail-info .hd {
  background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png)
    repeat-x 0 bottom;
  background-size: auto 10px;
  height: 40px;
  line-height: 42px;
  font-weight: 400;
  display: block;
}
.group-other .con {
  padding: 0 0 0 10px;
}
.detail-info .con {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;
  background-color: #fff;
}
.group-last .con .group {
  height: 44px;
  padding: 0;
  line-height: 44px;
}
.group-other .con .group {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;
  display: -webkit-box;
}
.Hide {
  display: none !important;
}
a {
  color: #878787;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.group-other .con a span {
  line-height: 25px;
}
.price {
  color: #f63;
}
span {
  color: #666;
  font-size: 12px;
  line-height: 12px;
}
.group-other .con a .big-price {
  margin-left: -5px;
  font-size: 18px;
  margin-right: 0;
}
.o-price {
  text-decoration: line-through;
}
.group-last .con .group .tit {
  margin-left: 5px;
  line-height: 44px;
}
.group-other .con .group .tit {
  font-size: 14px;
  color: #333;
  background: #fff;
  height: 30px;
  line-height: 30px;
  width: 190px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-left: 0;
  margin-bottom: 0;
}
.group-last .con .group .tit {
  margin-left: 5px;
  line-height: 44px;
}
.group-other .con .view-more {
  padding: 10px 0;
  text-align: center;
  display: block;
  color: #333;
  font-size: 14px;
}
.view-more {
  background-color: #fff;
}
.arrow-ent.bottom {
 
    position: relative;
    top: -2px;
}
.arrow-ent {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-right: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    cursor: pointer;
}
.group-other .con .view-more .arrow-ent {
    margin-left: 6px;
}
.group-other .con a span {
    line-height: 25px;
}
.view-more .arrow-ent {
 
    border-width: 1px;
}
.arrow-ent.bottom {
    -webkit-transform: rotate(-315deg);
    position: relative;
    top: -2px;
}
</style>