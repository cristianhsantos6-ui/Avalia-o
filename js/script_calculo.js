/** 
 * Calcula a área do lote com base no comprimento e largura
*/
function calculoArea(comprimento, largura){
    return comprimento * largura;
}

/**
 * Define o valor base do lote multiplicando o valor da área pela região
 */
function calcularValorBase(area) {
    return area * 550.00;
}

/**
 * Definir o valor adicional com base nas faixas
 */
function calcularAdicional(valorLote) {
    if(valorLote <=20000){
        return "Isento";
    } else if (valorLote <=100000){
        return valorLote *0.05;
    }  else if (valorLote <=500000){
        return valorLote *0.10;
}  else if (valorLote <=100000){
    return valorLote *0.15;
} else{
    return valorLote *0.20;
  }
}