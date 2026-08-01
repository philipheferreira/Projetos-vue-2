<template>
  <!-- O template agora é o que antes estava dentro de <div id="app"> -->
  <div id="app">
    <header>
      <h1>Tarot</h1>
      <p class="subtitle">O universo fala através dos símbolos.</p>
    </header>

    <!-- MENU -->
    <nav class="menu">
      <a 
        href="#" 
        :class="{ 'active-link': currentView === 'info' }" 
        @click.prevent="currentView = 'info'"
      >
        Sobre Tarot
      </a>
      <a 
        href="#" 
        :class="{ 'active-link': currentView === 'game' }" 
        @click.prevent="currentView = 'game'"
      >
        Jogar as cartas
      </a>
    </nav>

    <main> 
      <!-- PÁGINA INFORMATIVA -->
      <section v-if="currentView === 'info'" class="page">
        <div class="info-content">
          <article>
            <h2>O que é o Tarot?</h2>
            <p>O Tarot é uma ferramenta milenar composta por 78 cartas, utilizada para reflexão, meditação e busca de autoconhecimento. Ele não prevê o futuro de forma fixa, mas oferece insights sobre o momento presente e as energias que cercam uma situação.</p>
          </article>
          <article>
            <h2>História e Origem</h2>
            <p>As origens exatas do Tarot são misteriosas, mas registros indicam seu surgimento na Europa no século XV, inicialmente como um jogo de nobres chamado "Tarocchini". Com o tempo, cartomantes e ocultistas começaram a usar as imagens simbólicas dos Arcanos Maiores para interpretações espirituais. O Tarot de Marselha é um dos mais antigos e populares até hoje.</p>
          </article>
          <article>
            <h2>Como Jogar?</h2>
            <ol>
              <li><strong>Concentre-se:</strong> Antes de começar, respire fundo e pense em uma pergunta ou apenas peça uma orientação geral para o dia.</li>
              <li><strong>Intuição:</strong> Não tente racionalizar. Olhe para as cartas viradas para baixo e veja qual delas "puxa" seu olhar ou sua energia.</li>
              <li><strong>Significado:</strong> A carta escolhida reflete um arquétipo ou energia que está ativa na sua vida agora.</li>
            </ol>
          </article>
          <article>
            <h2>O Baralho (Arcanos Maiores)</h2>
            <p>Conheça as 22 cartas utilizadas neste jogo e seus significados básicos:</p>
            <div class="card-grid">
              <div class="info-card" v-for="card in tarotData" :key="card.id">
                <img :src="card.imagem" :alt="card.name" @error="fallbackImage($event, card.id)">
                <h4>{{ card.id }}. {{ card.name }}</h4>
                <p>{{ card.meaning }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- PÁGINA DO JOGO -->
      <section v-if="currentView === 'game'" class="page">
        <div id="telaDeInicio" class="screen" v-show="gameState === 'start'">
          <div style="text-align: center; max-width: 600px;">
            <p style="margin-bottom: 30px; font-size: 1.1rem; line-height: 1.6;">
              O universo tem uma mensagem para você hoje.<br>
              Deixe sua intuição guiar sua mão. O destino aguarda sua escolha.
            </p>
            <button class="btn-magic" @click="iniciarJogo">Revelar Seu Destino</button>
          </div>
        </div>

        <div id="telaDeJogo" class="screen" v-show="gameState === 'playing'">
          <p style="margin-bottom: 20px; color: var(--accent-color); font-size: 0.9rem;">Clique na carta que chamar sua atenção...</p>
          <div id="card-container">
            <div 
              class="card-wrapper" 
              v-for="(card, index) in displayedCards" 
              :key="'game-' + card.id"
              :class="{ 
                'flipped': flippedCardId === card.id, 
                'dimmed': flippedCardId !== null && flippedCardId !== card.id 
              }"
              :style="{ animation: `fadeIn 0.5s ease forwards ${index * 0.1}s`, opacity: '0' }"
              @click="selecionarCarta(card)"
            >
              <div class="card-inner">
                <div class="card-front">
                  <img :src="card.imagem" :alt="card.name" @error="fallbackImage($event, 'erro')">
                  <span>{{ card.name }}</span>
                </div>
                <div class="card-back"></div>
              </div>
            </div>
          </div>
          <button class="btn-magic" style="margin-top: 40px; font-size: 0.9rem; padding: 10px 20px;" @click="resetarJogo">Embaralhar Novamente</button>
        </div>
      </section>
    </main>

    <!-- MODAL -->
    <div id="result-modal" class="modal-overlay" :class="{ open: isModalOpen }">
      <div class="modal-content">
        <img :src="selectedCard.imagem" :alt="selectedCard.name" class="modal-card-image" @error="fallbackImage($event, selectedCard.id)">
        <h2 class="modal-title">{{ selectedCard.name }}</h2>
        <p class="modal-meaning">{{ selectedCard.meaning }}</p>
        <button class="btn-magic" @click="isModalOpen = false">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
