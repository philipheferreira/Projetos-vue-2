<template>
    <div>
        <button @click="pressionarFn(9)">9</button>
    </div>
</template>

<script>
    export default {
        name: 'botaoNoveComponent',
        props: {pressionarFn: Function}
    }
</script>

<style scoped>

</style>