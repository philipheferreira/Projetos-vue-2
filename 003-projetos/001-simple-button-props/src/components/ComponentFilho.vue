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
    }
</script>

<style scoped>

</style>