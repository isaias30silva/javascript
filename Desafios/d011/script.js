function verificar() {
    var ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    var res = window.document.getElementById('resultado')

    var bissexto
    if(ano % 4 == 0) {
        bissexto = '<mark style = "background-color: #86f78671";><strong style = "color: #076e07";>É bissexto</strong></mark> &#x2705'
    } else {
        bissexto = '<mark style = "background-color: #f88181";><strong style = "color: #740e0e";>Não é bissexto</strong></mark> &#x274C'
    } 

    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
    res.innerHTML += `<p>O ano de ${ano} ${bissexto.toUpperCase()}</p>`
}