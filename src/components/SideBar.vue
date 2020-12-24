<template>
  <div class="sidebar">
    <img class="sidebar-icon-wrapper" src="../assets/images/icon.png" />

    <div></div>
    <div class="sidebar-item-list">
      <div class="sidebar-item-wrapper">
        <i class="el-icon-house --primary" :class="{ active: state1 }"></i>
        <router-link to="/main">首页</router-link>
      </div>
    </div>
    <div class="sidebar-text">我的</div>
    <div class="sidebar-item-list">
      <div class="sidebar-item-wrapper">
        <i class="el-icon-user --red" :class="{ active: state2 }"></i>
        <router-link to="/self">我的帐号</router-link>
      </div>
      <div class="sidebar-item-wrapper">
        <i class="el-icon-goods --orange" :class="{ active: state3 }"></i>
        <router-link to="/mygood">我的上架</router-link>
      </div>
      <div class="sidebar-item-wrapper">
        <i
          class="el-icon-shopping-cart-2 --yellow"
          :class="{ active: state4 }"
        ></i>
        <router-link to="/cart">我的购物车</router-link>
      </div>
    </div>
    <div class="sidebar-text">使用</div>
    <div class="sidebar-item-list">
      <div class="sidebar-item-wrapper">
        <i class="el-icon-search --teal" :class="{ active: state5 }"></i>
        <router-link to="/search">搜索商品</router-link>
      </div>
      <div class="sidebar-item-wrapper">
        <i class="el-icon-sell --cyan" :class="{ active: state6 }"></i>
        <router-link to="/creategood">上架商品</router-link>
      </div>
      <div class="sidebar-item-wrapper">
        <i class="el-icon-chat-square --indigo" :class="{ active: state7 }"></i>
        <a href="javascript:void(0)">小黑市论坛</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      state1: false,
      state2: false,
      state3: false,
      state4: false,
      state5: false,
      state6: false,
      state7: false,
    };
  },
  props: {
    pos: {
      type: String,
      required: true,
    },
  },
  mounted() {
    if (this.pos == "1") {
      this.state1 = true;
    } else if (this.pos == "2") {
      this.state2 = true;
    } else if (this.pos == "3") {
      this.state3 = true;
    } else if (this.pos == "4") {
      this.state4 = true;
    } else if (this.pos == "5") {
      this.state5 = true;
    } else if (this.pos == "6") {
      this.state6 = true;
    } else if (this.pos == "7") {
      this.state7 = true;
    }
  },
};
</script>

<style>
</style>