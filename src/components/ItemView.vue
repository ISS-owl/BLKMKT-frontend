<template>
  <div class="itemview-wrapper">
    <div class="itemview-title">
      商品标题
      <div class="itemview-subtitle">子标题</div>
    </div>
    <div class="itemview-center">
      <img src="../assets/images/good.jpg" class="itemview-img" />
      <div class="itemview-info">
        <div class="itemview-info-wrapper">
          <div class="itemview-info-item">售价：￥10</div>
          <div class="itemview-info-item">商品点赞数：2</div>
        </div>
        <div class="itemview-info-wrapper">
          <div class="itemview-info-item">库存量：20</div>
          <div class="itemview-info-item">商品种类：电子产品</div>
        </div>
        <div class="itemview-info-cart">
          <el-input-number
            class="itemview-info-count"
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
          <el-button type="primary" round plain class="itemview-info-button"
            >加入购物车</el-button
          >
        </div>
      </div>
    </div>
    <div class="itemview-title">
      <div class="itemview-split">商品简介</div>

      <div class="itemview-description">500出9成新华为手机</div>
    </div>
    <div class="itemview-title">
      <div class="itemview-split">商品评论</div>
      <div class="itemview-itemcomment">
        <item-comment></item-comment>
        <item-comment></item-comment>
      </div>
      <div class="itemview-post">
        <el-input
          type="textarea"
          :rows="6"
          placeholder="leave a comment..."
          v-model="textarea"
        >
        </el-input>
        <div class="itemview-button">
          <el-button type="success">发表评论</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemComment from "./ItemComment.vue";
export default {
  name: "ItemView",
  components: {
    ItemComment,
  },
};
</script>

<style>
</style>