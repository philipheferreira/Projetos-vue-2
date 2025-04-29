import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        contador: 0
    },
    mutations: {
        somar(state) {
            state.contador++
        }
    },
    actions: {
        somar({ commit }) {
            commit('operacao Somar Realizar')
        }
    },
    getters: {
        contador: state => state.contador
    }
})

new Vue({
    store,
    render: h => h(app)
}). $mount('#app')