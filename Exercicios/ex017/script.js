function clicou() {
    var min = 1
    var max = 100
    var dif = max-min
    var aleatorio = Math.random()
    var num = min + Math.trunc(dif*aleatorio)

    var res = window.document.getElementById('resultado')

    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark></p>`
}

function zero() {
    var res = window.document.getElementById('resultado')
    res.innerHTML = null
}