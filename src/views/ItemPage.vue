<template>
  <div class="main">
    <side-bar class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title></content-title>
      <div class="itempage-wrapper">
        <item-view></item-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import UserInfo from "../components/UserInfo.vue";
import ContentTitle from "../components/ContentTitle.vue";
import ItemView from "../components/ItemView.vue";
import axiosInstance from "../utils";
import defaultItemImg from "../assets/images/default_item.jpg";

export default {
  name: "ItemPage",
  components: {
    SideBar,
    UserInfo,
    ContentTitle,
    ItemView,
  },
};
</script>
