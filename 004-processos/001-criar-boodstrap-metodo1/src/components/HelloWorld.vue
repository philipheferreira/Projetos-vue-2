<template>
    <div class="container mt-5">
      <div class="alert alert-success">
        Bootstrap funcionando no Vue 2!
      </div>
      <button class="btn btn-primary">Meu Botão</button>
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
