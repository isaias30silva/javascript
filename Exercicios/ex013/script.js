function clicou() {
    var num1 = Number(window.prompt('Digite um número:'))
    var num2 = Number(window.prompt('Digite outro número:'))

    var res = window.document.getElementById('verificar')

    var maior 
    if (num1 > num2) {
        maior = `o maior valor é <strong>${num1}</strong>`
    } else if (num1 == num2) {
        maior = 'ambos são <strong>IGUAIS</strong>'
    } else {
        maior = `o maior valor é <strong>${num2}</strong>`
    }

    res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, ${maior}</p>`
}