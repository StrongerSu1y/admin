<template>
  <div style="height:100%;">
    <Card>
      <div class="modify-title">•&nbsp;&nbsp;修改用户密码</div>
      <div class="modify-pwd">
        <div style="margin-left: 40px">
          <div class="pwd1">原&nbsp;&nbsp;密&nbsp;&nbsp;码：</div>
          <Input class="modify-input" v-model="oldPwd" placeholder="请输入原密码" clearable/>
        </div>
        <div style="margin-top: 50px; margin-left: 40px">
          <div class="pwd1">新&nbsp;&nbsp;密&nbsp;&nbsp;码：</div>
          <Input class="modify-input" v-model="newPwd" placeholder="请输入新密码" type="password"/>
        </div>
        <div style="margin-top: 100px; margin-left: 40px">
          <div class="pwd1">确认密码：</div>
          <Input class="modify-input" v-model="sureNewPwd" placeholder="确认新密码" type="password"/>
        </div>
        <div style="margin-top:180px; margin-left: 80px">
          <Button type="primary" @click="modifyPassword">修改密码</Button>
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
export default{
  name: 'modifyPwd',
  data () {
    return {
      oldPwd: '123456',
      newPwd: '12345678',
      sureNewPwd: '12345678'
    }
  },
  methods: {
    modifyPassword () {
      this.$Notice.success({
        title: '修改成功',
        desc: 'Here is the notification description. Here is the notification description. '
      })
    }
  }
}
</script>

<style>
  .modify-title {
    margin-left: 20px;
    font-size: 16px;
    color: #000000;
  }

  .modify-pwd {
    width: 520px;
    height: 300px;
    padding: 10px;
  }

  .modify-pwd input {
    width: 220px;
  }

  .pwd1 {
    position: absolute;
    float: left;
    text-align: center;
    line-height: 72px;
    font-size: 16px;
  }

  .modify-input {
    position: absolute;
    float: left;
    margin-left: 80px;
    font-size: 16px;
    margin-top: 20px;
  }

  .modify-pwd button {
    width: 200px;
    height: 40px;
    font-size: 14px;
  }
</style>
