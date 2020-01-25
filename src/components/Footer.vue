<template>
  <div>
    <footer class="mt-5">
      <div class="container d-flex justify-content-around col-md-6 flex-wrap pt-2">
        <img src="../assets/visa.png" />
        <img src="../assets/mastercard.png" />
        <img src="../assets/discover.png" />
        <img src="../assets/americanexpress.png" />
      </div>
      <div class="container d-flex justify-content-around col-md-6 mt-5">
        <p><strong>Taskville AB</strong>
        <br>
        <span>Platinumgatan 20A</span>
        <br>
        <span>Göteborg 242 24, Sverige</span>
        <br>
        <span>Organisationsnummer - 936578-2560</span>
        </p>
        <p><strong>Support</strong>
        <br>
        <span>kundtjanst@taskville.se</span>
        <br>
        <span>040-92 87 27</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

footer {
  background-color: #e6e6e6;
}

img {
  padding: 1em;
}


</style>
