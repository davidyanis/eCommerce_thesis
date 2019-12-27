<template>
  <div>
    <div class="loader" v-if="loader == true">
      <h1>Taskville.se</h1>
      <img src="../assets/Spinner.gif" width="300px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    loader: Boolean,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  color: #fff;
}

.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background:rgb(0, 0, 0);
}

</style>
