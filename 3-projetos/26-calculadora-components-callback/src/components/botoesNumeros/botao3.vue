<template>
    <div>
        <button @click="pressionarFn(3)">3</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoTresComponent',
        props: {pressionarFn: Function}
    }
</script>

<style scoped>

</style>