// Em componentes .vue, nós EXPORTAMOS um objeto javascript, ao invés de usar "new Vue()"
export default {
  name: 'App',
  // ATENÇÃO: No Vue CLI, o "data" SEMPRE deve ser uma função que retorna um objeto!
  data() {
    return {
      currentView: 'info',
      gameState: 'start',
      isModalOpen: false,
      flippedCardId: null,
      selectedCard: {},
      displayedCards: [],
      tarotData: [
        { id: 0, name: "O Louco", meaning: "Novos começos, aventuras e um salto de fé.", imagem: "img/0-oLouco.webp" },
        { id: 1, name: "O Mago", meaning: "Manifestação, poder criativo e habilidade.", imagem: "img/1-oMagico.webp" },
        { id: 2, name: "A Sacerdotisa", meaning: "Intuição, mistério e sabedoria interior.", imagem: "img/2-aAltaSacerdotisa.jpg" },
        { id: 3, name: "A Imperatriz", meaning: "Fertilidade, criatividade e abundância.", imagem: "img/3-aImperatriz.webp" },
        { id: 4, name: "O Imperador", meaning: "Estrutura, autoridade e estabilidade.", imagem: "img/4-oImperador.webp" },
        { id: 5, name: "O Hierofante", meaning: "Tradição, conformidade e moralidade.", imagem: "img/5-oHierofante.webp" },
        { id: 6, name: "Os Enamorados", meaning: "Amor, harmonia e escolhas de valor.", imagem: "img/6-osAmantes.webp" },
        { id: 7, name: "O Carro", meaning: "Controle, vontade e vitória.", imagem: "img/7-aCarruagem.png" },
        { id: 8, name: "A Força", meaning: "Coragem, persuasão e compaixão.", imagem: "img/8-Forca.webp" },
        { id: 9, name: "O Eremita", meaning: "Busca da alma e introspecção.", imagem: "img/9-oEremita.webp" },
        { id: 10, name: "Roda da Fortuna", meaning: "Ciclos de vida, destino e viradas.", imagem: "img/10-rodaDaFortuna.webp" },
        { id: 11, name: "A Justiça", meaning: "Justiça, imparcialidade e verdade.", imagem: "img/11-justica.webp" },
        { id: 12, name: "O Enforcado", meaning: "Pausa, rendição e novas perspectivas.", imagem: "img/12-oEnforcado.png" },
        { id: 13, name: "A Morte", meaning: "Fim de um ciclo e transformação.", imagem: "img/13-morte.webp" },
        { id: 14, name: "A Temperança", meaning: "Equilíbrio, moderação e propósito.", imagem: "img/14-temperanca.webp" },
        { id: 15, name: "O Diabo", meaning: "Vício, materialismo e apego.", imagem: "img/15-oDiabo.webp" },
        { id: 16, name: "A Torre", meaning: "Mudança repentina e revelação.", imagem: "img/16-aTorre.webp" },
        { id: 17, name: "A Estrela", meaning: "Esperança, fé e espiritualidade.", imagem: "img/17-aEstrela.webp" },
        { id: 18, name: "A Lua", meaning: "Ilusão, medo e o inconsciente.", imagem: "img/18-aLua.webp" },
        { id: 19, name: "O Sol", meaning: "Positividade, sucesso e vitalidade.", imagem: "img/19-oSol.jpg" },
        { id: 20, name: "O Julgamento", meaning: "Renascimento, chamado interior e perdão.", imagem: "img/20-julgamento.webp" },
        { id: 21, name: "O Mundo", meaning: "Conclusão, integração e realização.", imagem: "img/21-oMundo.webp" }
      ]
    }
  },
  methods: {
    embaralhar(array) {
      let currentIndex = array.length, randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    },
    iniciarJogo() {
      this.gameState = 'playing';
      this.flippedCardId = null;
      const shuffledDeck = this.embaralhar([...this.tarotData]);
      this.displayedCards = shuffledDeck.slice(0, 12);
    },
    selecionarCarta(card) {
      if (this.flippedCardId !== null) return;
      this.flippedCardId = card.id;
      this.selectedCard = card;
      setTimeout(() => {
        this.isModalOpen = true;
      }, 800);
    },
    resetarJogo() {
      this.isModalOpen = false;
      this.gameState = 'start';
      this.flippedCardId = null;
      this.displayedCards = [];
    },
    fallbackImage(event, id) {
      event.target.src = `https://picsum.photos/seed/${id}/150/200`;
    }
  }
}
</script>

