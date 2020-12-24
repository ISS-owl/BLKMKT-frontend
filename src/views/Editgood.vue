<template>
  <div class="main">
    <side-bar class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title></content-title>
      <div class="selfpage">
        <div class="selfpage-info">
          <div class="selfpage-info-title">价格</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="price"
              v-model="price"
              :disabled="disabled"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">种类</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="category"
              v-model="category"
              :disabled="disabled"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">上架数量</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="currentNum"
              v-model="currentNum"
              :disabled="disabled"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">商品标题</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="title"
              v-model="title"
              :disabled="disabled"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">商品子标题</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="subtitle"
              v-model="subtitle"
              :disabled="disabled"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">商品描述</div>
          <div class="selfpage-info-input">
            <el-input
              :placeholder="description"
              v-model="description"
              :disabled="disabled"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
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
            >
          </div>
        </div>
        <div class="selfpage-img">
          <div class="selfpage-info-title">商品图片</div>
          <div class="selfpage-img-wrapper">
            <img :src="itemUrlChecked" />
          </div>
          <div class="selfpage-delete-icon">
            <el-button
              @click="deleteItem"
              type="danger"
              class="selfpage-info-icon"
              >删除商品</el-button
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
import GoodItem from "../components/GoodItem.vue";
import axiosInstance from "../utils";
import defaultItemImg from "../assets/images/default_item.jpg";

export default {
  name: "mainPage",
  data() {
    return {
      disable: true,
      modify: false,
      price: "",
      category: "",
      currentNum: "",
      title: "",
      subtitle: "",
      description: "",
      imgUrl: "",
    };
  },
  computed: {
    itemUrlChecked() {
      return this.imgUrl == "" || this.imgUrl == null
        ? defaultItemImg
        : this.imgUrl;
    },
  },
  methods: {
    changeInfo() {
      this.modify = !this.modify;
      this.disable = !this.disable;
    },
    deleteItem() {
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
    GoodItem,
  },
};
</script>