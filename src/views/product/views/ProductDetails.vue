<template>
  <div class="product-details">
    <div class="wrapper">
      <h1>Product Details</h1>
      <div class="product-details-content">
        <img :src="product.image" :alt="product.title" />
        <div class="product-text">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <h4>Category: {{ product.category }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      product: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.product = this.$store.state.products[this.id - 1];
  },
};
</script>

<style lang="scss" scoped>
.product-details {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.4);
  display: flex;
  .wrapper {
    width: 80%;
    height: 80vh;
    background: #fff;
    margin: auto;
    h1 {
      margin-bottom: 10px;
    }
    .product-details-content {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80%;
      padding: 20px;
      img {
        width: 40%;
      }
      .product-text {
        text-align: left;
        margin-left: 40px;
      }
    }
  }
}
</style>