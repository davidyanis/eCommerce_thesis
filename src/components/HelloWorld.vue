<template>
  <div class="container d-flex justify-content-end align-center flex-column h-50">
    <h1>{{ msg }}</h1>
    <h2>Som köpare kan du fynda tjänster till grymma priser.</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  color: #fff;
  text-shadow: 4px 4px 2px rgba(0,0,0,0.6);
}

.hello {
    
}
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
a {
  color: #42b983;
}
</style>
