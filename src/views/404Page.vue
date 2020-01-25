<template>
  <div>
  <div class="container d-flex justify-content-center flex-column text-center height">
    <h1 style="font-size: 8em">4 <img src="../assets/404.gif" width="130"/> 4 </h1>
    <h2 class="mt-5">Sidan du letar efter kunde inte hittas 😕</h2>
  </div>
  <div class="container d-flex justify-content-center mb-5">
    <b-button to="/" style="background-color: #2c3e50; margin: 0 auto;">Tillbaka till startsidan</b-button>
  </div>
  </div>
</template>

<script>

export default {
  name: "404Page",
 
}

</script>

<style scoped>

.height {
  height: 60vh;
}

img {
  background-color: #00A572;
  border-radius: 5em;
}
</style>
