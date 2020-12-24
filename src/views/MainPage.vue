<template>
  <div class="main">
    <side-bar pos="1" class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title title="热销商品"></content-title>
      <div class="main-item-list">
        <good-item class="item0"> </good-item>
        <good-item class="item1"> </good-item>
        <good-item class="item2"> </good-item>
        <good-item class="item3"> </good-item>
        <good-item class="item4"> </good-item>
        <good-item class="item5"> </good-item>
        <good-item class="item6"> </good-item>
        <good-item class="item7"> </good-item>
        <good-item class="item8"> </good-item>
        <good-item class="item9"> </good-item>
        <good-item class="item10"> </good-item>
        <good-item class="item11"> </good-item>
        <good-item class="item12"> </good-item>
        <good-item class="item13"> </good-item>
        <good-item class="item14"> </good-item>
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
import axiosInstance from "../utils";
import GoodItem from "../components/GoodItem.vue";
export default {
  name: "mainPage",
  data() {
    return {};
  },
  method: {
    generateClass(index) {
      return `item${index}`;
    },
  },
  mounted() {
    axiosInstance({
      method: "get",
      url: "/search/good",
      params: {
        pageNum: 1,
        pageSize: 15,
      },
    }).then((res) => {
      if (res.data.code == 200) {
        let mes = this.$message({
          type: "success",
          showClose: true,
          message: "获取商品成功！",
          duration: 1500,
        });
        console.log(res.data);
      }
    });
  },
  components: {
    SideBar,
    UserInfo,
    ContentTitle,
    GoodItem,
  },
};
</script>

