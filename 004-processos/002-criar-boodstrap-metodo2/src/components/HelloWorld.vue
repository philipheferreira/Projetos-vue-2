<template>

  <div class="container mt-5">
    <b-alert show variant="success">
      BootstrapVue funcionando perfeitamente no Vue 2!
    </b-alert>
    <b-button variant="primary" @click="mostrarAlerta">Clique em Mim</b-button>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
