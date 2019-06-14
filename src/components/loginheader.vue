<template>
    <header>
        <div class="top-bar">
            <div class="back">
                <a @click="$router.push('/')"></a>
            </div>
            <div class="title">{{title}}</div>
            <div class="register"></div>
        </div>
    </header>
</template>
<script>
    export default {
        data() {
            return {title:''}
        },
        mounted(){
            //    console.log(this);
            this.title = this.$parent.title;
        }
    }
</script>
<style scoped>
    header {
        width: calc(100% - 30px);
        text-align: center;
        background: #fcfcfc;
        border-bottom: 1px solid #f63;
        padding: 0 15px;
    }
    header .top-bar {
        -webkit-box-pack: justify;
        -webkit-box-align: center;
        line-height: 45px;
        width: 100%;
    }
    header .top-bar .back {
        display: block;
        -webkit-box-flex: 1;
        text-align: left;
        position: absolute;
    }
    header .top-bar .back a {
        display: block;
        width: 100%;
        height: 45px;
        position: relative;
    }
    header .top-bar .back a:before {
        border-top: 1px solid #f63;
        border-left: 1px solid #f63;
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        width: 12px;
        height: 12px;
        display: inline-block;
        content: "";
        position: absolute;
        top: 50%;
    }
    header .top-bar .title {
        font-size: 18px;
        -webkit-box-flex: 3;
        color: black;
        font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
    }
    header .top-bar .register {
        -webkit-box-flex: 1;
    }
</style>

