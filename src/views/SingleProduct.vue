<template>
  <div class="container mt-5">
    <router-link to="/tjanster">  <font-awesome-icon icon="arrow-left" /> Tillbaka till tjänster</router-link>
      <div class="col-md-12 mt-5 d-flex justify-content-between flex-wrap">
        <section class="col-md-6">
          <img :src="singleProduct.images[0].src" width="100%"/>
        
          <h4 class="mt-5">Beskrivning om tjänsten</h4>
          <p>{{singleProduct.description | strippedContent}}</p>
        </section>
        <b-card class="col-md-4">
          <h4>{{singleProduct.name}}</h4>
          <h6>{{singleProduct.short_description | strippedContent}}</h6>
          <p>Kontakta: {{singleProduct.purchase_note | strippedContent}}</p>
         
          <b-button block class="mt-3" @click="checkout(singleProduct)"> Köp {{singleProduct.regular_price}} kr </b-button>
        </b-card>
       
      </div>
      <Loader :loader="loader" />
  </div>
</template>
<script src="https://js.stripe.com/v3/"></script>
<script>
var stripe = Stripe('pk_test_THn2YsYQGOHTtMhc6762FcJt00WHho7x9p');
import Loader from "@/components/Loader.vue";

export default {
  name: "SingleProduct",
  components: {
    Loader,
  },
  data() {
    return {
      loader: true,
      singleProduct: [],
      cart: [],
      productId: this.$route.params.id
    }
  },
   filters: {
    strippedContent: function(string) {
      return string.replace(/<\/?[^>]+>/ig, " "); 
    }
  },
  async created() {
    try {
      let response = await this.$axios.post('/api/tjanster/id', {
        productId: this.productId
      })
      this.singleProduct = response.data
     
      this.cart.push({
        'name': response.data.name,
        'description': response.data.description.replace(/<[^>]*>?/gm, ''),
        'amount': parseInt(response.data.regular_price, 10),
        'quantity': 1,
        'currency': 'sek'
      })
      this.loader = false
    } catch (err) {
      window.location.href = '/404'
    }
  },
  methods: {
    checkout: async function(singleProduct) {

      let response = await this.$axios.post('/api/checkout', this.cart )

      const {error} = await stripe.redirectToCheckout({
        sessionId: response.data.sessionId
      })

    }
  },
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
