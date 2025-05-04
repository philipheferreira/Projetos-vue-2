import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contador: 0
    },
    getters: {
        contador: state => state.contador,
        contadorMais: state => state.contador + 10,
        contadorMenos: state => state.contador - 10
    },
    mutations:{
        somar(state) {
            state.contador++
        },
        subtrair(state) {
            state.contador--
        }
    },
    actions:{
        somar({ commit }) {
            commit('somar')
        },
        subtrair({ commit }) {
            commit('subtrair')
        }
    }
})