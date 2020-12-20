<template>
  <div class="root-center-wrapper">
    <div class="register-container">
      <div class="login-icon">
        <img class="login-icon-wrapper" src="~@/assets/images/icon.png" />
      </div>
      <div class="register-text">
        <div class="register-text-1">注册</div>
        <div class="register-text-2">Welcome!Please register your account.</div>
        <div class="register-text-2">以下为必填信息</div>
        <el-input
          class="register-text-input"
          placeholder="学号"
          prefix-icon="el-icon-postcard"
          v-model="input1"
        ></el-input>
        <el-input
          class="register-text-input"
          placeholder="密码"
          prefix-icon="el-icon-unlock"
          v-model="input1"
        ></el-input>
        <el-input
          class="register-text-input"
          placeholder="姓名"
          prefix-icon="el-icon-user"
          v-model="input1"
        ></el-input>
        <el-input
          class="register-text-input"
          placeholder="昵称"
          prefix-icon="el-icon-chat-round"
          v-model="input1"
        ></el-input>
        <el-input
          class="register-text-input"
          placeholder="地址"
          prefix-icon="el-icon-house"
          v-model="input1"
        ></el-input>
        <div class="register-text-layout register-split"></div>
        <div class="register-text-2">以下为选填信息</div>
        <el-input
          class="register-text-input"
          placeholder="手机号"
          prefix-icon="el-icon-mobile-phone"
          v-model="input1"
        ></el-input>
        <div class="register-button">
          <div>
            <el-button type="danger" plain>登入</el-button>
          </div>
          <div>
            <el-button type="danger">注册</el-button>
          </div>
        </div>
        <div class="register-text-layout register-split"></div>
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