function contar() {
    var res = window.document.getElementById('resultado')

    res.innerHTML += '<h2>Contagem Regressiva de 10 a 1</h2>'

    var cont = 10
    while (cont >= 1) {
            res.innerHTML+= ` ${cont} &#x1F449;`
            cont -= 1
    }
    res.innerHTML += ` &#x1F3C1`
}