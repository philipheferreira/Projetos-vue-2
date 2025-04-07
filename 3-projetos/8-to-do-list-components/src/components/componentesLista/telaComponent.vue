<!-- Levando em consideração que o arquivo input só envia a informação ele não precisa receber nada de um component externo, só mandar -->

<template>
    <div>
        <input v-model="novaTarefa" placeholder="Nova Tarefa" @keyup.enter="adicionarTarefasLocal"/> <!--O v-model linka o valor dentro do input com a variavel local 
        novaTarefa, e o keyup.enter aciona o metodo adicionarTarefasLocal-->
        <button @click="adicionarTarefasLocal">Adicionar</button>
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
    methods: {
        adicionarTarefasLocal() {
            if (this.novaTarefa.trim() !== '') {
                this.$emit('adicionar-tarefas-local', this.novaTarefa); // conecta o metodo local e repassa a variavel para o metodo no componente pai
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