
<template>
    <div>
        <input v-model="novaTarefa" placeholder="Nova Tarefa" @keyup.enter="adicionarTarefasLocal"/> 
        <button @click="adicionarTarefasLocal">Adicionar</button> <!-- O click direciona para a tarefa local -->
    </div>
</template>

<script>
export default {
    name: 'ComponenteTela',
    data() {
        return {
            novaTarefa: '' // variavel dentro do componente que recebe o valor digitado no input
        };
    },
    props: {
        adicionarTarefasLocalCallback: Function
    },
    methods: {
        adicionarTarefasLocal() {
            if (this.novaTarefa.trim() !== '') {
                // 2. Em vez de $emit, chamasse a funcao passada na prop
                this.adicionarTarefasLocalCallback(this.novaTarefa); /* A adicionarTarefasLocal usa a callback criada localmente para mandar a informacao para o component pai */

                this.novaTarefa = '';
            } else {
                alert('Por favor, digite uma tarefa para ser adicionada');
            }
        }
    }
};
</script>

<style scoped>
input {
    width: 100%;
    padding: 5px;
    margin-top: 10px;
}
</style>