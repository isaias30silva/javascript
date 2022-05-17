function desconto() {
    var item = window.prompt('Qual é o produto que você está comprando?')
    var prec = window.prompt(`Qual é o preço de ${item}?`)
    var res = window.document.getElementById('total')

    var preco = parseFloat(prec.replace(',', '.')).toFixed(2)

    var desc = (preco/100)*90
    var poupar = preco - desc

    res.innerHTML = `<h2>Calculando desconto de 10% para ${item}</h2>`
    res.innerHTML += `<p>O preço original era <strong>R$ ${preco.replace('.',',')}</strong>.</p>`
    res.innerHTML += `<p>Você acaba de ganhar <mark>R$ ${poupar.toFixed(2).replace('.',',')}</mark> de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar <strong><em>R$ ${desc.toFixed(2).replace('.',',')}</em></strong> no produto ${item}.</p>`

    /*/
    
    var preco = parseFloat(prec.replace(',', '.')).toFixed(2)


    
    var conv = (real/dolar).toFixed(2).replace('.',',')
    /*/
}