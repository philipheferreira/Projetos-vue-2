import Vue from 'vue'
export default new Vue({
    methods: {
        alterarNome(nome){ // essa função realiza o evento
            this.$emit('comando-alterar-nome', nome)
        },
        quandoNomeMudar(callback){ // essa função registra quando o evento tem que aconteceer
            this.$on('comando-alterar-nome', callback) 
        }
    }
})