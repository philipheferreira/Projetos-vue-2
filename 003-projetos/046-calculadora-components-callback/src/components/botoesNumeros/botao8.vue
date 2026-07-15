<template>
    <div>
        <button @click="pressionarFn(8)">8</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoOitoComponent',
        props: {pressionarFn: Function}
    }
</script>

<style scoped>

</style>