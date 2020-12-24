<template>
  <div class="cartitem">
    <div class="cartitem-img">
      <img :src="imgUrl" />
    </div>
    <div>{{ title }}</div>
    <div>￥{{ price }}</div>
    <div>{{ count }}</div>
    <div>￥{{ itemSumPrice }}</div>
    <div>
      <el-button @click="deleteItem" type="danger">删除</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    count: {
      type: Number,
    },
    imgUrl: {
      type: String,
    },
  },
  computed: {
    itemSumPrice() {
      return this.price * this.count;
    },
  },
  methods: {
    deleteItem() {
      this.$store.commit("deleteItem", this.id);
    },
  },
};
</script>

<style>
</style>