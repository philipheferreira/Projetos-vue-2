<template>
    <div>
        <h2>To-Do List</h2>
        <input v-model="novaTarefa" @keyup.enter="adicionarTarefas" placeholder="Nova tarefa"/>
        <ul>
            <li v-for="tarefa in tarefas" :key="tarefa">
                {{ tarefas }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name: 'listaComponent',
        data() {
            return{
                tarefas: ['Comprar Arroz', 'Estudar um pouco de vue', 'Correr 30 minutos'],
                novaTarefa: ''
            }
        },
        methods:{
            adicionarTarefas(){
                if(this.novaTarefa.trim() !== ''){
                    this.tarefas.push(this.novaTarefa)
                    this.novaTarefa = ''
                }else if(this.novaTarefa.trim() == ''){
                    alert('Por favor digite uma tarefa para ser adicionada')
                }
            }
        }
    }
</script>

<style scoped>

</style>