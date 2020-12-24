<template>
  <div class="main">
    <side-bar pos="2" class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title title="我的帐号"></content-title>
      <div class="selfpage">
        <div class="selfpage-info">
          <div class="selfpage-info-title">姓名</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="name"
              v-model="name"
              :disabled="disable"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">昵称</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="nickname"
              v-model="nickname"
              :disabled="disable"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">个人描述</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="description"
              v-model="description"
              :disabled="disable"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">手机号码</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="mobile"
              v-model="mobile"
              :disabled="disable"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">地址</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="address"
              v-model="address"
              :disabled="disable"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">学号</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="studentId"
              v-model="studentId"
              :disabled="disable"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <!-- <div class="selfpage-info-title">密码</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="password"
              v-model="password"
              :disabled="disable"
              class="selfpage-info-input-item"
              show-password
            >
            </el-input>
          </div> -->
          <!-- TODO:暂时先不修改密码 -->
          <div class="selfpage-info-iconwrapper">
            <el-button
              @click="changeInfo"
              v-if="!modify"
              type="primary"
              class="selfpage-info-icon"
              >修改信息</el-button
            >
            <el-button
              @click="updateInfo"
              v-if="modify"
              type="success"
              class="selfpage-info-icon"
              >更新信息</el-button
            >
            <el-button
              @click="abortChange"
              v-if="modify"
              type="info"
              class="selfpage-info-icon"
              >取消修改</el-button
            ><!-- TODO：暂时先不要点取消修改 -->
          </div>
        </div>
        <div class="selfpage-img">
          <div class="selfpage-info-title">用户头像</div>
          <div class="selfpage-img-wrapper">
            <img :src="imgUrlChecked" />
          </div>
          <div class="selfpage-delete-icon">
            <el-button
              @click="deleteAccount"
              type="danger"
              class="selfpage-info-icon"
              >删除帐号</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import UserInfo from "../components/UserInfo.vue";
import ContentTitle from "../components/ContentTitle.vue";
import defaultUserImg from "../assets/images/default_user.jpeg";
import axiosInstance from "../utils";

export default {
  name: "ItemPage",
  data() {
    return {
      disable: true,
      modify: false,
      name: "",
      nickname: "",
      description: "",
      mobile: "",
      address: "",
      studentId: "",
      /* password: "", */
      imgUrl: "",
      userId: null,
    };
  },
  computed: {
    imgUrlChecked() {
      return this.imgUrl == "" || this.imgUrl == null
        ? defaultUserImg
        : this.imgUrl;
    },
  },
  methods: {
    changeInfo() {
      this.modify = !this.modify;
      this.disable = !this.disable;
    },
    deleteAccount() {
      axiosInstance({
        method: "delete",
        url: "/user/user/" + this.userId,
      })
        .then((res) => {
          if (res.data.code == 200) {
            let mes = this.$message({
              type: "success",
              showClose: true,
              message: "删除帐号成功！",
              duration: 1500,
            });
            this.$router.push("/login");
          }
        })
        .then((error) => {
          console.log(error);
        });
    },
    updateInfo() {
      axiosInstance({
        method: "put",
        url: "/user/user/",
        data: {
          id: this.userId,
          name: this.name,
          nickname: this.nickname,
          description: this.description,
          mobile: this.mobile,
          address: this.address,
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            let mes = this.$message({
              type: "success",
              showClose: true,
              message: "修改信息成功",
              duration: 1500,
            });
            this.modify = !this.modify;
            this.disable = !this.disable;
          }
        })
        .then((error) => {
          console.log(error);
        });
    },
    abortChange() {
      this.userId = this.$store.state.userId;
      this.modify = !this.modify;
      this.disable = !this.disable;
      axiosInstance({
        method: "get",
        url: "/user/user/" + this.userId,
      })
        .then((res) => {
          if (res.data.code == 200) {
            let data = res.data.user;
            this.name = data.name;
            this.nickname = data.nickname;
            this.description = data.description;
            this.mobile = data.mobile;
            this.address = data.address;
            this.studentId = data.studentId;
            /* this.password = data.password; */
            this.imgUrl = data.headImgUrl;
          }
        })
        .then((error) => {
          console.log(error);
        });
    },
  },
  components: {
    SideBar,
    UserInfo,
    ContentTitle,
  },
  mounted() {
    this.userId = this.$store.state.userId;
    axiosInstance({
      method: "get",
      url: "/user/user/" + this.userId,
    })
      .then((res) => {
        if (res.data.code == 200) {
          let data = res.data.user;
          this.name = data.name;
          this.nickname = data.nickname;
          this.description = data.description;
          this.mobile = data.mobile;
          this.address = data.address;
          this.studentId = data.studentId;
          /* this.password = data.password; */
          this.imgUrl = data.headImgUrl;
        }
      })
      .then((error) => {
        console.log(error);
      });
  },
};
</script>
