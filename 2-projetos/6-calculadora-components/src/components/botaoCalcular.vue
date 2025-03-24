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
                let novoValor = this.DisplayLocal
                this.$emit('calcular', eval(novoValor))
            } catch (e) {
                let novoValor = 'erro'
                this.$emit('calcular', novoValor)
            }
        }
      }
  }
  </script>
  
  <style>
  
  
  </style>