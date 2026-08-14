<template>
    <div class="calculadora-container">
        <h2>Calculadora de Propagação Acústica</h2>
        <p class="descricao">
            Calcula o Nível de Pressão Sonora (Lp) em campo livre a partir do Nível de Potência Sonora (Lw) da fonte.
        </p>
        
        <div class="formula-box">
            <strong>Fórmula:</strong> Lp = Lw - 20 * log₁₀(d) - 11
        </div>

        <div class="form-group">
            <label for="lw">Nível de Potência Sonora (Lw) em dB:</label>
            <input 
                type="number" 
                id="lw" 
                v-model.number="lw" 
                placeholder="Ex: 100"
            >
        </div>

        <div class="form-group">
            <label for="distancia">Distância da fonte (d) em metros:</label>
            <input 
                type="number" 
                id="distancia" 
                v-model.number="distancia" 
                placeholder="Ex: 15" 
                min="0.01" 
                step="0.1"
            >
        </div>

        <button @click="calcular" class="btn-calcular">Calcular Lp</button>

        <!-- Área de Resultado -->
        <div v-if="resultado !== null" class="resultado-box">
            <h3>Resultado:</h3>
            <p>O Nível de Pressão Sonora (Lp) no local é de:</p>
            <span class="valor-resultado">{{ resultado.toFixed(2) }} dB</span>
        </div>

        <!-- Área de Erro -->
        <div v-if="erro" class="erro-box">
            {{ erro }}
        </div>
    </div>
</template>

<script>
// No Vue 2, usamos o export default ao invés do <script setup>
export default {
    name: 'CalculadoraAcustica',
    data() {
        return {
            lw: null,       // Valor digitado pelo usuário para Lw
            distancia: null, // Valor digitado pelo usuário para distância
            resultado: null, // Onde o resultado do cálculo vai ficar
            erro: null      // Mensagem de erro, se houver
        }
    },
    methods: {
        calcular() {
            // Limpa os estados anteriores
            this.erro = null;
            this.resultado = null;

            // Validação dos campos
            if (this.lw === null || this.lw === '' || this.distancia === null || this.distancia === '') {
                this.erro = "Por favor, preencha ambos os campos.";
                return;
            }

            if (this.distancia <= 0) {
                this.erro = "A distância deve ser maior que zero.";
                return;
            }

            // Cálculo Matemático: Lp = Lw - 20 * log10(d) - 11
            // Math.log10() é a função do JavaScript para logaritmo na base 10
            const logaritmoDistancia = Math.log10(this.distancia);
            
            this.resultado = this.lw - (20 * logaritmoDistancia) - 11;
        }
    }
}
</script>

<style scoped>
/* Estilos específicos deste componente */
.calculadora-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.descricao {
    color: #555;
    font-size: 14px;
}

.formula-box {
    background-color: #f4f4f4;
    border-left: 4px solid #2392f0;
    padding: 10px 15px;
    margin: 20px 0;
    font-family: monospace;
    font-size: 16px;
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
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box; /* Faz a padding não aumentar a largura total */
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

.valor-resultado {
    display: block;
    font-size: 28px;
    font-weight: bold;
    color: #2e7d32;
    margin-top: 10px;
}

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
</style>