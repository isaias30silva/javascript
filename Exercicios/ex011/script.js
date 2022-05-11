function calcular(){
    var nome = window.prompt('Qual é o nome do aluno?')
    var nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
    
    var media = (nota1 + nota2)/2
    var res = window.document.getElementById('total')

    var msg 
    if (media >= 6) {
        msg = 'Meus Parabéns!'
    } else {
        msg = 'Estude um pouco mais!'
    }


    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong> </p>`
}