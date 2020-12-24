<template>
  <div class="gooditem">
    <img class="gooditem-img" src="../assets/images/good.jpg" />
    <div class="gooditem-name">华为手机</div>
    <div class="gooditem-price">￥200</div>
    <div class="gooditem-like"><span>3</span>个人觉得很赞</div>
  </div>
</template>

<script>
import axiosInstance from "../utils";

export default {
  name: "GoodItem",
  data() {
    return {
      name: "",
      price: "",
      like: "",
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    axiosInstance({
      method: "get",
      url: "/good/good/search",
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
};
</script>

<style>
</style>