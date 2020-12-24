<template>
  <div class="comment">
    <div class="comment-img">
      <img :src="imgUrl" />
    </div>
    <div class="comment-content">
      <div class="comment-content-1">
        <span>{{ name }}</span>
        <span>{{ dateString }}</span>
      </div>
      <div class="comment-content-2">{{ content }}</div>
      <div class="comment-content-3">
        <i @click="like" class="comment-cursor" :class="iconClass"> </i>
        <span>{{ likeCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from "../utils/formDate";
import axiosInstance from "../utils";

export default {
  name: "ItemComment",
  data() {
    return {
      hasLiked: false,
      count: 0,
    };
  },
  computed: {
    iconClass() {
      return this.hasLiked ? "el-icon-star-on" : "el-icon-star-off";
    },
    dateString() {
      return formatDate(new Date(this.time));
    },
    likeCount() {
      return this.count + this.likeSum;
    },
  },
  methods: {
    like() {
      if (!this.hasLiked) {
        this.hasLiked = true;
        this.count++;
        axiosInstance({
          method: "put",
          url: "/good/good_comment/like/" + this.commentId,
        });
      }
    },
  },
  props: {
    name: {
      type: String,
    },
    time: {
      type: String,
    },
    content: {
      type: String,
    },
    likeSum: {
      type: Number,
    },
    imgUrl: {
      type: String,
    },
    commentId: {
      type: Number,
    },
  },
};
</script>

<style>
</style>