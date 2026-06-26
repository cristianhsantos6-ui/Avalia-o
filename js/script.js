// Array obrigatório para preservar os registros
const listaDeLotes = [];

// Função auxiliar apenas para formatação visual de moeda
function formatarMoeda(valor) {
    if (typeof valor === "string") return valor; // Retorna "Isento"
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Estrutura de Repetição para atualizar a tabela na tela
function atualizarTabela() {
    const tbody = document.getElementById("listaLotes");
    tbody.innerHTML = ""; // Limpa para evitar duplicados

    for (let i = 0; i < listaDeLotes.length; i++) {
        const lote = listaDeLotes[i];
        const linha = document.createElement("tr");
        
        linha.innerHTML = `
            <td>${lote.descricao}</td>
            <td>${lote.comprimento} m</td>
            <td>${lote.largura} m</td>
            <td>${lote.area.toFixed(2)} m²</td>
            <td>${formatarMoeda(lote.valorBase)}</td>
            <td>${formatarMoeda(lote.valorAdicional)}</td>
        `;
        tbody.appendChild(linha);
    }
}

// Ouvinte do formulário
document.getElementById("formLote").addEventListener("submit", function(event) {
    event.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const comprimento = parseFloat(document.getElementById("Comprimento").value);
    const largura = parseFloat(document.getElementById("Largura").value);

    // CHAMADA DAS FUNÇÕES que estão no arquivo calculos.js
    const area = calcularArea(comprimento, largura);
    const valorBase = calcularValorBase(area);
    const valorAdicional = calcularAdicional(valorBase);

    // Armazenando o lote no Array
    listaDeLotes.push({
        descricao,
        comprimento,
        largura,
        area,
        valorBase,
        valorAdicional
    });

    atualizarTabela();
    document.getElementById("formLote").reset();
});