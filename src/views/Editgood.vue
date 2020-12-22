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
              placeholder="shen zhi hao"
              v-model="input"
              :disabled="true"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">种类</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder="shen zhi hao"
              v-model="input"
              :disabled="true"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">上架数量</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder="shen zhi hao"
              v-model="input"
              :disabled="true"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">商品标题</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder="shen zhi hao"
              v-model="input"
              :disabled="true"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">商品子标题</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder="shen zhi hao"
              v-model="input"
              :disabled="true"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">商品描述</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder="shen zhi hao"
              v-model="input"
              :disabled="true"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-iconwrapper">
            <el-button type="primary" class="selfpage-info-icon"
              >修改信息</el-button
            >
            <el-button type="success" class="selfpage-info-icon"
              >更新信息</el-button
            >
            <el-button type="info" class="selfpage-info-icon"
              >取消修改</el-button
            >
          </div>
        </div>
        <div class="selfpage-img">
          <div class="selfpage-info-title">商品图片</div>
          <div class="selfpage-img-wrapper">
            <img src="../assets/images/user.jpeg" />
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
export default {
  name: "mainPage",
  components: {
    SideBar,
    UserInfo,
    ContentTitle,
    GoodItem,
  },
};
</script>