<!-- O CSS vai aqui dentro. Não colocamos a tag <style scoped> porque usamos variáveis globais no :root -->
<style>
/* ================= SEU CSS ORIGINAL AQUI ================= */
:root {
    --primary-color: #6a1b9a;
    --secondary-color: #4a148c;
    --accent-color: #ffd700;
    --text-color: #f3e5f5;
    --card-width: 120px;
    --card-height: 200px;
    --bg-gradient: radial-gradient(circle at center, #4a148c 0%, #1a0033 100%);
}
* { box-sizing: border-box; margin: 0; padding: 0; }

.menu {
    position: sticky; top: 0; z-index: 100;
    background-color: rgba(26, 0, 51, 0.7); 
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 215, 0, 0.3);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    padding: 15px 0; display: flex; justify-content: center;
    gap: 50px; transition: all 0.3s ease;
}
.menu a {
    color: var(--text-color); text-decoration: none; font-size: 1.1rem;
    font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px;
    padding: 5px 10px; transition: all 0.3s ease; position: relative; cursor: pointer;
}
.menu a::after {
    content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 50%;
    background-color: var(--accent-color); transition: all 0.3s ease;
    transform: translateX(-50%); box-shadow: 0 0 8px var(--accent-color);
}
.menu a:hover { color: var(--accent-color); text-shadow: 0 0 8px rgba(255, 215, 0, 0.6); }
.menu a:hover::after { width: 100%; }
.menu a.active-link { color: var(--accent-color); text-shadow: 0 0 8px rgba(255, 215, 0, 0.6); }
.menu a.active-link::after { width: 100%; }

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--bg-gradient); color: var(--text-color);
    min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden;
}
header { text-align: center; padding: 2rem 1rem 0.5rem 1rem; }
h1 {
    font-size: 2.5rem; color: var(--accent-color);
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); margin-bottom: 0.5rem;
    font-family: 'Times New Roman', serif;
}
p.subtitle { font-size: 1rem; opacity: 0.8; font-style: italic; }

main { flex: 1; padding: 0 20px 40px 20px; width: 100%; max-width: 1200px; margin: 0 auto; }
.page { animation: fadeIn 0.5s ease; }

