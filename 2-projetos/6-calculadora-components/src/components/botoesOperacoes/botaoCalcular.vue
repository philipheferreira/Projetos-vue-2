<template>
    <div>
      <button @click="calcular">=</button>
    </div>
  </template>
  
  <script>
  export default {
      name: 'botaoCalcularComponente',
      props: {
          displayLocal: String
      },
      methods: {
        calcular(){
            try {
                let novoValor = this.displayLocal
                let aux = eval(novoValor)
                novoValor = aux
                this.$emit('calcular', novoValor)
            } catch (e) {
                let novoValor = 'erro'
                this.$emit('calcular', novoValor)
            }
        }
      }
  }
  </script>
  
  <style scoped>
    button{
          cursor: pointer;
          width: 71.25px;
          height: 30px;
    }
</style>