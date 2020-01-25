<template>
   <div class="container col-md-4 mt-5">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-2" label="Email:" label-for="input-2" description="En länk kommer att skickas till din e-post för att återställa lösenordet.">
        <b-form-input
          id="input-2"
          required
        ></b-form-input>
      </b-form-group>
     
      <b-button type="submit" variant="primary">Skicka</b-button>
  
    </b-form>
  </div>
</template>

<script>

export default {
  name: "ResetPassword",

};
</script>

<style scoped>


</style>
