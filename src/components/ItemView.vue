<template>
  <div class="itemview-wrapper">
    <div class="itemview-title">
      {{ title }}
      <div class="itemview-subtitle">{{ subtitle }}</div>
    </div>
    <div class="itemview-center">
      <img :src="itemUrlChecked" class="itemview-img" />
      <div class="itemview-info">
        <div class="itemview-info-wrapper">
          <div class="itemview-info-item">售价：￥{{ price }}</div>
          <div class="itemview-info-item">商品点赞数：{{ like }}</div>
        </div>
        <div class="itemview-info-wrapper">
          <div class="itemview-info-item">库存量：{{ currentSum }}</div>
          <div class="itemview-info-item">商品种类：{{ category }}</div>
        </div>
        <div class="itemview-info-cart">
          <el-input-number
            class="itemview-info-count"
            v-model="buyNumber"
            :min="0"
            :max="currentSum"
            label="描述文字"
          ></el-input-number>
          <el-button
            @click="addToCart"
            type="primary"
            round
            plain
            class="itemview-info-button"
            >加入购物车</el-button
          >
        </div>
      </div>
    </div>
    <div class="itemview-title">
      <div class="itemview-split">商品简介</div>

      <div class="itemview-description">{{ description }}</div>
    </div>
    <div class="itemview-title">
      <div class="itemview-split">商品评论</div>
      <div class="itemview-itemcomment">
        <item-comment
          v-for="comment in comments"
          :key="comment.commentEntity.id"
          :content="comment.commentEntity.content"
          :imgUrl="comment.headImgUrl"
          :name="comment.username"
          :likeSum="comment.commentEntity.likeNum"
          :time="comment.commentEntity.updateTime"
          :commentId="comment.commentEntity.id"
        ></item-comment>
      </div>
      <div class="itemview-post">
        <el-input
          type="textarea"
          :rows="6"
          placeholder="leave a comment..."
          v-model="commentContent"
        >
        </el-input>
        <div class="itemview-button">
          <el-button @click="postComment" type="success">发表评论</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemComment from "./ItemComment.vue";
import axiosInstance from "../utils";
import defaultItemImg from "../assets/images/default_item.jpg";
export default {
  name: "ItemView",
  data() {
    return {
      title: "",
      subtitle: "",
      price: null,
      like: null,
      currentSum: 0,
      category: "",
      description: "",
      imgUrl: "",
      buyNumber: 0,
      comments: [],
      commentContent: "",
    };
  },
  computed: {
    itemUrlChecked() {
      return this.imgUrl == "" || this.imgUrl == null
        ? defaultItemImg
        : this.imgUrl;
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addToCart() {
      console.log("test case");
      let item = {};
      item.imgUrl = this.itemUrlChecked;
      item.title = this.title;
      item.price = this.price;
      item.count = this.buyNumber;
      item.id = this.id;
      this.$store.commit("addItem", item);
      let mes = this.$message({
        type: "success",
        showClose: true,
        message: "加入购物车成功！",
        duration: 1500,
      });
    },
    postComment() {
      axiosInstance({
        method: "post",
        url: "/good/good_comment/",
        data: {
          goodId: this.id,
          userId: this.$store.state.userId,
          likeNum: 0,
          content: this.commentContent,
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            this.commentContent = "";
            let mes = this.$message({
              type: "success",
              showClose: true,
              message: "发表评论成功！",
              duration: 1500,
            });
            axiosInstance({
              method: "get",
              url: "/good/good_comment/" + this.id,
            }).then((res) => {
              if (res.data.code == 200) {
                this.comments = res.data.data.list;
              }
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    axiosInstance({
      method: "get",
      url: "/good/good/" + this.id,
    })
      .then((res) => {
        if (res.data.code == 200) {
          this.title = res.data.good.title;
          this.subtitle = res.data.good.subtitle;
          this.price = res.data.good.price;
          this.like = res.data.good.likeNum;
          this.currentSum = res.data.good.currentNum;
          this.category = res.data.good.category;
          this.description = res.data.good.description;
          this.imgUrl = res.data.good.goodImgUrl;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axiosInstance({
      method: "get",
      url: "/good/good_comment/" + this.id,
    }).then((res) => {
      if (res.data.code == 200) {
        this.comments = res.data.data.list;
      }
    });
  },
  components: {
    ItemComment,
  },
};
</script>

<style>
</style>