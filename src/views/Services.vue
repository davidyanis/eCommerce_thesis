<template>
  <div>
    <ListAllServices v-if="loader === false" msg="Lista över alla tjänster" />
    <Loader :loader="loader" />
  </div>
</template>

<script>
// @ is an alias to /src
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
  async mounted() {
    try {
      let response = await this.$axios.get("/api/tjanster")
      this.$store.list = response.data
      this.loader = false
    } catch (err) {
      window.location.href = '/404'
    }
  }
}

</script>
