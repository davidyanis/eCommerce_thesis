<template>
  <div class="container mt-5">
    <div class="card-deck mt-5">
      <div class="card mb-5 col-lg-3 " style="padding: 0!important;" v-for="(service, id) in this.$store.list" :key="id">
        <img class="card-img-top" :src="service.images[0].src" width="100%" height="200px" />
        <div class="card-body pb-0 d-flex justify-content-between">
          <h4 @click="goToProduct(service.id)"> {{service.name}} </h4>
          <p> {{service.regular_price}} kr</p>
        </div>
        <div class="card-body pt-0">
         {{service.short_description | strippedContent}}
        </div>
        <div class="card-footer">
          <small class="text-muted">Upplagd {{service.date_created}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListAllServices",
  props: {
    msg: String,
  },
  filters: {
    strippedContent: function(string) {
      return string.replace(/<\/?[^>]+>/ig, " "); 
    }
  },
  methods: {
    goToProduct(productId) {
      this.$router.push({ path: `/tjanster/${productId}` }) 
    },
    addProductToCart(service) {
      this.$store.dispatch('addProductToCart', service)
    }
  }, 
  mounted() {
    console.log(this.$store.list)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  
}

h4:hover {
  cursor: pointer;
  color: #42b983;
}


</style>
