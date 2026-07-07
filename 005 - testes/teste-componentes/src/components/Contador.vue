<template>
  <div class="contador">
    <h1>Aplicacao Contador</h1>
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>
export default {
  name: 'ContadorComponent',
  data() {
    return {
        contador: 0
    }
  },
  methods: {
    adicionar() {
        this.contador++
    },
    subtrair(){
        this.contador--
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
    margin: 40px 0 0;
    }
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    display: inline-block;
    margin: 0 10px;
    }
    a {
    color: #42b983;
    }
    .contador span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }
    .contador button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }

</style>
