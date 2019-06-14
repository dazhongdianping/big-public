<template>
    <div class="home" >
        <header>
            <p><img :src="img" alt="">吃喝玩乐，找优惠</p>
            <p><span>打开大众点评</span><span>下载APP享特价</span></p>
        </header>
        <nav>
            <ul class="clearfix">
                <li v-for="(item,index) in nav" :key="index">
                    <ul>
                        <li v-for="(iem,indexs) in item" :key="indexs">
                            <img :src="iem.url">
                            <span>{{iem.title}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <section>
            <li v-for="(item,index) in section" :key="index">
                <div>
                    <span>{{item.maxT}}</span>
                    <span>{{item.minT}}</span>
                </div>
                <img :src="item.url">
            </li>
        </section>
        <section>
            <p><span>超值特惠</span><span>更多优惠<i class="el-icon-arrow-right"></i></span></p>
            <ul>
                <li v-for="(item,index) in section2" :key="index">
                    <img :src="item.url">
                    <span>{{item.title}}</span>
                    <span>￥{{item.nowPrice}}<span>￥{{item.oldPrice}}</span></span>
                </li>
            </ul>
        </section>
        <ul v-infinite-scroll="load"><!--v-infinite-scroll="load"-->
            <p>猜你喜欢</p>
            <li v-for="(item,index) in ListData" :key="index" :GoodsId="item.id" @click="ToDetail(item.id)">
                <img :src="item.url">
                <div>
                    <p>{{item.title}}</p>
                    <p>{{item.su}}</p>
                    <p><span>￥{{item.nowprice}}<span class="min_pri">￥{{item.oldprice}}</span></span> <span
                            class="min_pri">已售{{item.selled}}</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import infiniteScroll from 'vue-infinite-scroll'

    export default {
        name: 'home',
        data: function () {
            return {
                img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA2FBMVEUAAADtZDjsYzfuZTjrYzjqYzfqZDfrYzfmYzXvZDfgYEDpYzjpYzfrYzfoZTTrZDj////rYjXrYDPrXzHqXS///fz/+vnvZTj//v7sZjvvfVfuelTsaT7zZzr2taDwiGb+9/X+9PD96eP1rpftcEfsa0HudU774djzoYf85Nz0qpLxknP98e373tT608f97un5y7z3var2uaXxj3DxjGzvgV3tc0vsbkT2spz729H60MP4yLj0po396+b618vylXfvg2D85t/5zsD4xbX4wrHzm37znIDyl3lhDYlnAAAAD3RSTlMA4vry3oF7ZiQXBKysWFhhIPgVAAAEcUlEQVRYw62ZaXuiMBDH1R7bY7thEqBcBRW8td5ntdr7+3+jBbclsRAHt/5f+DyR+MtMZjLkGXNfuvzz+7RA/kuF099/LnO7ujjP35If6DZ/fiHyfuXvEB5KvMv/4ryzkzvyY92dnH3irs4KiHkZjSycXf3z90TOA6aqKqMZiSdbry/ycn9ZMFz6zTcLaDav8xehw+dSHlTdWls3tFJ5MTQhE/H8Kncpyxcw611D+VTxoQqZsucydyPl9TVFUGNDsxBvcteSR6ar7GplZSFe504lBrZ05ZseKsAfgwR4mpOcX6emfJfWgs9UomYwXi48RpIq5NJ5dK0rCd2bEY4G449BIxzWU7dAAlR7SlK6FfKmbqf0b+ia2YHAPRakvVEC1fjJq3MA0C6nAA0/BE6fv4a9SnYgtVZpQDcC9v4HCNVUC5shMFjwNMKBXKl7uIZwqc7XsO8cAGSvKcDiJNqM9tfQJ9mAoEL4MUrJw54ZPhjGw/cseQiU2vVtYXlOGuiF35svcVZ6DAGG0x1v9ljWm9Fg0/4OdKMZ1dLXsGwjFprW+0tZN6KpQUR8++b0YxDy6Ew4iLAXSCdP8dzZdu1maecgRwZRqxuHfKYiQaEvfLfWLLLR4/tYXlYiXuU+/qY7pgiQrblFT3ZEZNPhy0rTtOK8aQNERdzXeHWkBEsb8150cGsjmJWqZU0dApELZlMTQ44C6ajIiR2PfvuFGriGUL4JQYEEBgpXaTBl4jMYdhSusg1ZgNWGIqi2DCJQJOKMenyHebXGTgod7uSe1u7VPcu2x2u3sZuUzybgwEjgaskTlzzVNYuSjEBzpuBqcB5eHBzXwHi1jQo4kNvY1BHgS8uaEBWLMidCvawg0uf+KOBIrGIzu68pmLTOoJr5RU/N0RxHKk9+BRAgd9tpPXdRptFpASBAzqSW3+tgEdebDmBAjlTJqxQo1t3MwMqrruDqjGk2IDgPSiY1bJrNQjcRg/ZTrdZY6QmvJ5AlKL6xu/2L5WhcnQRV23t/be8SFxUcGFVvQcX+eAoqo5EYc+zlamc5l2JAOqmJp2KxAYCdPA0GYr1trxkGHBjCdN+E5IyWWN3nFdgLpBvB4ZXHgCTFJo9CvOr7gabwtuoOmWSbRWIjgD1AsEo8HB8gzVRb8Lq+D0h88colFwz5wnNzD9Ap86Sdwj5ik+fpCGRA8WWqtRjZI8rv9kZflQLZwEikg0RqP55am4IMCHPkDsgFm1KcrS0mAYIV+9G1gCBEnjq+KgGyVrxqBwgi2txGpPToe4HMZbUex6RPMSCM9W6n/zHZXvllwLhwGUsgmJy6Z6p83VSgG8fkAwgqTpMC+zs9AVwocHBkIHfZeDsOkN/1Z/RwYLLNwt7i6to7HFhINoKo142vQ87BwNNkqwqCuG6WvINNvE5ppqmLuMjV2YG825uUdh/1owgXuw91q3IoL3+Z0pAEr12+n41CGKCEZEMyrWXqvI9BlcCwlml6Uxfp4iJN3aO2nY/eGD9+6/74fy4c/e+PvwZCqu0yPm2TAAAAAElFTkSuQmCC',
                ListData: [],
                nav:[],
                section: [
                    {
                        maxT: '0元享霸王餐',
                        minT: '报名抽免单',
                        url: 'https://op.meituan.net/oppkit_pic/20160310031829-c118226a-1/819ef6bb014eb5efd5f1a4855431ddd8.jpg'
                    },
                    {
                        maxT: '必吃榜',
                        minT: '入围名单揭晓',
                        url: 'https://op.meituan.net/oppkit_pic/20160310031829-c118226a-1/b7bc04f1df1af0aba869aa9f5bde1b75.png'
                    }
                ],
                section2:[
                    {title:'肯德基',nowPrice:'5.4',oldPrice:'6',url:'https://p0.meituan.net/deal/1622253d14a4c4d8e839768e87b39a457091.jpg.webp@120w_90h_1e_1c_1l%7Cwatermark=1&&r=1&p=9&x=20&y=20'},
                    {title:'百果园',nowPrice:'6.9',oldPrice:'10.0',url:'https://p0.meituan.net/deal/c355cefa52a206133b474b524cd7df0f18936.jpg.webp@120w_90h_1e_1c_1l%7Cwatermark=1&&r=1&p=9&x=20&y=20'},
                    {title:'百果园',nowPrice:'8.9',oldPrice:'13.8',url:'https://p0.meituan.net/deal/5cebb9b7bdc04c6e29e7ddd61386204d18280.jpg.webp@120w_90h_1e_1c_1l%7Cwatermark=1&&r=1&p=9&x=20&y=20'}
                ],
            }
        },
        mounted() {
            this.GetData();
            this.GetData2();
            this.ToCheck();
        },
        methods: {
            load: function () {
                console.log(666)
                this.GetData();
            },
            GetData: function () {
                this.$store.commit('awsl', {
                    mapping: 'https://www.easy-mock.com/mock/5cfdc08102fa400c0876ef52/jousen/DZDPlist',
                    data: {},
                    fn: (res) => {
                        this.ListData = [...this.ListData, ...res.data.data]
                    },
                    type: 'get'
                })
            },
            GetData2:function () {
                this.$store.commit('awsl',{
                    mapping: 'https://www.easy-mock.com/mock/5cfdc08102fa400c0876ef52/jousen/CatEyesnav',
                    fn:(res)=>{
                        this.nav.push(res.data.data.slice(0,10))
                        this.nav.push(res.data.data.slice(10,20))
                    },
                    type:'get'
                })
            },
            ToDetail:function (id) {
                this.$router.push(`/details/${id}`)
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
        },
        directives: {infiniteScroll},

    }
</script>
<style scoped>
    .home {
        width: 100%;
        margin-top: 50px;
    }

    header {
        font-size: 12px;
        width: 100%;
        height: 120px;
        background-image: url('https://www.dpfile.com/app/app-m-module/static/666419d6641cf0faec444fc12b50383d.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    header > p:nth-of-type(1) {
        text-align: center;
        font-size: 20px;
        color: #111;
        font-weight: bolder;
        height: 70px;
        line-height: 70px;
    }

    header > p:nth-of-type(1) > img {
        width: 30px;
        margin-right: 6px;
    }

    header > p:nth-of-type(2) {
        text-align: center;
        height: 40px;
    }

    header > p:nth-of-type(2) > span {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        border: 1px solid #f63;
        font-size: 14px;
        padding-left: 18px;
        padding-right: 18px;
        margin-right: 10px;
    }

    header > p:nth-of-type(2) > span:nth-of-type(1) {
        color: #f63;
    }

    header > p:nth-of-type(2) > span:nth-of-type(2) {
        color: white;
        background: #f63;
    }

    nav {
        margin-top: 10px;
        overflow-x: scroll;
        overflow-y: hidden;
        height: 210px;
        border-bottom: 8px solid #dfdfdf;
        font-size: 12px;

    }

    nav > ul {
        width: calc(320 * 2px);
        height: 180px;
    }

    nav > ul > li {
        float: left;
        width: 320px;
        height: 100%;
    }

    nav > ul > li > ul {
        padding-left: 6px;
        padding-right: 6px;
    }

    nav > ul > li > ul > li {
        float: left;
        width: 60px;
        height: 86px;
        box-sizing: border-box;
        text-align: center;
    }

    nav > ul > li > ul > li > img {
        width: 44px;
        height: 44px;
        display: inline-block;
        margin-top: 6px;
    }

    nav > ul > li > ul > li > span {
        display: inline-block;
        margin-top: 8px;
        color: black;
    }

    section:nth-of-type(1) {
        height: 75px;
        border-bottom: 8px solid #dfdfdf;
        display: flex;
        font-size: 12px;
        padding-left: 6px;
        padding-right: 6px;
    }

    section:nth-of-type(1) > li {
        flex: 1;
        display: flex;

    }

    section:nth-of-type(1) > li > div {
        width: 88px;
        padding: 6px;
    }

    section:nth-of-type(1) > li > div > span:nth-of-type(1) {
        color: #6a9fd4;
        font-size: 15px;
        display: block;
    }

    section:nth-of-type(1) > li > div > span:nth-of-type(2) {
        color: #a9a9a9;
    }

    section:nth-of-type(1) > li > img {
        flex: 1;
        width: 50px;
        height: 50px;
        margin-top: 10px;
    }


    section:nth-of-type(2) {
        border-bottom: 8px solid #dfdfdf;
        padding-bottom: 10px;
        font-size: 12px;
    }

    section:nth-of-type(2) > p {
        height: 40px;
        position: relative;
    }

    section:nth-of-type(2) > p > span:nth-of-type(1) {
        position: absolute;
        color: #f63;
        font-size: 18px;
        font-weight: bolder;
        left: 6px;
        line-height: 40px;
    }

    section:nth-of-type(2) > p > span:nth-of-type(2) {
        position: absolute;
        right: 6px;
        line-height: 40px;
        color: #c9c9c9;
    }

    section:nth-of-type(2) > ul {
        height: 116px;
        display: flex;
    }

    section:nth-of-type(2) > ul > li {
        flex: 1;
        height: 100%;
        text-align: center;
    }

    section:nth-of-type(2) > ul > li > img {
        height: 70px;
    }

    section:nth-of-type(2) > ul > li > span:nth-of-type(1) {
        font-size: 14px;
        color: black;
        display: block;
    }

    section:nth-of-type(2) > ul > li > span:nth-of-type(2) {
        color: #ff6633;
        font-size: 20px;
    }

    section:nth-of-type(2) > ul > li > span:nth-of-type(2) > span {
        font-size: 10px;
        color: #afafaf;
    }

    .home > ul {
        padding-left: 10px;
    }

    .home > ul > p {
        height: 30px;
        font-size: 16px;
        color: #8b8b8b;
        line-height: 30px;
    }

    .home > ul > li {
        display: flex;
        margin-top: 10px;
    }

    .home > ul > li > img {
        width: 90px;
        height: 90px;
    }

    .home > ul > li > div {
        flex: 1;
        padding-left: 10px;
        padding-right: 10px;
    }

    .home > ul > li > div > p {
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 24px;
        line-height: 24px;
    }

    .home > ul > li > div > p:nth-of-type(1) {

        font-size: 17px;
        font-weight: 700;
        color: #111;
        padding-right: 8px;
    }

    .home > ul > li > div > p:nth-of-type(2) {
        font-size: 12px;
        max-width: 180px;
    }

    .home > ul > li > div > p:nth-of-type(3) {
        font-size: 20px;
        color: #ff6633;
        position: relative;
    }

    .home > ul > li > div > p:nth-of-type(3) > span:nth-of-type(1) {
        position: absolute;
        left: 0;
    }

    .home > ul > li > div > p:nth-of-type(3) > span:nth-of-type(2) {
        position: absolute;
        right: 0;
    }

    .home > ul > li > div > p:nth-of-type(3) .min_pri {
        font-size: 14px;
        color: #8b8b8b;
    }
</style>
