function reajustar() {
    var nome = window.prompt('Qual é o nome do funcionário?')
    var salario1 = window.prompt(`Qual é o salário de ${nome}?`)
    var aumento1 = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    var res = window.document.getElementById('resultado')

    var salario = parseFloat(salario1.replace(',', '.'))

    var aumento = parseFloat(aumento1.replace(',', '.'))

    var salario2 = salario*(aumento+100)/100
    var adicional = salario2 - salario


    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
    res.innerHTML += `<p>O salário atual era <strong>${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong>.</p>`
    res.innerHTML += `<p>Com um aumento de <strong>${aumento}%</strong>, o salário vai aumentar <mark>${adicional.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</mark> no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, <ins>${nome}</ins> vai passar a ganhar <mark><strong>${salario2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong></mark>.</p>`
}