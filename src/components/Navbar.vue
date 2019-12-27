<template>
  <div id="nav">
    <section>
        <h2><a href="/">Taskville.se</a></h2>
    </section>
    <section class="links">
        <router-link to="/">Bli en partner</router-link> |
        <router-link to="/tjanster">Börja handla</router-link> |
        <router-link to="/login">Logga in</router-link> |
        <router-link to="/checkout">Varukorg {{ this.$store.state.amountOfProducts }}</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#nav {
  height: 5em;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}

#nav a {
    margin-top: 3em;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

#nav .links {
    padding-top: 0.5em;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav a:hover {
  color: #42b983;
}
</style>
