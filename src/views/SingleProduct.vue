<template>
  <div class="container mt-5">
    <router-link to="/tjanster">  <font-awesome-icon icon="arrow-left" /> Tillbaka till tjänster</router-link>
      <div class="col-md-12 mt-5 d-flex justify-content-between flex-wrap">
        <section class="col-md-6">
          <h4>Om denna tjänsten</h4>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </section>
        <b-card class="col-md-3">
          <h4>{{singleProduct.name}}</h4>
          <b-card-text>{{singleProduct.regular_price}} kr</b-card-text>
         
          <b-button block class="mt-3" @click="goToProduct(singleProduct.id)"> Gå vidare </b-button>
        </b-card>
      </div>
      <Loader :loader="loader" />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  name: "SingleProduct",
  components: {
    Loader
  },
  data() {
    return {
      loader: true,
      singleProduct: [],
      productId: this.$route.params.id
    }
  },
  async created() {
    try {
      let response = await this.$axios.post('/api/tjanster/id', {
        productId: this.productId
      })
      this.singleProduct = response.data
      this.loader = false
    } catch (err) {
      window.location.href = '/404'
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button {
   background-color: #42b983;
   border: none;
   outline: 0;
}

button:hover {
   background-color: #3c8a68;
}


</style>
