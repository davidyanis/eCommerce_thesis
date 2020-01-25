<template>
  <div>
    <div class="container text-center loader" v-if="loader == true">
      <h1 class="mb-5">Taskville.se</h1>
      <b-spinner style="width: 3rem; height: 3rem;" variant="success" label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    loader: Boolean,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  color: #fff;
}

.loader {
  height: 20em;
}



</style>
