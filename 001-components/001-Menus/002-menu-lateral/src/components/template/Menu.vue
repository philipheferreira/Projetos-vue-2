<template>
    <div>
        <!-- Botão Hamburger (Visível apenas no Mobile) -->
        <button class="menu-toggle" @click="menuAberto = !menuAberto">
            {{ menuAberto ? '✕' : '☰' }}
        </button>

        <!-- Fundo escuro ao abrir o menu no mobile -->
        <div class="menu-overlay" v-if="menuAberto" @click="menuAberto = false"></div>

        <!-- Menu Lateral -->
        <nav class="menu" :class="{ 'menu-aberto': menuAberto }">
            <ul>
                <!-- O @click.native fecha o menu no mobile quando clica no link -->
                <router-link to="/" tag="li" active-class="active" exact @click.native="menuAberto = false">
                    <a>Home</a>
                </router-link>
                <router-link to="/usuario" tag="li" active-class="active" @click.native="menuAberto = false">
                    <a>Usuarios</a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name: 'componentMenu',
        data() {
            return {
                menuAberto: false // Controla se o menu está aberto ou fechado
            }
        }
    }
</script>

<style scoped>
/* Botão de abrir/fechar (escondido em telas grandes) */
.menu-toggle {
    display: block;
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 1100;
    background-color: #333;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
}

/* Fundo escuro transparente atrás do menu */
.menu-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

/* O Menu Lateral em si */
.menu {
    position: fixed;
    top: 0;
    left: -250px; /* Escondido fora da tela */
    width: 250px;
    height: 100vh; /* Ocupa a altura toda da tela */
    background-color: #333;
    transition: left 0.3s ease; /* Animação de deslizar */
    z-index: 1000;
    padding-top: 60px; /* Desce um pouco para não cobrir o botão ☰ */
}

/* Classe adicionada quando o menu está aberto */
.menu.menu-aberto {
    left: 0;
}

/* Estilos da lista (agora vertical) */
.menu ul {
    display: flex;
    flex-direction: column; /* Muda de linha para coluna */
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu li {
    border-bottom: 1px solid #444; /* Separador entre os itens */
}

.menu a {
    display: block;
    padding: 20px;
    text-decoration: none;
    font-weight: 600;
    color: #FFF;
}

.menu .active {
    background-color: #2392f0;
    border-left: 4px solid #fff; /* Detalhe visual mostrando a página atual */
}

/* ========================================= */
/* RESPONSIVIDADE (Para Telas Maiores/Desktop) */
/* ========================================= */
@media (min-width: 768px) {
    .menu-toggle {
        display: none; /* Esconde o botão ☰ no desktop */
    }
    .menu-overlay {
        display: none; /* Esconde o fundo escuro no desktop */
    }
    .menu {
        position: relative; /* Volta a ficar dentro do fluxo do site */
        left: 0; /* Sempre visível */
        width: 220px; /* Largura fixa da sidebar no desktop */
        height: auto; /* Altura automática conforme conteúdo */
        padding-top: 0;
    }
}
</style>