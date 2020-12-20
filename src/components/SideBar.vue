<template>
  <div class="sidebar">
    <img class="sidebar-icon-wrapper" src="../assets/images/icon.png" />

    <div></div>
    <div class="sidebar-item-list">
      <div class="sidebar-item-wrapper">
        <i class="el-icon-house --primary"></i>
        <a href="javascript:void(0)">首页</a>
      </div>
    </div>
    <div class="sidebar-text">我的</div>
    <div class="sidebar-item-list">
      <div class="sidebar-item-wrapper">
        <i class="el-icon-user --red"></i>
        <a href="javascript:void(0)">我的帐号</a>
      </div>
      <div class="sidebar-item-wrapper">
        <i class="el-icon-goods --orange"></i>
        <a href="javascript:void(0)">我的上架</a>
      </div>
      <div class="sidebar-item-wrapper">
        <i class="el-icon-shopping-cart-2 --yellow"></i>
        <a href="javascript:void(0)">我的购物车</a>
      </div>
    </div>
    <div class="sidebar-text">使用</div>
    <div class="sidebar-item-list">
      <div class="sidebar-item-wrapper">
        <i class="el-icon-search --teal"></i>
        <a href="javascript:void(0)">搜索商品</a>
      </div>
      <div class="sidebar-item-wrapper">
        <i class="el-icon-sell --cyan"></i>
        <a href="javascript:void(0)">上架商品</a>
      </div>
      <div class="sidebar-item-wrapper">
        <i class="el-icon-chat-square --indigo"></i>
        <a href="javascript:void(0)">小黑市论坛</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style>
</style>