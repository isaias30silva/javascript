function contagem() {
    var res = window.document.getElementById('resultado')
    var num = Number(document.getElementById('fnum').value)
    var c = 1

    res.innerHTML += `<h2>Tabuada de ${num}</h2>`

    while (c <= 10) {
            res.innerHTML+= `${num} x ${c} = <strong>${num * c}</strong><br>`
            c ++
    }
}