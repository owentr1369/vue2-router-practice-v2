<template>
  <div class="product-layout">
    <product-list></product-list>
    <router-view></router-view>
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
export default {
  components: { ProductList },
};
</script>

<style>
</style>