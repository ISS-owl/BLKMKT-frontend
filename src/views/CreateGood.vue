<template>
  <div class="main">
    <side-bar pos="6" class="main-sidebar"></side-bar>
    <div class="main-right">
      <user-info></user-info>
      <content-title title="上架商品"></content-title>
      <div class="selfpage">
        <div class="selfpage-info">
          <div class="selfpage-info-title">价格</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder=""
              v-model="price"
              :disabled="false"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">种类</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder=""
              v-model="category"
              :disabled="false"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">上架数量</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder=""
              v-model="totalNum"
              :disabled="false"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">商品标题</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder=""
              v-model="title"
              :disabled="false"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">商品子标题</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder=""
              v-model="subtitle"
              :disabled="false"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-title">商品描述</div>
          <div class="selfpage-info-input">
            <el-input
              placeholder=""
              v-model="description"
              :disabled="false"
              class="selfpage-info-input-item"
            >
            </el-input>
          </div>
          <div class="selfpage-info-iconwrapper">
            <el-button
              @click="uploadItem"
              type="success"
              class="selfpage-info-icon"
              >上传商品</el-button
            >
          </div>
        </div>
        <div class="selfpage-img">
          <div class="selfpage-info-title">商品图片</div>
          <div class="selfpage-img-wrapper">
            <img :src="imgUrl" />
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
import defaultItemImg from "../assets/images/default_item.jpg";
import axiosInstance from "../utils";

export default {
  name: "CreateGood",
  data() {
    return {
      price: "",
      category: "",
      totalNum: "",
      title: "",
      subtitle: "",
      description: "",
      imgUrl: defaultItemImg,
    };
  },
  methods: {
    uploadItem() {
      axiosInstance({
        method: "post",
        url: "/good/good/up",
        data: {
          price: this.price,
          category: this.category,
          totalNum: this.totalNum,
          title: this.title,
          subtitle: this.subtitle,
          description: this.description,
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            let mes = this.$message({
              type: "success",
              showClose: true,
              message: "上传商品成功！",
              duration: 1500,
            });
            this.$router.push("/main");
          }
        })
        .then((error) => {
          let mes = this.$message({
            type: "error",
            showClose: true,
            message: "上传商品失败！",
            duration: 1500,
          });
          console.log(error);
        });
    },
  },
  components: {
    SideBar,
    UserInfo,
    ContentTitle,
    GoodItem,
  },
};
</script>