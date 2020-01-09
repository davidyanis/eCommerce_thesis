<template>
  <div class="container">
    <b-button size="lg" class="mt-5" to="/tjanster" style="background-color: #42b983">{{ msg }}</b-button>
  </div>
</template>

<script>

export default {
  name: "GoToServicesBtn",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}



</style>
