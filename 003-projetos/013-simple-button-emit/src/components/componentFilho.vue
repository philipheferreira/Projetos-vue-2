<template>
    <div>
        {{ nomeLocalComponentFilho }}
    </div>
</template>

<script>
    export default{
        name: 'componentFilho',
        props: {
            nomeLocalComponentFilho: String
        }
    }
</script>

<style lang="scss" scoped>

</style>