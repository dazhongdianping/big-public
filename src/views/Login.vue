<template>
  <div class="logins" style="width: 320px">
    <loginheader ></loginheader>
    <div id="login-form" class="form mt16">
      <div>
        <div class="EasyLogin_Mobile_Mobile">
          <div class="EasyLogin_row">
            <div class="EasyLogin_Mobile_tit EasyLogin_Mobile_Country">
              <span class="EasyLogin-country-code" data-code="86">86</span>
              <div class="EasyLogin_Mobile_Arrow"></div>
            </div>
            <input
              type="number"
              name="mobile"
              v-model="phonenum"
              placeholder="请输入手机号"
              @blur="phones"
            >
            <a class="J_send EasyLogin_send" href="javascript:;" @click="phoness" v-text="settimes"></a>
          </div>
          <div class="EasyLogin_row">
            <div class="EasyLogin_Mobile_tit">验证码</div>
            <input type="number" name="vcode" placeholder="请输入验证码" v-model="yanzhengma">
            <input type="hidden" value="1" name="channel">
            <input type="hidden" value="304" name="type">
          </div>
        </div>
      </div>
    </div>
    <div class="form-info">未注册的手机号码验证后自动创建点评账户</div>
    <div class="form-button">
      <a id="login-button" href="javascript:;" class="login" @click="loggo">登录</a>
      <div class="extra login-user">
        <a @click="gos">账号密码登录</a>
      </div>
    </div>
    <footer class="oauth-login">
      <div class="seperator">
        <div class="line"></div>
        <div class="text">第三方账号登录</div>
        <div class="line"></div>
      </div>
      <div class="icons">
        <a class="icon-qq" href="/auth?ft=6&amp;redir=https%3A%2F%2Fm.dianping.com%2Fnmy%2Fmyinfo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qq"></use>
          </svg>
        </a>
        <a
          class="icon-weibo"
          href="/auth?ft=2&amp;redir=https%3A%2F%2Fm.dianping.com%2Fnmy%2Fmyinfo"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xinlang"></use>
          </svg>
        </a>
      </div>
    </footer>
    <div class="agreement">
      登录即表示你同意大众点评
      <a href="//www.dianping.com/aboutus/useragreement">《用户使用协议》</a>
    </div>
    <div
      class="show-toast"
      style="z-index: 2147483647; padding: 12px; min-width: 200px; border-radius: 5px; line-height: 1.2; font-size: 12px; color: rgb(255, 255, 255); box-sizing: border-box; background-color: rgba(39, 39, 39, 0.7); position: fixed; left: 50%; transform: translate(-50%, -50%); text-align: center;  top: 50%; bottom: auto;"
      v-show="success"
    >{{successmsg}}</div>
  </div>
