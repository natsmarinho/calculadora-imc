let calculo = document.getElementById("calcular")
calculo.addEventListener("click", calcula)

function calcula(){
    let nome = document.getElementById("nome").value
    let metros = parseInt(document.getElementById("altura").value)
    let massa = parseInt(document.getElementById("peso").value)

    let imc = (massa / ((metros * metros) / 10000)).toFixed(2)
   
    let result = document.getElementById("resultado")
    result.innerHTML = `Então, ${nome} seu imc é de ${imc}.`

    if(nome == ""){
        alert("Insira os dados corretamente")
    } else if(massa == ""){
        alert("Insira os dados corretamente")
    } else if(metros == ""){
        alert("Insira os dados corretamente")
    }

    if (imc < "18.5"){
        result.innerHTML += ` Está na classificação: MAGREZA. Caso tenha dúvidas consulte um médico.`
    } else if( imc < "24.9"){
        result.innerHTML += ` Está na classificação: SAUDÁVEL.` 
    } else if (imc < "29.9"){
        result.innerHTML += ` Levando em consideração fatores como estilo de vida sedentário, seu imc está na classificação: SOBREPESO com obesidade grau I.`
    } else if(imc < "39.9"){
        result.innerHTML += ` Levando em consideração fatores como estilo de vida sedentário, seu imc está na classificação: OBESIDADE com grau II.`
    } else{
        result.innerHTML += ` Levando em consideração fatores como estilo de vida sedentário, seu imc está na classificação: OBESIDADE GRAVE com grau III.`
    }
}