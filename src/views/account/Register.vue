<template>
  <div class="container col-md-4 mt-5">
    <div class="d-flex justify-content-between">
      <h5>Skapa konto </h5>
      <span class="ml-5"> eller <b-link to="login">logga in</b-link> </span>
    </div>
    <b-form @submit="onSubmit">
      <div v-if="inputerror === true" class="alert alert-danger">
        <strong></strong> Vänligen fyll i alla fält.
      </div>
      <b-form-group id="input-group-4" label="Användarnamn:" label-for="input-4" description="För att logga in.">
        <b-form-input id="input-4" v-model="form.name" type="text" ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Lösenord:" label-for="input-3">
        <b-form-input id="input-3" type="password" v-model="form.password" ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Ange lösenord igen:" label-for="input-5">
        <b-form-input id="input-5" type="password" v-model="form.reEnterPassword" ></b-form-input>
        <b-form-invalid-feedback :state="validation">
            Lösenordet matchar inte.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation">
            Lösenordet matchar.
        </b-form-valid-feedback>
      </b-form-group>
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="Din email adress kommer aldrig att användas för reklam.">
          <b-form-input id="input-1" v-model="form.email" type="email" ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Visningsnamn:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.displayName" ></b-form-input>
      </b-form-group>

      <b-button type="submit">Skapa konto <b-spinner v-if="loader == true" small variant="light" label="Spinning"></b-spinner> </b-button>
    </b-form>
    <Loader :loader="loader" />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";

export default {
  name: "Register",
  components: {
    Loader
  },
  data() {
    return {
      inputerror: false,
      loader: false,
      form: {
        displayName: '',
        email: '',
        name: '',
        password: '',
        reEnterPassword: '',
      },
    }
  },
  computed: {
    validation() {
        if (this.form.password.length && this.form.reEnterPassword.length) {
          return this.form.password === this.form.reEnterPassword
        }
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      this.loader = true
      try {
        let response = await this.$axios.post("/api/register", {
          displayName: this.form.displayName,
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
        })
        window.location.href = '/login'
      } catch (err) {
        this.inputerror = true
      }
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

</style>
