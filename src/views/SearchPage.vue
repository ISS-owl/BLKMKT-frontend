<template>
  <div class="main">
    <side-bar class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title></content-title>
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
            <el-radio v-model="radio" label="1">书籍PDF</el-radio>
            <el-radio v-model="radio" label="2">课程资料</el-radio>
            <el-radio v-model="radio" label="3">电子产品</el-radio>
            <el-radio v-model="radio" label="4">生活用品</el-radio>
            <el-radio v-model="radio" label="5">其它信息</el-radio>
          </span>
        </div>
        <div class="search-item">
          <span class="search-item-title">是否有货：</span>
          <span class="search-item-select">
            <el-radio v-model="radio" label="6">有</el-radio>
            <el-radio v-model="radio" label="7">无</el-radio>
          </span>
        </div>
        <div class="search-item">
          <span class="search-item-title">排序：</span>
          <span class="search-item-select">
            <el-radio v-model="radio" label="8">价格升序</el-radio>
            <el-radio v-model="radio" label="9">价格降序</el-radio>
            <el-radio v-model="radio" label="10">点赞数升序</el-radio>
            <el-radio v-model="radio" label="11">点赞数降序</el-radio>
            <el-radio v-model="radio" label="12">上架时间升序</el-radio>
            <el-radio v-model="radio" label="13">上架时间降序</el-radio>
          </span>
        </div>
        <div class="search-item">
          <el-button type="primary">开始搜索</el-button>
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