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
        <cart-item
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :count="item.count"
          :price="item.price"
          :imgUrl="item.imgUrl"
          :id="item.id"
        >
        </cart-item>
        <div class="cartpage-settle">
          <div class="cartpage-settle-button">
            <el-button @click="end" type="primary">结算</el-button>
          </div>
          <div class="cartpage-settle-price">￥{{ sumPrice }}</div>
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
  data() {
    return {};
  },
  computed: {
    sumPrice() {
      let sum = 0;
      this.$store.state.cart.forEach((item) => {
        sum += item.count * item.price;
      });
      return sum;
    },
    items() {
      return this.$store.state.cart;
    },
  },
  methods: {
    end() {
      let loading = this.$loading({
        lock: true,
        text: "正在提交订单",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
        let mes = this.$message({
          type: "success",
          showClose: true,
          message: "提交订单成功！",
          duration: 1500,
        });
      }, 2000);
    },
  },
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