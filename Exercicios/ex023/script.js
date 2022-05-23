function contar() {
    var res = window.document.getElementById('resultado')

    res.innerHTML += '<h2>Números pares de 1 até 10</h2>'

    var cont = 2
    while (cont <= 10) {
            res.innerHTML+= ` ${cont} &#x1F449;`
            cont +=2
    }
    res.innerHTML += ` &#x1F3C1`
}