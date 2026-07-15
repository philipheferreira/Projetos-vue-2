<template>
    <div>
        <button @click="resetFn">Reset</button>
    </div>
</template>

<script>

    export default{
        name:'botaoResetComponent',
        props: { resetFn: Function}
    }

</script>

<style scoped>

</style>