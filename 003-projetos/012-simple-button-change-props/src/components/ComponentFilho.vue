/* 
A Regra de Ouro: Fluxo de Dados Unidirecional
No Vue 2, uma prop nunca deve ser alterada pelo componente filho. Se o filho tentar fazer this.mensagem = 'Novo texto', o Vue emitirá um aviso no console.

Por que essa regra existe?
Para evitar que o filho modifique o estado do pai de forma imprevisível, o que dificulta muito o rastreamento de bugs.

Como resolver se eu precisar alterar o dado?
Você tem duas opções principais no Vue 2:

Opção A: Usar uma variável local (Data) baseada na prop

Opção B: Usar uma Prop como valor inicial e computá-la (Computed)
*/

<template>
    <div>
        {{ nomeLocalComponentFilho }}
    </div>
</template>

<script>
    export default{
        name: 'componentFilho',
        props: {
            nomeLocalComponentFilho: String // declarando props dentro do filho para ser usado que recebe valor que vem do pai
        }
    }
</script>

<style lang="scss" scoped>

</style>