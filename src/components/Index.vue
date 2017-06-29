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
    <div class="mak w">
      <a href="#">微软官方商城</a>
      <b></b>
    </div>
    <div class="sale">
      <div class="sale-one w"></div>
      <div class="sale-two w"></div>
      <div class="sale-three w"></div>
    </div>
    <div class="sort w">
      <div>
        <a href="#">Office 365</a>
        <a href="#">Office 2016</a>
      </div>
      <div>
        <a href="#">Windows</a>
        <a href="#">Surface Book</a>
      </div>
      <div>
        <a href="#">Surface Pro4</a>
        <a href="#">电脑与平板</a>
      </div>
      <div>
        <a href="#">Xbox</a>
        <a href="#">游戏</a>
      </div>
      <div>
        <a href="#">教育</a>
        <a href="#">配件</a>
      </div>
    </div>
    <div class="hot w clearfloat">
      <div class="hot-w">
        <div class="hot-h1 fl">
          <a href="#">
            <img src="./images/p1.png" alt="">
            <span>Surface Book增强版正式发售，专为设计而生</span>
          </a>
        </div>
        <div class="hot-h1 fl">
          <a href="#">
            <img src="./images/p2.png" alt="">
            <span>Surface Book i5 128GB鼠标套餐，立省499元</span>
          </a>
        </div>
      </div>
      <div class="hot-w">
        <div class="hot-h1 fl">
          <a href="#">
            <img src="./images/p3.png" alt="">
            <span>电脑与平板全场满减，单笔最高减300元，精选机型</span>
          </a>
        </div>
        <div class="hot-h1 fl">
          <a href="#">
            <img src="./images/p3.png" alt="">
            <span>Surface以旧换新，最高额外补贴600元</span>
          </a>
        </div>
      </div>
      <div class="hot-w">
        <div class="hot-h1 fl">
          <a href="#">
            <img src="./images/p5.png" alt="">
            <span>教育优惠：Surface Book增强版师生专享9折</span>
          </a>
        </div>
        <div class="hot-h1 fl">
          <a href="#">
            <img src="./images/p6.png" alt="">
            <span>商务套餐为您增加澎湃动力</span>
          </a>
        </div>
      </div>
    </div>
    <div class="sea w">
      <div class="w">
        <span>促销信息抢先看，更可享专属优惠</span>
        <div class="sea-box">
          <form action="">
            <input type="text" class="ipt1" placeholder="请输入您的邮件地址"><input type="button" value="订阅" class="ipt2">
          </form>
        </div>
        <a href="#">隐私条款</a>
      </div>
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
  name: 'index',
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
    /*border: 1px hidden;*/
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
  .person b{
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
  .sale-one{
    width: 5.99rem;
    height: 3.2rem;
    background: url(./images/holens.png) no-repeat;
    background-size: 5.99rem 3.2rem;
  }
  .sale-two{
    width: 5.99rem;
    height: 1.66rem;
    background: url(./images/black.png) no-repeat;
    background-size: 5.99rem 1.66rem;
    margin: 0.05rem auto;
  }
  .sale-three{
    width: 5.99rem;
    height: 1.66rem;
    background: url(./images/sureface.png) no-repeat;
    background-size: 5.99rem 1.66rem;
  }
  .sort{
    font-size: 0;
    margin-top: 0.4rem;
  }
  .sort div{
    width: 5.99rem;
  }
  .sort a{
    display: inline-block;
    font-size: 0.20rem;
    width: 2.70rem;
    padding: 0.05rem 0.1rem;
  }
  .hot-w{
    width: 5.99rem;
  }
  .hot span{
    padding: 0.1rem 0;
    display: block;
    font-size: 0.2rem;
  }
  .hot a img{
    width: 2.88rem;
    height: 1.53rem;
  }
  .hot-h1{
    width: 2.88rem;
    padding: 0.1rem 0.05rem;

  }
  .sea{
    font-size: 0;
  }
  .sea span{
    text-align: left;
    font-size: 0.28rem;
  }
  .sea .ipt2{
    height: 0.5rem;
    width: 1.36rem;
    font-size: 0.2rem;
    background: #5b66f8;
    border: hidden;
    vertical-align: middle;
  }
  .sea .ipt1{
    width: 4.5rem;
    font-size: 0.2rem;
    height: 0.49rem;
    border: solid gainsboro;
    vertical-align: middle;
  }
  .sea a{
    font-size: 0.20rem;
    color: black;
  }
  .sea-box{
    margin: 0.1rem 0;
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
