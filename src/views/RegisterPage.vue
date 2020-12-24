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
          v-model="inputStudentId"
        ></el-input>
        <el-input
          class="register-text-input"
          placeholder="密码"
          prefix-icon="el-icon-unlock"
          v-model="inputPassword"
          show-password
        ></el-input>
        <el-input
          class="register-text-input"
          placeholder="姓名"
          prefix-icon="el-icon-user"
          v-model="inputName"
        ></el-input>
        <el-input
          class="register-text-input"
          placeholder="昵称"
          prefix-icon="el-icon-chat-round"
          v-model="inputNickName"
        ></el-input>
        <el-input
          class="register-text-input"
          placeholder="地址"
          prefix-icon="el-icon-house"
          v-model="inputAddress"
        ></el-input>
        <div class="register-text-layout register-split"></div>
        <div class="register-text-2">以下为选填信息</div>
        <el-input
          class="register-text-input"
          placeholder="手机号"
          prefix-icon="el-icon-mobile-phone"
          v-model="inputPhoneNumber"
        ></el-input>
        <div class="register-button">
          <div>
            <el-button @click="login" type="danger" plain>登入</el-button>
          </div>
          <div>
            <el-button @click="register" type="danger">注册</el-button>
          </div>
        </div>
        <div class="register-text-layout register-split"></div>
        <div class="login-text-copyright">Copyright © 2020 BLKMKT</div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from "../utils";
export default {
  name: "loginPage",
  data() {
    return {
      inputStudentId: "",
      inputPassword: "",
      inputName: "",
      inputNickName: "",
      inputAddress: "",
      inputPhoneNumber: "",
    };
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("class", "html-background");
  },
  beforeUnmount() {
    document.querySelector("body").removeAttribute("class");
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    register() {
      if (
        this.inputStudentId.length == 0 ||
        this.inputPassword.length == 0 ||
        this.inputName.length == 0 ||
        this.inputNickName.length == 0 ||
        this.inputAddress == 0
      ) {
        let mes = this.$message({
          type: "error",
          showClose: true,
          message: "必填信息不能为空！",
          duration: 2000,
        });
      } else {
        axiosInstance({
          method: "post",
          url: "/auth/register",
          data: {
            studentId: this.inputStudentId,
            password: this.inputPassword,
            name: this.inputName,
            nickname: this.inputNickName,
            address: this.inputAddress,
          },
        })
          .then((res) => {
            if (res.data.code == 200) {
              let mes = this.$message({
                type: "success",
                showClose: true,
                message: "注册用户成功",
                duration: 1500,
              });
              this.$router.push("/login");
            } else {
              let mes = this.$message({
                type: "error",
                showClose: true,
                message: "注册用户失败",
                duration: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
</style>