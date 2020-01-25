<template>
   <div class="container col-md-4 mt-5 login-container">
    <div v-if="inputerror === true" class="alert alert-danger">
      <strong></strong> Du har angett felaktig användarnamn eller lösenord.
    </div>
    <div class="d-flex justify-content-between">
      <h5>Logga in </h5>
      <span class="ml-5"> eller <b-link to="register">skapa konto</b-link> </span>
    </div>
    <b-form @submit="onSubmit">

    <b-form-group id="input-group-2" label="Namn:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.name"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-3" label="Lösenord" label-for="input-3">
    <b-form-input
        id="input-3"
        v-model="form.password"
        required
        type="password"
      ></b-form-input>
    </b-form-group>
    <div class="d-flex justify-content-between">
      <b-button type="submit" variant="primary">Logga in <b-spinner v-if="loader == true" small variant="light" label="Spinning"></b-spinner> </b-button>
      <b-link to="/glomtlosenord">Glömt lösenord</b-link>
    </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loader: false,
      inputerror: false,
      form: {
        name: '',
        password: ''
      },
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
   
        this.loader = true
        this.$store.dispatch("retrieveCookie", {
          name: this.form.name,
          password: this.form.password
        })
        .then(response => {
          this.$router.push("/tjanster")
        })
        .catch(err => {
          this.inputerror = true
        })

        this.loader = false
    },
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

a{
  color: #42b983;
}

button {
  background-color: #42b983;
  border: none;
  outline: 0;
}

button:hover {
  background-color: #359167;
}

.login-container {
  height: 50vh;
}

</style>
