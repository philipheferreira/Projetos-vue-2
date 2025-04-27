<template>
    <div>
        <p> {{ mensagem }} </p>
    </div>
</template>

<script>
export default {
    name: 'createdComponent',
    created(){
        console.log("O componente foi criado!")
        this.mensagem = "Bem- vindo ao Vue!"
    },
    data () {
        return {
            mensagem: ""
        }
    }
}
</script>

<style>

</style>

<!--

🔹 O que acontece aqui?
O Vue cria a instância do componente.

O hook created é chamado (antes do mounted).

Podemos acessar data e methods normalmente dentro do created.

O DOM ainda não está disponível, então manipulações diretas do DOM não funcionam aqui.

-->


<!--  

🔄 Diferença entre created e mounted
Hook	Quando é chamado?	Acesso ao DOM?	Uso recomendado
created	Após a criação do componente, mas antes de ser montado no DOM	❌ Não	Inicializar dados, chamar APIs
mounted	Após a inserção do componente no DOM	✅ Sim	Manipulação do DOM, inicializar plugins

-->