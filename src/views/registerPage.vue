<template>
  <div>
    <div class="login-container">
      <div class="login-icon">
        <img class="login-icon-wrapper" src="~@/assets/images/icon.png" />
      </div>
      <div class="login-text">
        <div class="login-text-1">登入</div>
        <div class="login-text-2">
          Welcome back, please login to your account.
        </div>
        <el-input
          class="login-text-input"
          placeholder="帐号"
          prefix-icon="el-icon-user"
          v-model="input1"
        ></el-input>
        <el-input
          class="login-text-input"
          placeholder="密码"
          prefix-icon="el-icon-lock"
          v-model="input2"
          show-password
        ></el-input>
        <el-button type="danger" plain>注册</el-button>
        <el-button type="danger">登入</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {
      input1: "",
      input2: "",
    };
  },
  beforeCreate() {
    document.querySelector("html").setAttribute("class", "html-background");
  },
  beforeUnmount() {
    document.querySelector("html").removeAttribute("class");
  },
};
</script>

<style>
</style>