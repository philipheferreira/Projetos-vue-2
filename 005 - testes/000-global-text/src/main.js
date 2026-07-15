import Vue from 'vue'
import App from './App.vue'
import ComponentPai from '@/components/componentGlobal.vue' /* @ => significa 
que a pasta começara da fonte, a pasta src */

Vue.config.productionTip = false /*serve exclusivamente para 
desativar um aviso (alerta) que o próprio Vue exibe no console do navegador 
quando você está rodando a aplicação em modo de desenvolvimento. 
Se você não colocar essa linha, toda vez que abrir o console do navegador (no Chrome, Firefox, etc.), verá a seguinte mensagem em amarelo:

"You are running Vue in development mode. Make sure to turn on production 
mode when deploying for production. See more tips at https://vuejs.org/guide/deployment.html"
*/

Vue.component('app-pai', ComponentPai); /* Renderiza todos os componentes colocados,
nesse contexto renderiza o component especificado globalmente, nao precisando
mais declaralo localmente para funcionar */

new Vue({
  render: h => h(App),
}).$mount('#app') /* Cria a instancia vue usando como base o app como aplicacao
principal, por isso todas as chamadas serao utilizando o app. A instancia new Vue
ser criada apontando e alocando tudo para o arquivo vue App */
