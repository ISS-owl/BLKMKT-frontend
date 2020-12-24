<template>
  <div class="main">
    <side-bar pos="4" class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title title="我的购物车"></content-title>
      <div class="cartpage-wrapper">
        <div class="cartpage-title">
          <span>图片</span>
          <span>商品名称</span>
          <span>单价（元）</span>
          <span>数量</span>
          <span>小计（元）</span>
          <span>操作</span>
        </div>
        <cart-item> </cart-item>
        <cart-item> </cart-item>
        <div class="cartpage-settle">
          <div class="cartpage-settle-button">
            <el-button type="primary">结算</el-button>
          </div>
          <div class="cartpage-settle-price">￥400</div>
          <div class="cartpage-settle-text">总价:</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import SideBar from "../components/SideBar.vue";
import UserInfo from "../components/UserInfo.vue";
import ContentTitle from "../components/ContentTitle.vue";
import ItemView from "../components/ItemView.vue";
export default {
  name: "CartPage",
  components: {
    CartItem,
    SideBar,
    UserInfo,
    ContentTitle,
  },
};
</script>

<style>
</style>