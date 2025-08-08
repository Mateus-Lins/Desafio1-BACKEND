/************************************************************************************************
 * Objetivo: Arquivo responsável pelo juros
 * Autoria: Mateus Lins de Jesus
 * Data: 05/08/2025
 * Versão: 1.0
 *************************************************************************************************/

function calcularJuros(capital, jurosAnual, nAno, tempoAno){
    let capitalInicial = Number(capital)
    let taxaAnual = Number(jurosAnual)
    let jurosPorAno = Number(nAno)
    let tempo = Number(tempoAno)

    let montante = (capitalInicial) * Math.pow((1 + taxaAnual / jurosPorAno), jurosPorAno * tempo)

    return Number(montante).toFixed(2)
}

function calcularPorcentagem(taxaAnual){
    let porcentagem = Number(taxaAnual)
    let taxaPercentual = porcentagem / 100

    return taxaPercentual 
}

module.exports = {
    calcularJuros,
    calcularPorcentagem
}