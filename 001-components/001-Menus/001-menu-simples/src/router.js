import Vue from 'vue'
import Router from 'vue-router' // para utilizar a biblioteca de rotas do vuue instalar 
import Inicio from './components/inicio.vue'
import Usuario from './components/usuario/usuario.vue'

Vue.use(Router)//ativa os comandos de vue e encapsulando os comandos da biblioteca rota

export default new Router({//inicializa as operações de rotas
    mode: "history",
    routes: [{
        path: '/',//rota
        component: Inicio//Component importado ativado quando acessado a rota
    }, {
        path: '/usuario',
        component: Usuario
    }]
})