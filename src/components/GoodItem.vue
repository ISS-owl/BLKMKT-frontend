<template>
  <div @click="toItemPage" :class="itemClass" class="gooditem">
    <img class="gooditem-img" :src="itemUrlChecked" />
    <div class="gooditem-name">{{ name }}</div>
    <div class="gooditem-price">￥{{ price }}</div>
    <div class="gooditem-like">
      <span>{{ like }}</span
      >个人觉得很赞
    </div>
  </div>
</template>

<script>
import axiosInstance from "../utils";
import defaultItemImg from "../assets/images/default_item.jpg";

export default {
  name: "GoodItem",
  data() {
    return {
      name: "",
      price: "",
      like: "",
      imgUrl: "",
      itemClass: "item",
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
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    generateClass: function (index) {
      return `item${index}`;
    },
    toItemPage() {
      this.$router.push({ name: "item", params: { goodId: this.id } });
    },
  },
  mounted() {
    this.itemClass = this.itemClass + this.index;
    axiosInstance({
      method: "get",
      url: "/good/good/" + this.id,
    }).then((res) => {
      if (res.data.code == 200) {
        this.name = res.data.good.title;
        this.price = res.data.good.price;
        this.like = res.data.good.likeNum;
        this.imgUrl = res.data.good.goodImgUrl;
      }
    });
  },
};
</script>

<style>
</style>