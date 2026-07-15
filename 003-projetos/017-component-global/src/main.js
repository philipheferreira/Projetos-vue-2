import Vue from 'vue'
import App from './App.vue'
import CompPai from '@/components/componentPai.vue' // @ => significa que a pasta começara da fonte, a pasta src

Vue.config.productionTip = false

Vue.component('app-pai', CompPai) // O componentPai é criado na renderização do Vue, e ganhou o nome de app-pai

new Vue({
  render: h => h(App),
}).$mount('#app')
