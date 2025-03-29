<!-- Levando em consideração que o arquivo input só envia a informação ele não precisa receber nada de um component externo, só mandar -->

<template>
    <div>
        <input v-model="novaTarefa" placeholder="Nova Tarefas" @keyup.enter="adicionarTarefas"/>
    </div>
</template>

<script>
export default {
    name: 'componenteTela',
    data () {
        return {
            novaTarefa: ''
        }
    },
    methods: {
        adicionarTarefas(){
            if(this.novaTarefa.trim() !== ''){
                this.$emit('adicionar-tarefas', this.novaTarefa)
                this.novaTarefa = ''
            }else if(this.novaTarefa.trim() == ''){
                alert('Por favor digite uma tarefa para ser adicionada')
            }
        }
    }
}
</script>

<style>

</style>