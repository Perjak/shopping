<template>
  <div class="hello">
    <div class="header w">
      <b></b>
    </div>
    <div class="cont w">
      <h4>登录</h4>
      <p>使用你的Microsoft账户</p>
      <p><a href="#">这是什么</a></p>
      <form action="">
        <input type="text" placeholder="电子邮件、电话或者Skype">
        <input type="button" value="下一步">
      </form>
      <p>没有账户？<router-link to="/Zc">创建一个!</router-link></p>
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
  .w{
    width: 5.99rem;
    margin: 0 auto;
  }
  .header{
    padding: 0.2rem 0;
  }
  a{
    text-decoration: none;
  }

  b{
    margin: 0 auto;
    display: block;
    width: 4.75rem;
    height: 0.57rem;
    background: url(./images/pp.png) no-repeat;
    background-size: 4.75rem 0.57rem;
  }
  .cont{
    font-size: 0;
    text-align: center;
  }
  .cont h4{
    text-align: center;
    font-size: 0.28rem;
  }
  .cont p{
    font-size: 0.24rem;
  }
  input{
    font-size: 0.24rem;
    width: 5.2rem;
    height: 0.6rem;
    margin: 0.1rem 0 ;
  }
</style>
