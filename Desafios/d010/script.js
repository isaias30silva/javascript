function calcular() {
    var a1 = window.prompt('Qual é o valor de a?')
    var b1 = window.prompt('Qual é o valor de b?')
    var c1 = window.prompt('Qual é o valor de c?')
    var res = window.document.getElementById('resultado')

    var a = parseFloat(a1.replace(',', '.'))
    var b = parseFloat(b1.replace(',', '.'))
    var c = parseFloat(c1.replace(',', '.'))

    var calculo = b*b - (4*a*c)

    res.innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b} + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>∆ = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <strong><mark>∆ = ${calculo}</mark></strong></p>`
}