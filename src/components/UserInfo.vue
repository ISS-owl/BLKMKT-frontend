<template>
  <div class="userinfo">
    <div class="userinfo-icon">
      <el-popover placement="bottom" :width="100" trigger="hover">
        <template #reference>
          <i class="el-icon-user"></i>
        </template>
        <div class="userinfo-hover-text">个人信息</div>
      </el-popover>
    </div>
    <div class="userinfo-icon">
      <el-popover placement="bottom" :width="100" trigger="hover">
        <template #reference>
          <el-badge :value="3" class="item" type="danger">
            <i class="el-icon-shopping-cart-2"></i>
          </el-badge>
        </template>
        <div class="userinfo-hover-text">我的购物车</div>
      </el-popover>
    </div>
    <div class="userinfo-icon">
      <el-popover placement="bottom" :width="100" trigger="hover">
        <template #reference>
          <i class="el-icon-plus"></i>
        </template>
        <div class="userinfo-hover-text">上架商品</div>
      </el-popover>
    </div>
    <div class="userinfo-rightpart">
      <div class="userinfo-infomation">
        <p>罗宇轩</p>
        <p>2018302120209</p>
      </div>
      <img class="userinfo-img-wrapper" src="../assets/images/user.jpeg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>