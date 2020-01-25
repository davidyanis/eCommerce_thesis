<template>
  <div>
    <h2 class="container mt-5">Frilanserare tillgängliga</h2>
    <ListAllServices v-if="loader === false" />
    <Loader :loader="loader" />
  </div>
</template>

<script>

import ListAllServices from "@/components/ListAllServices.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "services",
  components: {
    ListAllServices,
    Loader
  }, 
  data() {
    return {
      loader: true
    }
  },
  async created() {
    try {
      if (!this.$store.list) {
        let response = await this.$axios.get("/api/tjanster")
        this.$store.list = response.data
      }
      this.loader = false
    } catch (err) {
      console.log(err)
    }
  }
}

</script>
