<template>
  <div>
    <main class="d-flex justify-content-center flex-column">
      <div class="container">
        <HelloWorld msg="Taskville är en marketplace för frilanserare" />
      </div>
      <div class="container">
        <b-button size="lg" class="mt-5" to="/tjanster" style="background-color: #00A572"> Se vad som finns <font-awesome-icon class="pt-1 ml-2" icon="long-arrow-alt-right" /> </b-button>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>

main {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.767), rgba(0, 0, 0, 0.747)), url("../assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: calc(100vh - 4em);
  width: 100%;
}

</style>
