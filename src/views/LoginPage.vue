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
          v-model="inputAccount"
        ></el-input>
        <el-input
          class="login-text-input"
          placeholder="密码"
          prefix-icon="el-icon-lock"
          v-model="inputPassword"
          show-password
        ></el-input>
        <div class="login-text-layout">
          <input type="checkbox" v-model="ifChecked" />
          <label>记住我</label>
        </div>
        <div class="login-text-layout login-text-button">
          <div>
            <el-button @click="register" type="danger" plain>注册</el-button>
          </div>
          <div>
            <el-button @click="login" type="danger">登入</el-button>
          </div>
        </div>

        <div class="login-text-layout login-split"></div>
        <div class="login-text-copyright">Copyright © 2020 BLKMKT</div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from "../utils";
import { setLocalStorage, setSessionStorage } from "../utils/LocalStorage";
export default {
  name: "loginPage",
  data() {
    return {
      ifChecked: false,
      inputAccount: "",
      inputPassword: "",
    };
  },
  methods: {
    register() {
      this.$router.push("/register");
    },
    login() {
      let studentId = this.inputAccount;
      let password = this.inputPassword;
      axiosInstance({
        method: "post",
        url: "/auth/login",
        data: {
          password,
          studentId,
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("setToken", res.data.token);
            this.$store.commit("setRefreshToken", res.data.refresh_token);
            this.$store.commit("setUserId", res.data.user.id);
            this.$store.commit("setPagePos", 1);
            if (this.ifChecked) {
              setLocalStorage(
                studentId,
                password,
                res.data.token,
                res.data.refresh_token
              );
            }
            setSessionStorage(studentId, password);

            let mes = this.$message({
              type: "success",
              showClose: true,
              message: "登陆成功！",
              duration: 1500,
            });

            axiosInstance.defaults.headers.common["Authorization"] =
              res.data.token;

            sessionStorage.setItem("login", "true");

            this.$router.push("/main");

            //处理登陆成功的情况
          } else if (res.data.code == 11000) {
            let mes = this.$message({
              type: "error",
              showClose: true,
              message: "帐号密码错误！",
              duration: 2000,
            });
            this.inputPassword = "";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("class", "html-background");
  },
  beforeUnmount() {
    document.querySelector("body").removeAttribute("class");
  },
  beforeMount() {
    let studentId = localStorage.getItem("studentId");
    let password = localStorage.getItem("password");
    if (studentId !== null && password !== null) {
      axiosInstance({
        method: "post",
        url: "/auth/login",
        data: {
          password,
          studentId,
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("setToken", res.data.token);
            this.$store.commit("setRefreshToken", res.data.refresh_token);
            this.$store.commit("setUserId", res.data.user.id);
            this.$store.commit("setPagePos", 1);
            setLocalStorage(
              studentId,
              password,
              res.data.token,
              res.data.refresh_token
            );
            setSessionStorage(studentId, password);
            let mes = this.$message({
              type: "success",
              showClose: true,
              message: "登陆成功！",
              duration: 1000,
            });

            axiosInstance.defaults.headers.common["Authorization"] =
              res.data.token;

            sessionStorage.setItem("login", "true");

            this.$router.push("/main");

            //处理登陆成功的情况
          } else if (res.data.code == 11000) {
            let mes = this.$message({
              type: "info",
              showClose: true,
              message: "登陆已失效，请重新登陆",
              duration: 1500,
            });
            this.inputAccount = "";
            this.inputPassword = "";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
</script>

<style>
</style>