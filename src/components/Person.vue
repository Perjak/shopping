<template>
  <div class="hello">
    <div class="header">
      <div class="w clearfloat">
        <div class="logo fl">
          <a href="#"></a>
        </div>
        <div class="search fl">
          <b></b>
        </div>
        <div class="shop fl">
          <b></b>
        </div>
        <div class="person fl">
         <router-link to="/Person"><b></b></router-link>
        </div>
      </div>

    </div>
    <div class="search-in w" >
      <form action="">
        <input type="search" placeholder="hhhh">
      </form>
    </div>
    <div class="mak w clearfloat">
      <a href="#">微软官方商城</a>
      <b></b>
    </div>
    <div class="des w">
      <h4>请登录您的账户</h4>
      <span>推荐您使用Microsoft账户登录：</span>
      <router-link to="/Dl"><button class="btn"><span>Microsoft</span>账户</button></router-link>
      <p>您的Office，Windows10，Hotmail，Onedrive，Windowpane，XboxLive或者Outlook.com等账户，均可作为MIcrosoft账户登录本
        商城。没有Microsoft账户？<router-link to="/Zc">立即注册</router-link></p>
    </div>
    <div class="hz w">
      <span>合作账户登录：</span>
      <a href="#"></a>
    </div>
    <div class="footer w">
      <div class="type clearfloat"><span>产品类别</span><b></b></div>
      <div class="type clearfloat"><span>账户信息</span><b></b></div>
      <div class="type clearfloat"><span>关于我们</span><b></b></div>
      <div class="type clearfloat"><span>支持与帮助</span><b></b></div>
      <div class="type clearfloat"><span>关注我们</span><b></b></div>
      <div class="type clearfloat"><span>热门资源</span><b></b></div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'person',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .w{
    width: 5.99rem;
    margin: 0 auto;
  }
  a{
    color: #1b6baf;
    text-decoration: none;
  }
  .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
   　  .clearfloat{zoom:1}

  .header{
    height: 0.8rem;
    padding-top: 0.21rem;
    box-sizing: border-box;
    border-bottom: 1px solid gainsboro;
  }
  .fl{
    float: left;
  }
  .logo a{
    display: block;
    width: 1.7rem;
    height: 0.37rem;
    background: url(./images/logo.png) no-repeat ;
    background-size: 1.7rem  0.37rem;
    margin-right: 1.8rem;
  }
  .search b{
    display: block;
    width: 0.36rem;
    height: 0.36rem;
    background: url(./images/search.png) no-repeat;
    background-size: 0.36rem  0.36rem;
    margin-right: 0.6rem ;
  }
  .shop b{
    display: block;
    width: 0.36rem;
    height: 0.32rem;
    background: url(./images/shop.png) no-repeat;
    background-size: 0.36rem 0.32rem;
    margin-right: 0.7rem;
  }
  .person a{
    display: block;
    width: 0.24rem;
    height:0.28rem ;
    background: url(./images/person.png) no-repeat;
    background-size: 0.24rem 0.28rem;
  }
  .show{
    display: block;
  }
  .search-in{
    font-size: 0;
    display: none;
  }
  .search-in input{
    width: 5.99rem ;
    height: 0.5rem;
    background: url(./images/search.png) no-repeat;
    background-size: 0.36rem  0.36rem;
    background-position: 5.5rem 0.05rem;
  }
  .mak{
    font-size: 0;
    border-bottom:solid gainsboro;
    height: 0.9rem;
    box-sizing: border-box;
    padding:0.1rem 0 ;
  }
  .mak a{
    display: inline-block;
    margin-top: 0.1rem;
    font-size: 0.30rem;
  }
  .mak b{
    float: right;
    margin-top: 0.11rem;
    width:0.35rem;
    height: 0.29rem;
    background: url(./images/hambegre.png) no-repeat;
    background-size: 0.35rem 0.29rem;
  }
  .des{
    font-size: 0;
    border-bottom:solid #d9d9d9 ;
    padding-bottom: 0.4rem;
  }
  .des h4{
    padding: 0.5rem 0;
    text-align: center;
    font-size: 0.4rem;
  }
  .des span{
    font-size: 0.28rem;
    padding: 0.1rem 0;
  }
  .des .btn span{
    font-size: 0.36rem;
  }
  .des .btn{
    width: 5.99rem;
    height: 0.77rem;
    font-size: 0.22rem;
    margin: 0.2rem 0;
  }
  .des p{
    font-size: 0.26rem;
  }
  .hz{
    font-size: 0;
    padding: 0.2rem 0 0.3rem 0;
  }
  .hz span{
    font-size: 0.28rem;
  }
  .hz a{
    margin-top: 0.2rem;
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    background: url(./images/zfb.png) no-repeat;
    background-size: 0.6rem 0.6rem;
  }
  .footer{
    margin-top: 0.4rem;
  }
  .type{
    height: 0.75rem;
    border-top: 1px solid silver;
    font-size: 0;
    /*vertical-align: middle;*/
    padding-top: 0.11rem;
    box-sizing: border-box;
  }
  .type span{
    display: inline-block;
    font-size: 0.24rem ;
    padding: 0.15rem 0;
  }
  .type b{
    float: right;
    width: 0.16rem;
    height: 0.08rem;
    background: url(./images/t1.png) no-repeat;
    background-size: 0.16rem 0.08rem;
    margin-top: 0.2rem;
  }
</style>
