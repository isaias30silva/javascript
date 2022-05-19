function calcular() {
    var nome = window.prompt('Qual é o nome do aluno?')
    var nota11 = window.prompt(`Primeira nota de ${nome}`)
    var nota22 = window.prompt(`Segunda nota de ${nome}`)
    var res = window.document.getElementById('resultado')

    var nota1 = parseFloat(nota11.replace(',', '.'))
    var nota2 = parseFloat(nota22.replace(',', '.'))

    var media = (nota1 + nota2)/2

    var situacao
    if (media < 3.0) {
        situacao = 'Com média abaixo de 3,0, o aluno está <strong><mark style = "background-color: #f88181";><strong style = "color: #740e0e";>REPROVADO</mark></strong>'
    } else if (media == 3.0 || media < 6.0) {
        situacao = 'Com média entre 3,0 e 6,0, o aluno está em <strong><mark style = "background-color: #ffffff";><strong style = "color: #af7406";>RECUPERAÇÃO</mark></strong>'
    } else {
        situacao = 'Com média acima de 6,0, o aluno está <mark style = "background-color: #86f78671";><strong style = "color: #076e07";>APROVADO</mark></strong>'
    }

    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    res.innerHTML += `<p>Com as notas ${nota1.toLocaleString('pt-BR')}  e ${nota2.toLocaleString('pt-BR')}, a <strong>média é ${media.toLocaleString('pt-BR')}</strong></p>`
    res.innerHTML += `<p>${situacao}</p>`
}