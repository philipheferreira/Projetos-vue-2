<template>
    <div>
        {{ infoFilho }} <!-- Imprimindo valor do filho que o pai recebeu -->
    </div>
</template>

<script>
export default {
    name: 'componentFilho',
    props: ['infoFilho']
}
</script>

<style>

</style>