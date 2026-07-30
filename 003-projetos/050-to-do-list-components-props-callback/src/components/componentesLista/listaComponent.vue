
<template>
    <div>
        <ul>
            <li v-for="(tarefaLocal, index) in listaTarefasLocal" :key="index">
                {{ tarefaLocal }}
                <button @click="removerTarefaLocalCallback(index)">X</button>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'listaComponent',
        props: {
            listaTarefasLocal: Array,
            removerTarefaLocalCallback: Function
        } 
        /* Nao preciso mais do $emit porque a callback esta sendo a chamada de direcionamento */
    }

</script>

<style scoped>

    ul {
        list-style: none; /* Tira os pontos */
         padding: 0;
    }
    li {
        display: flex;
        justify-content: space-between;
        padding: 5px;
        border-bottom: 1px solid #ddd;
    }

</style>