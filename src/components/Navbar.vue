<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="light" variant="faded">
    <b-navbar-brand style="border: 1px solid #000; padding: 0.4em;" href="/"><h4 class="mt-2">Taskville.se</h4></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item to="/blipartner">Bli en partner</b-nav-item>
          <b-nav-item to="/tjanster">Börja handla </b-nav-item>
          <b-nav-item v-if="!loggedIn" to="/login">Logga in</b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown v-if="loggedIn" :text="this.$store.state.displayName" right>
          <b-dropdown-item to="/tjanst/lagg-till">Lägg till tjänst</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item to="/logout">Logga ut</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <!-- <section>
        <h4 class="mt-2"><a style="border: 1px solid #000; padding: 0.4em;" href="/">Taskville.se</a></h4>
    </section>
    <section class="links">
        <router-link to="/blipartner">Bli en partner</router-link> |
        <router-link to="/tjanster">Börja handla</router-link> |
        <router-link v-if="!loggedIn" to="/login">Logga in </router-link>
        <b-dropdown v-if="loggedIn" id="dropdown-1" right variant="link" :text="this.$store.state.displayName">
          <b-dropdown-item><router-link to="/tjanst/lagg-till">Lägg till tjänst </router-link> </b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
         
          <b-dropdown-item><router-link to="/logout">Logga ut</router-link> </b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown> -->

        <!-- <router-link to="/checkout">Varukorg {{ this.$store.state.amountOfProducts }}</router-link> -->
    <!-- </section> -->
    
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

  border-bottom: 1px solid #ddd;
}


.router-link-exact-active {
  color: #00A572;
}


.btn {
  padding-left: 0!important;
  padding-top: 0!important;
}

.nav-link {
  color: #000!important;
}
.nav-link:hover {
  color: #00A572!important;
}

.is-active {
  color: #00A572!important;
}


</style>
