<template>
  <div class="Logins" :style="{height: he}">
    <loginheader/>
    <div id="login-form" class="form mt16">
      <div>
        <div class="EasyLogin_Mobile_Account">
          <div class="EasyLogin_row">
            <div class="EasyLogin_Mobile_tit EasyLogin_Mobile_Country">
              <span class="EasyLogin-country-code" data-code="86">86</span>
              <div class="EasyLogin_Mobile_Arrow"></div>
            </div>
            <input type="number" data-name="username" placeholder="手机号" ref="user">
          </div>
          <div class="EasyLogin_row">
            <div class="EasyLogin_Mobile_tit">密码</div>
            <input type="password" data-name="password" placeholder="密码" ref="pass">
          </div>
        </div>
      </div>
    </div>
    <div class="form-button">
      <a id="login-button" href="javascript:;" class="login" @click="Login">登录</a>
      <div class="extra forgot-password">
        <a>忘记密码？</a>
      </div>
    </div>
    <LoginPop/>
  </div>
</template>
<script>
  import loginheader from "@/components/loginheader.vue";
  import LoginPop from "@/components/LoginPop.vue";
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  export default {
    name: "logins",
    data() {
      return {
        title: "账号密码登录",
        he:''
      };
    },
    created() {
      this.he = document.body.offsetHeight + 'px'
    },
    methods: {
      ...mapMutations(['ChangeState']),
      Login:function(){
        this.$axios({
          method: 'post',
          url: 'http://127.0.0.1:8083/public',
          data:{
            code:'4',user:this.$refs.user.value,pass:this.$refs.pass.value
          }
        }).then(res=>{
           if(Number(res.data)!==0)
           {
             let re=JSON.parse(res.data)
             var timer = new Date();
             timer.setDate(timer.getDate()+7);
             this.$Cookie.setCookie('Token',re.token,timer,'/')
             this.$router.push('/PersonalMsg')
           }
           else{
             console.log('用户密码错误')
             window.alert('用户密码错误')
           }
        })
      },
    },
    components: {loginheader, LoginPop}
  };
</script>
<style scoped>
  .Logins{
    width: 100%;
    position: absolute;
    z-index: 11;
    background-color: #F0F0F0;
  }
  .form {
    background: #fff;
    min-height: 90px;
  }
  .mt16 {
    padding-top: 16px;
  }
  .EasyLogin_Mobile_Account {
    padding-left: 15px;
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
  .EasyLogin_Mobile_Account,
  .EasyLogin_Mobile_Mobile,
  .EasyLogin_row {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFW…5EbLiBAAAAGUlEQVR42mL6//8/AwizPHr06D8DEAAEGABriwmmt+2WgAAAAABJRU5ErkJggg==)
    0 bottom repeat-x;
    background-size: auto 1px;
  }
  .EasyLogin_row {
    height: 45px;
    display: box;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative;
  }
  .EasyLogin_row .EasyLogin_Mobile_tit.EasyLogin_Mobile_Country {
    width: 60px;
    border-right: 1px solid #e0e0e0;
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
  .EasyLogin_Mobile_Account .EasyLogin_row input[type="password"],
  .EasyLogin_Mobile_Account .EasyLogin_row input[type="text"] {
    padding-left: 0;
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
  .form-button .extra a, .form-button .login, header .top-bar .register a {
    text-decoration: none;
    font-size: 14px;
  }
  .form-button .forgot-password {
    text-align: left;
  }
  .form-button .extra {
    margin-top: 14.5px;
    display: block;
  }
  .form-button .extra a {
    color: #466889;
  }
  .form-button .extra a, .form-button .login, header .top-bar .register a {
    text-decoration: none;
    font-size: 14px;
  }
</style>
