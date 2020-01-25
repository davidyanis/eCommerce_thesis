<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

body {
   margin-bottom:50px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

section h1 {
    margin-top: 0;
}

.btn-link {
  color: #212529!important;
}

button:focus {
  background-color: #42b983!important;
  border: none!important;
}
</style>
