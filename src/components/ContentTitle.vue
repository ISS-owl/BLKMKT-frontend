<template>
  <div class="ContentTitle">
    <div class="ContentTitle-text">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "ContentTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>