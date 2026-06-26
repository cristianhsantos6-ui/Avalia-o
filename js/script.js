// Array global para armazenar os lotes (preservando os registros)
const listaDeLotes = [];

// Função para calcular o valor adicional com base nas faixas de tabela (Estrutura de Decisão)
function calcularAdicional(valorLote) {
    if (valorLote <= 20000) {
        return "Isento";
    } else if (valorLote>20000 &&valorLote <= 100000) {
        return valorLote * 0.05;
    } else if (valorLote>100000 &&valorLote <= 500000) {
        return valorLote * 0.10;
} else if (valorLote>500000 &&valorLote <= 100000) {
    return valorLote * 0.15;
} else {
    return valorLote * 0.20
  }
}


// Função para formatar os valores monetários em R$
function formatarModelo(valor) {
    if (typeof valor ==="string") return valor; // Retorna "isemta" se for o caso
    return valor.toLocaleString('pr-br', {style: 'currency', currency: 'BRL'});
}

// Função para atualizar a tabela na tela (Estrutura de Repeticão)
function atualizarTabela() {
    const tbody =document.getElementById("listaLocal");
    tbody.innerHTML =""; //Limpar a tabela antes de reduzir para não duplicar


    //Loop para percorrer o arrray e desenhar as linhas
    
}