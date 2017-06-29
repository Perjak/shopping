<template>
  <div class="hello">
    <div class="header">
      <div class="w">
        <div class="logo fl">
          <a href="#"></a>
        </div>
      </div>
    </div>
    <div class="con w">
      <h4>创建账户</h4>
      <p>可以将任何电子邮件地址（包括来自Outlook.com、Yahoo!或者Gmail的地址）用作新的MIcrosoft账户的用户名。
        如果你已登录到Windows电脑、平板电脑或者手机、Xbox Live、Outlook.com或者OneDrive，请使用该账户<a href="#">登录</a>
      </p>
      <div>
        <label class="l1"><strong>姓</strong></label><label class="l1"><strong>名</strong></label>
        <form action="">
          <input type="text" class="inp1"><input type="text" class="inp1">
          <label class="l2" ><strong>用户名</strong></label>
          <input type="text" name="kk">
          <select name="kk" id="">
            <option value="@outlook.com">@outlook.com</option>
            <option value="@hotmail.com">@hotmail.com</option>
          </select>
          <label for="" class="l2"><strong>密码</strong></label>
          <input type="text">
          <label for="" class="l2"><strong>确认密码</strong></label>
          <input type="text">
          <label for="" class="l2"><strong>确认密码</strong></label>
          <input type="text">
          <label for="" class="l2"><strong>手机号码</strong></label>
          <input type="text">
          <label for="" class="l2"><strong>确认密码</strong></label>
          <input type="button" value="创建账户">
        </form>
      </div>
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
  .header{
    height: 0.8rem;
    padding-top: 0.21rem;
    box-sizing: border-box;
    border-bottom: 1px solid gainsboro;
  }
  .w{
    width: 5.99rem;
    margin: 0 auto;
  }
  .logo a{
    display: block;
    width: 1.7rem;
    height: 0.37rem;
    background: url(./images/logo.png) no-repeat ;
    background-size: 1.7rem  0.37rem;
    margin-right: 1.8rem;
  }
  .con{
    font-size: 0;
  }
  .con h4{
    font-size: 0.28rem;
  }
  .con p{
    font-size: 0.24rem;
  }
  .con label{
    font-size: 0.24rem;
  }
  .l1{
    display: inline-block;
    width: 2.5rem;
    padding: 0 0.1rem;
  }
  input{
    font-size: 0.24rem;
    border: 1px solid gainsboro;
    width: 3.85rem;
    height: 0.4rem;
    vertical-align: middle;
  }
  .inp1{
    width: 2.65rem;
    height: 0.4rem;
    margin-right:  0.1rem;
    border: 1px solid gainsboro;
  }
  .l2{
    display: block;
    padding: 0.1rem 0;
  }
  select{
    vertical-align: middle;
    border: 1px solid gainsboro;
    font-size: 0.24rem;
    width: 2rem;
    height: 0.42rem;
  }
</style>
