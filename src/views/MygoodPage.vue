<template>
  <div class="main">
    <side-bar pos="3" class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title title="我的上架"></content-title>
      <div class="main-item-list">
        <good-item class="item0"> </good-item>
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
  data() {
    return {
      total: 15,
      itemArray: [],
      page: 1,
    };
  },
  mounted() {},
  components: {
    SideBar,
    UserInfo,
    ContentTitle,
    GoodItem,
  },
};
</script>