<template>
    <div class="calculadora-container">
        <h2>Cálculo de Tempo de Reverberação</h2>
        <p class="descricao">
            Baseado na Fórmula de Sabine (RT60). Ideal para avaliar a acústica de salas, auditórios e ambientes internos.
        </p>
        
        <div class="formula-box">
            <strong>Fórmula:</strong> T60 = (0.161 * V) / A<br>
            <small>Onde V = Volume (m³) e A = Absorção Total (m² Sabine)</small>
        </div>

        <!-- 1. DIMENSÕES DO AMBIENTE -->
        <h3 class="section-title">1. Dimensões do Ambiente</h3>
        <div class="input-grid">
            <div class="form-group">
                <label for="comprimento">Comprimento (m):</label>
                <input type="number" id="comprimento" v-model.number="comprimento" placeholder="Ex: 10" min="0.1" step="0.1">
            </div>
            <div class="form-group">
                <label for="largura">Largura (m):</label>
                <input type="number" id="largura" v-model.number="largura" placeholder="Ex: 8" min="0.1" step="0.1">
            </div>
            <div class="form-group">
                <label for="altura">Altura (m):</label>
                <input type="number" id="altura" v-model.number="altura" placeholder="Ex: 3" min="0.1" step="0.1">
            </div>
        </div>

        <!-- 2. COEFICIENTES DE ABSORÇÃO -->
        <h3 class="section-title">2. Coeficientes de Absorção (α)</h3>
        <p class="descricao">Valores entre 0 (reflete tudo) e 1 (absorve tudo). Ex: Alvenaria ~0.02, Teto acústico ~0.85, Cortina pesada ~0.70.</p>
        
        <div class="input-grid">
            <div class="form-group">
                <label for="alfaPiso">Piso (α):</label>
                <input type="number" id="alfaPiso" v-model.number="alfaPiso" placeholder="Ex: 0.1" min="0" max="1" step="0.01">
            </div>
            <div class="form-group">
                <label for="alfaParedes">Paredes (α):</label>
                <input type="number" id="alfaParedes" v-model.number="alfaParedes" placeholder="Ex: 0.05" min="0" max="1" step="0.01">
            </div>
            <div class="form-group">
                <label for="alfaTeto">Teto (α):</label>
                <input type="number" id="alfaTeto" v-model.number="alfaTeto" placeholder="Ex: 0.8" min="0" max="1" step="0.01">
            </div>
        </div>

        <button @click="calcular" class="btn-calcular">Calcular RT60</button>

        <!-- Área de Resultado -->
        <div v-if="resultado !== null" class="resultado-box">
            <h3>Resultado do Projeto:</h3>
            <div class="dados-calculados">
                <p>Volume (V): <strong>{{ volumeCalculado.toFixed(2) }} m³</strong></p>
                <p>Absorção Equivalente (A): <strong>{{ absorcaoCalculada.toFixed(2) }} m²</strong></p>
            </div>
            <hr>
            <p>Tempo de Reverberação (T60):</p>
            <span class="valor-resultado">{{ resultado.toFixed(2) }} segundos</span>
            
            <div class="avaliacao" :class="classificacaoCor">
                <strong>Classificação:</strong> {{ classificacaoTexto }}
            </div>
        </div>

        <!-- Área de Erro -->
        <div v-if="erro" class="erro-box">
            {{ erro }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalculadoraAcustica',
    data() {
        return {
            // Dimensões
            comprimento: null,
            largura: null,
            altura: null,
            // Coeficientes
            alfaPiso: null,
            alfaParedes: null,
            alfaTeto: null,
            // Resultados
            volumeCalculado: 0,
            absorcaoCalculada: 0,
            resultado: null,
            erro: null,
            // Classificação
            classificacaoTexto: '',
            classificacaoCor: ''
        }
    },
    methods: {
        calcular() {
            // Limpa estados anteriores
            this.erro = null;
            this.resultado = null;

            // 1. Validação básica
            if (!this.comprimento || !this.largura || !this.altura) {
                this.erro = "Por favor, preencha todas as dimensões do ambiente.";
                return;
            }
            if (this.alfaPiso === null || this.alfaParedes === null || this.alfaTeto === null) {
                this.erro = "Por favor, preencha todos os coeficientes de absorção (α).";
                return;
            }
            if (this.comprimento <= 0 || this.largura <= 0 || this.altura <= 0) {
                this.erro = "As dimensões devem ser maiores que zero.";
                return;
            }

            // 2. Cálculo do Volume (V = C * L * A)
            this.volumeCalculado = this.comprimento * this.largura * this.altura;

            // 3. Cálculo das Áreas
            const areaPiso = this.comprimento * this.largura;
            const areaTeto = areaPiso; // Same as floor
            const areaParedes = 2 * (this.comprimento * this.altura) + 2 * (this.largura * this.altura);

            // 4. Cálculo da Absorção Equivalente (A = S1*α1 + S2*α2 + S3*α3)
            this.absorcaoCalculada = (areaPiso * this.alfaPiso) + (areaParedes * this.alfaParedes) + (areaTeto * this.alfaTeto);

            // 5. Verificação de divisão por zero (se todos os alfas forem 0)
            if (this.absorcaoCalculada === 0) {
                this.erro = "A absorção total não pode ser zero. Insira materiais que absorvam som.";
                return;
            }

            // 6. Fórmula de Sabine (T60 = 0.161 * V / A)
            this.resultado = (0.161 * this.volumeCalculado) / this.absorcaoCalculada;

            // 7. Dá uma dica de engenharia baseada no tempo de reverberação
            this.classificarAmbiente();
        },
        classificarAmbiente() {
            if (this.resultado < 0.5) {
                this.classificacaoTexto = "Muito Seco (Excesso de absorção. Comum em estúdios de gravação).";
                this.classificacaoCor = "avaliacao-ruim";
            } else if (this.resultado <= 1.0) {
                this.classificacaoTexto = "Ideal para Salas de Aula e Escritórios.";
                this.classificacaoCor = "avaliacao-otima";
            } else if (this.resultado <= 1.5) {
                this.classificacaoTexto = "Bom para Auditórios e Salas de Conferência.";
                this.classificacaoCor = "avaliacao-otima";
            } else if (this.resultado <= 2.5) {
                this.classificacaoTexto = "Adequado para Igrejas e Música Clássica.";
                this.classificacaoCor = "avaliacao-media";
            } else {
                this.classificacaoTexto = "Muito Reverberante (Ruim para fala, pode causar eco indesejado).";
                this.classificacaoCor = "avaliacao-ruim";
            }
        }
    }
}
</script>

