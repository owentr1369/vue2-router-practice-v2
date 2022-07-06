<template>
  <div class="product-list">
    <h1>Product List</h1>
    <div class="list">
      <article v-for="product in productList" :key="product.id" class="product">
        <img :src="product.image" :alt="product.title" />
        <span>{{ product.title }}</span>
        <h4>Price: {{ product.price }}</h4>
        <router-link
          :to="{ name: 'product-details', params: { id: product.id } }"
          >Details</router-link
        >
      </article>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [],
    };
  },
  mounted() {
    this.productList = this.$store.state.products;
  },
  //   methods: {
  //     getDetails(id) {
  //       router.push(`products/details/${id}`);
  //     },
  //   },
};
</script>

<style lang="scss">
.product-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    width: 80%;
    .product {
      width: 20%;
      img {
        width: 100%;
      }
    }
  }
}
</style>