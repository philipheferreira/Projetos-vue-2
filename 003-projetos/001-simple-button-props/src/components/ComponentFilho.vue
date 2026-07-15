<template>
    <div>
        {{ nomeLocal }} <!-- Chamando props dentro do componte filho que tem o valor declarado dentro do componente pai -->
    </div>
</template>

<script >
    export default {
        name: 'ComponentFilho',
        props: {
            nomeLocal: String // declarando props dentro do filho para ser usado que recebe valor que vem do pai
        }
        /* usei um array simples props: ['mensagem']. Isso funciona, mas é uma prática fraca para projetos 
reais. O recomendado no Vue 2 é usar a sintaxe de objeto, pois permite validação */
    }
</script>


/*
No Vue 2, uma prop nunca deve ser alterada pelo componente filho. 
Se o filho tentar fazer this.mensagem = 'Novo texto', o Vue emitirá um aviso no console.

Por que essa regra existe?
Para evitar que o filho modifique o estado do pai de forma imprevisível, o que dificulta muito 
o rastreamento de bugs.

*/

<style scoped>

</style>