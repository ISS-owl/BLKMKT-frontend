<template>
  <div class="root-center-wrapper">
    <div class="login-container">
      <div class="login-icon">
        <img class="login-icon-wrapper" src="~@/assets/images/icon.png" />
      </div>
      <div class="login-text">
        <div class="login-text-1 login-text-layout">登入</div>
        <div class="login-text-2 login-text-layout">
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
        <div class="login-text-layout login-text-button">
          <div>
            <el-button type="danger" plain>注册</el-button>
          </div>
          <div>
            <el-button type="danger">登入</el-button>
          </div>
        </div>

        <div class="login-text-layout login-split"></div>
        <div class="login-text-copyright">Copyright © 2020 BLKMKT</div>
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
    document.querySelector("body").setAttribute("class", "html-background");
  },
  beforeUnmount() {
    document.querySelector("body").removeAttribute("class");
  },
};
</script>

<style>
</style>