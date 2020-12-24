<template>
  <div class="userinfo">
    <div class="userinfo-icon">
      <el-popover placement="bottom" :width="100" trigger="hover">
        <template #reference>
          <i class="el-icon-user"></i>
        </template>
        <div @click="toSelf" class="userinfo-hover-text">个人信息</div>
      </el-popover>
    </div>
    <div class="userinfo-icon">
      <el-popover placement="bottom" :width="100" trigger="hover">
        <template #reference>
          <el-badge :value="itemCount" class="item" type="danger">
            <i class="el-icon-shopping-cart-2"></i>
          </el-badge>
        </template>
        <div @click="toCart" class="userinfo-hover-text">我的购物车</div>
      </el-popover>
    </div>
    <div class="userinfo-icon">
      <el-popover placement="bottom" :width="100" trigger="hover">
        <template #reference>
          <i class="el-icon-plus"></i>
        </template>
        <div @click="toCreate" class="userinfo-hover-text">上架商品</div>
      </el-popover>
    </div>
    <div class="userinfo-rightpart">
      <div class="userinfo-infomation">
        <p>{{ name }}</p>
        <p>{{ studentId }}</p>
      </div>
      <img class="userinfo-img-wrapper" :src="imgUrlChecked" />
    </div>
  </div>
</template>

<script>
import defaultUserImg from "../assets/images/default_user.jpeg";
import axiosInstance from "../utils";
export default {
  name: "UserInfo",
  data() {
    return {
      name: "",
      studentId: "",
      imgUrl: "",
      userId: "",
    };
  },
  computed: {
    itemCount() {
      let sum = 0;
      this.$store.state.cart.forEach((item) => {
        sum += item.count;
      });
      return sum;
    },
    imgUrlChecked() {
      return this.imgUrl == "" || this.imgUrl == null
        ? defaultUserImg
        : this.imgUrl;
    },
  },
  methods: {
    toSelf() {
      this.$router.push("/self");
    },
    toCart() {
      this.$router.push("/cart");
    },
    toCreate() {
      this.$router.push("/creategood");
    },
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
          this.studentId = data.studentId;
          this.imgUrl = data.headImgUrl;
        }
      })
      .then((error) => {
        console.log("UserInfo Error");
        console.log(error);
      });
  },
};
</script>