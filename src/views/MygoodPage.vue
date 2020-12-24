<template>
  <div class="main">
    <side-bar class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title></content-title>
      <div class="main-item-list">
        <good-item class="item0"> </good-item>
        <good-item class="item1"> </good-item>
        <good-item class="item2"> </good-item>
        <good-item class="item3"> </good-item>
        <good-item class="item4"> </good-item>
        <good-item class="item5"> </good-item>
        <div class="main-item-pagination">
          <el-pagination background layout="prev, pager, next" :total="100">
          </el-pagination>
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
import defaultItemImg from "../assets/images/default_item.jpg";
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