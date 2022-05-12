function clique() {
    var num = Number(window.prompt('Digite um número:'))

    var res = window.document.getElementById('total')

    var par
    if (num%2==0) {
        par = 'PAR!'
    } else {
        par = 'ÍMPAR!'
    }

    res.innerHTML = `<p>O número ${num} que foi digitado é <strong>${par}</strong></p>`
}