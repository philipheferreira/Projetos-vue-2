<template>
    <div class="container">
        <slot>
        </slot> <!-- Declarando um slot sem nome para receber a chamada do outro component -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container button{
        color: blueviolet;
        background-color: blue;
    }
</style>