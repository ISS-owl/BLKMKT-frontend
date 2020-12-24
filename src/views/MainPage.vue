<template>
  <div class="main">
    <side-bar pos="1" class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title title="热销商品"></content-title>
      <div v-if="itemArray" class="main-item-list">
        <good-item
          v-for="item in itemArray"
          :key="item.id"
          :id="item.id"
          :index="item.index"
        >
        </good-item>

        <div class="main-item-pagination">
          <el-pagination
            @current-change="handlePageChange"
            :page-size="15"
            background
            layout="prev, pager, next"
            :total="total"
          >
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
    return {
      total: 15,
      itemArray: [],
      page: 1,
    };
  },
  methods: {
    generateClass(index) {
      return `item${index}`;
    },
    handlePageChange(page) {
      this.page = page;
      axiosInstance({
        method: "get",
        url: "/good/good/search",
        params: {
          pageNum: this.page,
          pageSize: 15,
        },
      }).then((res) => {
        if (res.data.code == 200) {
          this.itemArray = [];
          res.data.data.goodModelList.forEach((value, index) => {
            value.index = index;
            this.itemArray.push(value);
          });
        }
      });
    },
    nextPage() {
      this.page = this.page + 1;
      this.handleFetchItemData();
    },
    prePage() {
      this.page = this.page - 1;
      this.handleFetchItemData();
    },
    handleFetchItemData() {
      axiosInstance({
        method: "get",
        url: "/good/good/search",
        params: {
          pageNum: this.page,
          pageSize: 15,
        },
      }).then((res) => {
        if (res.data.code == 200) {
          this.itemArray = [];
          res.data.data.goodModelList.forEach((value, index) => {
            value.index = index;
            this.itemArray.push(value);
          });
        }
      });
    },
  },
  mounted() {
    axiosInstance({
      method: "get",
      url: "/good/good/search",
      params: {
        pageNum: this.page,
        pageSize: 15,
      },
    }).then((res) => {
      if (res.data.code == 200) {
        this.total = res.data.data.total;
        this.itemArray = [];
        res.data.data.goodModelList.forEach((value, index) => {
          value.index = index;
          this.itemArray.push(value);
        });
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

