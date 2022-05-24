function contagem() {
    var res = window.document.getElementById('resultado')
    var num = Number(document.getElementById('fnum').value)
    var num1 = Number(document.getElementById('fnum1').value)
    var cont

    res.innerHTML += `<h2>Contando de ${num} até ${num1}</h2>`

    if (num<num1) {
        cont = num
        while (cont <= num1) {
            res.innerHTML += ` ${cont} &#x1F449;`
            cont ++
        }
    } else if (num1<num) {
        cont = num
        while (cont >= num1) {
            res.innerHTML += ` ${cont} &#x1F449;`
            cont --
        }
    } else {
        res.innerHTML += `Não é possível contar, pois os números são iguais.`
    }
    res.innerHTML += ` &#x1F3C1`
}