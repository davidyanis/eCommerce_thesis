<template>
  <div>
    <main>
      <HelloWorld msg="Taskville är en plattform för frilanserare att briljera på." />
      <GoToServicesBtn msg="Se vad som finns." />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import GoToServicesBtn from "@/components/GoToServicesBtn.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    GoToServicesBtn
  }
};
</script>

<style scoped>

main {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 5em);
  width: 100%;
}

</style>
