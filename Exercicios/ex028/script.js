function contagem() {
    var res = window.document.getElementById('resultado')
    var num = Number(document.getElementById('fnum').value)
    var c = num
    var fat = 1

    res.innerHTML += `<h2>Calculando ${num}</h2>`

    while (c > 1) {
            res.innerHTML+= `${c} x `
            fat *= c
            c --
    }
    res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}