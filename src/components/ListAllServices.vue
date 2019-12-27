<template>
  <div class="container mt-5">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="renderServices" v-for="(service, id) in this.$store.list" :key="id">
        <h4> {{service.name}} </h4>
        <b-button @click="addProductToCart(service)" variant="dark">Lägg till</b-button>
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
  methods: {
    addProductToCart(service) {
      this.$store.dispatch('addProductToCart', service)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  padding-left: 1em;
}

.renderServices {
  padding: 4em;
}

</style>