</template>
<script>
import fon from "../assets/lib/fonts/iconfont";
import "../assets/base.css";
import loginheader from "@/components/loginheader.vue";
export default {
  name: "login",
  data() {
    return {
      title: "手机号快捷登录",
      phonenum: "",
      phonesuccess: 0,//手机号正误指示
      success: 0,  //提示框是否显示
      settimes: "发送验证码",
      num: 61, //验证码倒计时
      numis: 1, //验证码开关
      successmsg: '请输入正确的手机号',
      yanzhengma:'',
    };
  },
  methods: {
    gos() {
      this.$router.push("/Logins");
    },
    // 验证手机号
    phones() {
      var reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if (reg.test(this.phonenum)) {
        // 发送ajax
        //发送get请求
            this.$http.get('https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817').then(function(res){
              console.log(res)
                // if(!res.body.data){
              // 没有手机号就写入
            // this.$http.get('https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123654').then(function(res){

            // },function(){
            //     console.log('请求失败处理');
            // });
                // }
            },function(){
                console.log('请求失败处理');
            });
              this.phonesuccess = 1;
      } else {
        this.phonesuccess = 0;
      }
    },
    //发送验证码
    phoness() {
      if (this.phonesuccess) {
        this.success = 0;
       var showtime = ()=> {
          this.num--;
          if (this.num <= 0) {
            clearInterval(timer, 1000);
            this.num = 61;
            this.numis = 1;
            this.settimes = '发送验证码'
          } else {
             this.settimes = '重新发送' + this.num;
          }
        };
        if (this.numis) {
              this.numis = 0;
        var timer = setInterval(showtime, 1000);
            }
      } else {
        this.success = 1;
        this.successmsg = '请输入正确的手机号';
      }
    },
    // 登录跳转
    loggo() {
      if(this.yanzhengma == '12345' && this.phonesuccess == 1){
          //  this.$router.push("");
      }
    }
  },
  updated() {
    if (this.success) {
      setTimeout(() => {
        this.success = 0;
      }, 2000);
    }
  },
  components: {
    loginheader
  }
};
</script>
<style scoped>
.logins {
  background-color: #f0f0f0;
  font-size: 10px;
}
.form {
  background: #fff;
  min-height: 90px;
}
.mt16 {
  margin-top: 16px;
}
.EasyLogin_Mobile_Mobile {
  padding-left: 15px;
  font-size: 14px;
  background-color: #fff;
}
.EasyLogin_Mobile_Account,
.EasyLogin_Mobile_Mobile,
.EasyLogin_row {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFW…5EbLiBAAAAGUlEQVR42mL6//8/AwizPHr06D8DEAAEGABriwmmt+2WgAAAAABJRU5ErkJggg==)
    0 bottom repeat-x;
  background-size: auto 1px;
}
.EasyLogin_row {
  padding-left: 75px;
  padding-right: 15px;
}
.EasyLogin_Mobile_Mobile .EasyLogin_row {
  padding-left: 75px;
}
.EasyLogin_row {
  height: 45px;
  display: box;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
}
.EasyLogin_Mobile_Mobile
  .EasyLogin_row
  .EasyLogin_Mobile_tit.EasyLogin_Mobile_Country {
  width: 60px;
  border-right: 1px solid #e0e0e0;
}
.EasyLogin_row .EasyLogin_Mobile_tit.EasyLogin_Mobile_Country {
  width: 60px;
  border-right: 1px solid #e0e0e0;
}
.EasyLogin_Mobile_Mobile .EasyLogin_row .EasyLogin_Mobile_tit {
  position: absolute;
  top: 50%;
  margin-top: -11px;
  left: 0;
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  color: #333;
}
.EasyLogin_row .EasyLogin_Mobile_tit {
  position: absolute;
  top: 50%;
  margin-top: -11px;
  left: 0;
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  color: #333;
}
.EasyLogin_Mobile_Mobile
  .EasyLogin_row
  .EasyLogin_Mobile_tit.EasyLogin_Mobile_Country
  .EasyLogin_Mobile_Arrow {
  width: 6px;
  height: 6px;
  display: inline-block;
  border-right: 2px solid #bab5ad;
  border-bottom: 2px solid #bab5ad;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin: 0 0 0 8px;
  position: relative;
  top: -3px;
}
.EasyLogin_row
  .EasyLogin_Mobile_tit.EasyLogin_Mobile_Country
  .EasyLogin_Mobile_Arrow {
  width: 6px;
  height: 6px;
  display: inline-block;
  border-right: 2px solid #bab5ad;
  border-bottom: 2px solid #bab5ad;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin: 0 0 0 8px;
  position: relative;
  top: -3px;
}
.EasyLogin_row input[type="number"],
.EasyLogin_row input[type="password"],
.EasyLogin_row input[type="text"] {
  -webkit-box-flex: 1;
  box-flex: 1;
  -ms-box-flex: 1;
  display: block;
  border: none;
  height: 24px;
  line-height: 24px;
  padding: 10px 0 10px 10px;
  font-size: 15px;
  outline: 0;
  color: #333;
  -webkit-appearance: none;
}
input,
textarea {
  resize: none;
}
a,
input,
textarea {
  -webkit-tap-highlight-color: transparent;
}
.EasyLogin_Mobile_Mobile .EasyLogin_send {
  background: #fff;
  border: 1px solid #bbb;
  font-size: 14px;
  color: #333;
  padding: 0 10px;
  margin: 9px 10px 10px 0;
  line-height: 25px;
  height: 25px;
  display: block;
  text-decoration: none;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
}
.form-info {
  margin-top: 5px;
}
.agreement,
.form-info {
  font-size: 12px;
  line-height: 12px;
  color: #999;
  text-align: center;
}
.form-button {
  margin-top: 12px;
  text-align: center;
  padding: 0 15px;
}
.form-button .login {
  line-height: 40px;
  color: #fff;
  background: #f63;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  letter-spacing: 6px;
  display: block;
}
.form-button .extra a,
.form-button .login,
header .top-bar .register a {
  text-decoration: none;
  font-size: 14px;
}
.form-button .login-user {
  text-align: right;
}
.form-button .extra {
  margin-top: 14.5px;
  display: block;
}
.form-button .extra a {
  color: #466889;
}
.oauth-login {
  height: 100px;
  width: 100%;
  text-align: center;
  margin-top: 75px;
}
.oauth-login .seperator {
  display: -webkit-box;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  padding: 0 15px;
}
.oauth-login .seperator .line {
  background: #d7d7d7;
  height: 1px;
  -webkit-box-flex: 1;
}
.oauth-login .seperator .text {
  color: #999;
  font-size: 15px;
}
.oauth-login .seperator .line {
  background: #d7d7d7;
  height: 1px;
  -webkit-box-flex: 1;
}
.oauth-login .icons {
  width: 148px;
  margin: 20px auto 0;
  display: -webkit-box;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  position: relative;
}
.agreement {
  position: fixed;
  top: 100%;
  height: 42px;
  margin-top: -42px;
  width: 100%;
}
.agreement,
.form-info {
  font-size: 12px;
  line-height: 12px;
  color: #999;
  text-align: center;
}
.agreement a {
  color: #466889;
}
a {
  text-decoration: none;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icons {
  font-size: 35px;
}
.icon-weibo {
  color: #f63;
  position: absolute;
  right: 0;
}

</style>