.info-content {
    background: rgba(0, 0, 0, 0.4); padding: 40px; border-radius: 20px;
    border: 1px solid rgba(255, 215, 0, 0.2); line-height: 1.8; color: #e1bee7;
}
.info-content article { margin-bottom: 40px; user-select: text; }
.info-content h2 {
    color: var(--accent-color); font-size: 1.8rem; margin-bottom: 15px;
    border-bottom: 1px solid var(--accent-color); padding-bottom: 5px; display: inline-block;
}
.info-content p { font-size: 1.1rem; margin-bottom: 10px; }
.info-content ol { margin-left: 25px; font-size: 1.1rem; }
.info-content li { margin-bottom: 10px; }
.card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 20px; margin-top: 20px; }
.info-card {
    background: rgba(255, 255, 255, 0.05); border: 1px solid var(--accent-color);
    border-radius: 10px; padding: 10px; text-align: center; transition: transform 0.3s;
}
.info-card:hover { transform: translateY(-5px); background: rgba(255, 255, 255, 0.1); }
.info-card img { width: 100%; height: 140px; object-fit: cover; border-radius: 5px; margin-bottom: 8px; border: 1px solid rgba(255,255,255,0.2); }
.info-card h4 { color: var(--accent-color); font-size: 0.9rem; margin-bottom: 5px; min-height: 2.2em; }
.info-card p { font-size: 0.8rem; line-height: 1.4; color: #ce93d8; }

.screen { display: none; flex-direction: column; align-items: center; width: 100%; }
.btn-magic {
    background: linear-gradient(45deg, var(--accent-color), #ffca28); border: none;
    padding: 15px 40px; font-size: 1.2rem; color: var(--secondary-color);
    font-weight: bold; border-radius: 50px; cursor: pointer;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.4); transition: transform 0.3s, box-shadow 0.3s; margin-top: 20px;
}
.btn-magic:hover { transform: scale(1.05); box-shadow: 0 0 30px rgba(255, 215, 0, 0.7); }
#card-container {
    display: flex; justify-content: center; align-items: center; flex-wrap: wrap;
    gap: 10px; perspective: 1000px; min-height: 300px; width: 100%;
}
.card-wrapper {
    width: var(--card-width); height: var(--card-height); cursor: pointer;
    position: relative; transition: transform 0.3s ease;
}
.card-wrapper:hover { transform: translateY(-20px); z-index: 10; }
.card-inner {
    position: relative; width: 100%; height: 100%; text-align: center;
    transition: transform 0.8s; transform-style: preserve-3d; border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}
.card-wrapper.flipped .card-inner { transform: rotateY(180deg); }
.card-wrapper.dimmed { opacity: 0.3; pointer-events: none; }
.card-front, .card-back {
    position: absolute; width: 100%; height: 100%;
    -webkit-backface-visibility: hidden; backface-visibility: hidden; border-radius: 15px;
    display: flex; justify-content: center; align-items: center; border: 2px solid var(--accent-color);
}
.card-back {
    background-color: #2a0a4a;
    background-image: radial-gradient(circle, var(--accent-color) 1px, transparent 1px),
    repeating-linear-gradient(45deg, rgba(255,215,0,0.1) 0, rgba(255,215,0,0.1) 1px, transparent 0, transparent 50%);
    background-size: 10px 10px, 10px 10px;
}
.card-front { background-color: #fff; color: #333; transform: rotateY(180deg); overflow: hidden; flex-direction: column; }
.card-front img { width: 100%; height: 70%; object-fit: cover; }
.card-front span { font-weight: bold; font-size: 0.9rem; margin-top: 10px; color: var(--secondary-color); padding: 0 5px; }

.modal-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.85); display: flex; justify-content: center;
    align-items: center; z-index: 1000; opacity: 0; pointer-events: none; transition: opacity 0.5s ease;
}
.modal-overlay.open { opacity: 1; pointer-events: all; }
.modal-content {
    background: linear-gradient(135deg, #4a148c, #7b1fa2); padding: 2rem; border-radius: 20px;
    text-align: center; max-width: 90%; width: 400px; border: 2px solid var(--accent-color);
    box-shadow: 0 0 50px rgba(106, 27, 154, 0.8); transform: scale(0.8);
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.modal-overlay.open .modal-content { transform: scale(1); }
.modal-card-image {
    width: 150px; height: 250px; object-fit: cover; border-radius: 10px;
    border: 3px solid var(--accent-color); margin-bottom: 1.5rem; box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}
.modal-title { color: var(--accent-color); font-size: 1.8rem; margin-bottom: 0.5rem; font-family: serif; }
.modal-meaning { font-size: 1rem; line-height: 1.6; margin-bottom: 2rem; color: #fff; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 600px) {
    :root { --card-width: 90px; --card-height: 150px; }
    #card-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .card-wrapper:hover { transform: none; }
    .info-content { padding: 20px; }
    .modal-card-image { width: 100px; height: 180px; }
    .menu { gap: 20px; padding: 10px 0; }
    .menu a { font-size: 0.9rem; letter-spacing: 1px; }
}
</style>