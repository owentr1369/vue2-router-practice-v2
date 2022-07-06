<template>
  <div class="product-details">
    <h1>Product Details id : {{ id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 12,
    };
  },
  created() {
    console.log(this.$router);
  },
};
</script>

<style>
</style>