<style scoped>
.calculadora-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.descricao {
    color: #555;
    font-size: 14px;
    margin-bottom: 15px;
}

.formula-box {
    background-color: #f4f4f4;
    border-left: 4px solid #2392f0;
    padding: 10px 15px;
    margin: 20px 0;
    font-family: monospace;
    font-size: 15px;
}

.section-title {
    margin-top: 30px;
    margin-bottom: 10px;
    color: #333;
    border-bottom: 2px solid #eee;
    padding-bottom: 5px;
}

/* Grid para colocar os inputs lado a lado */
.input-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
    font-size: 14px;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
}

.btn-calcular {
    width: 100%;
    padding: 12px;
    background-color: #2392f0;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    margin-top: 10px;
}

.btn-calcular:hover {
    background-color: #1a7ad4;
}

.resultado-box {
    margin-top: 25px;
    padding: 20px;
    background-color: #e8f5e9;
    border: 1px solid #4caf50;
    border-radius: 5px;
    text-align: center;
}

.dados-calculados {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    font-size: 15px;
}

.dados-calculados p {
    margin: 0;
}

.resultado-box hr {
    border: 0;
    border-top: 1px solid #4caf50;
    margin: 15px 0;
}

.valor-resultado {
    display: block;
    font-size: 32px;
    font-weight: bold;
    color: #2e7d32;
    margin: 10px 0;
}

.avaliacao {
    margin-top: 15px;
    padding: 10px;
    border-radius: 4px;
    font-size: 14px;
}

.avaliacao-otima { background-color: #c8e6c9; color: #2e7d32; }
.avaliacao-media { background-color: #fff9c4; color: #f57f17; }
.avaliacao-ruim { background-color: #ffcdd2; color: #c62828; }

.erro-box {
    margin-top: 20px;
    padding: 15px;
    background-color: #ffebee;
    border: 1px solid #f44336;
    color: #c62828;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
}

/* Responsividade para telas pequenas (celular) */
@media (max-width: 500px) {
    .input-grid {
        grid-template-columns: 1fr; /* Cai para uma coluna no celular */
    }
    .dados-calculados {
        flex-direction: column;
        gap: 5px;
    }
}
</style>