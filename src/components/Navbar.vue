<template>
  <div id="nav">
    <section>
        <h2><a href="/">Taskville.se</a></h2>
    </section>
    <section class="links">
        <router-link to="/">Bli en partner</router-link> |
        <router-link to="/tjanster">Börja handla</router-link> |
        <router-link v-if="!loggedIn" to="/login">Logga in </router-link>
        <b-dropdown v-if="loggedIn" id="dropdown-1" right variant="link" :text="this.$store.state.displayName">
          <b-dropdown-item><router-link to="/tjanst/lagg-till">Lägg till tjänst </router-link> </b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item><router-link to="/logout">Logga ut</router-link> </b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>

        <!-- <router-link to="/checkout">Varukorg {{ this.$store.state.amountOfProducts }}</router-link> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    },
  }
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

.btn {
  padding-left: 0!important;
  padding-top: 0!important;
}


</style>
