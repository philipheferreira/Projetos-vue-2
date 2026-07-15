<template>
    <div>
        {{ nomeLocal1 }}
        {{ nomeLocal2 }}
        {{ nomeLocal3 }}
        {{ nomeLocal4 }}
    </div>
</template>

<script >
    export default{
        name: 'componentFilho',
        props: {
            nomeLocal1: [String, Array], // Defini que o props nomeLocal está esperando receber uma string ou um array. Se receber algo além disso retornará erro no console
            nomeLocal2: {
                type: String, // está esperando receber uma string
                required: true // é um valor esperado, logo obrigatorio
            },
            nomeLocal3: {
                type: String,
                default: 'Anonimo' // quando um valor não for recebido nesse props ele ira retornar o valor dentro de anonimo na pagina
            },
            nomeLocal4: {
                type: Number,
                default: function() { // o default pode retornar funções também que funcionam repassando o valor para o props em questão
                    return Array(10).fill(0).join(',')
                }
            }
        }
    }
</script>

/* Ao usar a sintaxe de objeto, você pode tirar proveito das funcionalidades avançadas do Vue 2.
Tipos aceitos no Vue 2: String, Number, Boolean, Array, Object, Date, Function, Symbol, ou 
qualquer construtor personalizado. */

<style scoped>

</style>