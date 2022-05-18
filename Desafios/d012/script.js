function verificar() {
    var preco1 = window.prompt('Qual era o preço anterior do produto?')
    var preco2 = window.prompt('Qual o preço atual do produto?')
    var res = window.document.getElementById('resultado')

    var preco3 = parseFloat(preco1.replace(',', '.'))
    var preco4 = parseFloat(preco2.replace(',', '.'))

    var subiu = preco4 - preco3
    var aumento = (subiu*100)/preco3

    var caiu = preco3 - preco4
    var reducao = (caiu*100)/preco3

    var diference
    if(preco3 > preco4) {
        diference = `mais barato.<p>O preço caiu ${caiu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p><p>Uma variação de ${reducao.toFixed(1)}% pra baixo.</p>`
    } else if(preco3 < preco4) {
        diference = `mais caro.<p>O preço subiu ${subiu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p><p>Uma variação de ${aumento.toFixed(1)}% pra cima.</p>`
    } else {
        diference = 'igual'
    }

    res.innerHTML = '<h2>Analisando os valores informados</h2>'
    res.innerHTML += `<p>O produto custava ${preco3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${preco4.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
    res.innerHTML += `<p>Hoje o produto está ${diference}.</p>`
}