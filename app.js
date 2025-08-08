/***************************************************************************************************
 * Objetivo: Criar um sistema que realiza cálculos de juros compostos 
 *            (Variaveis, condicional, funções)
 * Autor: Mateus 
 * Data:08/08/25
 * Versão: 1.0
 ***************************************************************************************************/
const MESSAGE_ERROR_EMPTY = 'ERRO: É obrigatório o preenchimento de todas as informações'
const MESSAGE_ERROR_OUT_OF_RANGE = 'ERRO: Dados inválidos. Você deve entrar com valores acima de 0'
const MESSAGE_ERROR_NAN = 'ERRO: Dados inválidos. Você não deve usar letras'
const MESSAGE_ERROR_NNAN = 'ERRO: O nome não pode ser número'


//const jurosCompostos = require('./DESAFIO 1/modulo/juros')

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome: ', function(nome){
    let seuNome = String(nome)

    entradaDeDados.question('Digite o nome do seu produto: ', function(produtoNome){
        let seuProduto = String(produtoNome)

        entradaDeDados.question('Capital inicial: ', function(capital){
            let capitalInicial = capital

            entradaDeDados.question('Taxa de juros anual em porcentagem: ', function(jurosAnual){
                let taxaAnual = jurosAnual

                entradaDeDados.question('Número de vezes por ano: ', function(nAno){
                    let jurosPorAno = nAno

                    entradaDeDados.question('Tempo em anos: ', function(tempoAno){
                        let tempo = tempoAno

                        if(seuNome == '' || seuProduto == '' || capitalInicial == '' || taxaAnual == '' || jurosPorAno == '' || tempo == '' ){
                            console.log(MESSAGE_ERROR_EMPTY)

                        }else if(isNaN(capitalInicial) || isNaN(taxaAnual) || isNaN(jurosPorAno) || isNaN(tempo)){
                            console.log(MESSAGE_ERROR_NAN)
                        }else if(!isNaN(seuNome)){
                            console.log(MESSAGE_ERROR_NNAN)
                        }else if(!isNaN(seuProduto)){
                            console.log(MESSAGE_ERROR_NNAN)
                        }else if(Number(capitalInicial) < 0 || Number(taxaAnual) < 0 || Number(jurosPorAno) < 0 ||  Number(tempo) < 0 ){
                            console.log(MESSAGE_ERROR_OUT_OF_RANGE)
                        }
                        

                        


                    })
                })
            })
        })
    })
})    