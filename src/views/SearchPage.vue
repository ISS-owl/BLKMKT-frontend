<template>
  <div class="main">
    <side-bar pos="5" class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title title="搜索商品"></content-title>
      <div class="search">
        <div class="search-item">
          <span class="search-item-title">关键字：</span>
          <el-input
            v-model="input"
            placeholder="请输入搜索关键字"
            class="search-item-input"
            clearable
          ></el-input>
        </div>
        <div class="search-item">
          <span class="search-item-title">种类：</span>
          <span class="search-item-select">
            <el-radio v-model="type" :label="1">书籍PDF</el-radio>
            <el-radio v-model="type" :label="2">课程资料</el-radio>
            <el-radio v-model="type" :label="3">电子产品</el-radio>
            <el-radio v-model="type" :label="4">生活用品</el-radio>
            <el-radio v-model="type" :label="5">其它信息</el-radio>
          </span>
        </div>
        <div class="search-item">
          <span class="search-item-title">是否有货：</span>
          <span class="search-item-select">
            <el-radio v-model="hasStock" :label="6">有</el-radio>
            <el-radio v-model="hasStock" :label="7">无</el-radio>
          </span>
        </div>
        <div class="search-item">
          <span class="search-item-title">排序：</span>
          <span class="search-item-select">
            <el-radio v-model="sort" :label="8">价格升序</el-radio>
            <el-radio v-model="sort" :label="9">价格降序</el-radio>
            <el-radio v-model="sort" :label="10">点赞数升序</el-radio>
            <el-radio v-model="sort" :label="11">点赞数降序</el-radio>
            <el-radio v-model="sort" :label="12">上架时间升序</el-radio>
            <el-radio v-model="sort" :label="13">上架时间降序</el-radio>
          </span>
        </div>
        <div class="search-item">
          <el-button @click="startSearch" type="primary">开始搜索</el-button>
        </div>
      </div>
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
import GoodItem from "../components/GoodItem.vue";
import defaultItemImg from "../assets/images/default_item.jpg";
import axiosInstance from "../utils";

export default {
  name: "SearchPage",
  data() {
    return {
      type: 1,
      hasStock: 6,
      sort: 8,
    };
  },
  methods: {
    generateClass(index) {
      return `item${index}`;
    },
    startSearch() {},
  },
  components: {
    SideBar,
    UserInfo,
    ContentTitle,
    GoodItem,
  },
};
</script>