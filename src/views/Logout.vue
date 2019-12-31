<template>
  
</template>

<script>
export default {
  created() {
    this.$store.dispatch('destroySession')
   
    this.$router.push("/")
  
  }
}
</script>