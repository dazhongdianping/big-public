<template>
  <div>
    <div class="detail-info group-other J_group-other">
      <h3 class="hd">看了此团购的人也看了</h3>
      <div class="con">
        <a href="/tuan/deal/18837920" class="group">
          <div class="pic">
            <img
              src="https://p0.meituan.net/deal/ccca6917be717b0642664971d5a1ecf365285.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
            >
          </div>
          <div class="sidebar">
            <p class="tit">广州酒家</p>
            <p>
              <span class="price">￥</span>
              <span class="price big-price">95</span>
              <span class="o-price">￥100</span>
              <span></span>
            </p>
          </div>
        </a>
        <a href="/tuan/deal/13774199" class="group">
          <div class="pic">
            <img
              src="https://p0.meituan.net/deal/e879941080ca6638fea800cb2c6b76703347090.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
            >
          </div>
          <div class="sidebar">
            <p class="tit">原志居酒V+精细料理</p>
            <p>
              <span class="price">￥</span>
              <span class="price big-price">39</span>
              <span class="o-price">￥72</span>
              <span></span>
            </p>
          </div>
        </a>
        <a href="/tuan/deal/6433569" class="group">
          <div class="pic">
            <img
              src="https://p1.meituan.net/deal/12aced82211b5a40f6b37e85c6267de245127.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
            >
          </div>
          <div class="sidebar">
            <p class="tit">NEW YORK CITY纽约餐吧</p>
            <p>
              <span class="price">￥</span>
              <span class="price big-price">188</span>
              <span class="o-price">￥200</span>
              <span></span>
            </p>
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
.group-other .con {
  padding: 0 0 0 10px;
}
.detail-info .con {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;
  background-color: #fff;
}
.group-other .con .group {
  background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png")
    repeat-x 0 bottom;
  background-size: auto 10px;
  display: -webkit-box;
  padding-top: 10px;
}
a {
  color: #878787;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.group-other .con .group .pic {
  padding: 0 10px 10px 5px;
}
.group-other .con .group .pic img {
  width: 94px;
  height: 58px;
}
img {
  margin-bottom: 0 !important;
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
.group-other .con .group p {
  padding-left: 0;
}
.group-other .con a span {
  line-height: 25px;
}
.price {
  color: #f63;
}
span {
  font-size: 12px;
}
.group-other .con a span {
    line-height: 25px;
}
.group-other .con a .big-price {
    margin-left: -5px;
    font-size: 18px;
    margin-right: 0;
}
.group-other .con a span {
    line-height: 25px;
}
.o-price {
    text-decoration: line-through;
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
    background: url('https://www.dpfile.com/mod/app-m-tuangou/1.3.83/css/img/repeat-x.png') repeat-x 0 bottom;
    background-size: auto 10px;
    height: 40px;
    line-height: 42px;
    font-weight: 400;
    font-size: 14px;
    display: block;

}
</style>