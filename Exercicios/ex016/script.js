var agora = new Date()
var ano = agora.getFullYear()

function calcular() {
    var nas = Number(window.prompt('Em que ano você nasceu?'))
    var idade = ano-nas
    var res = window.document.getElementById('resultado')

    res.innerHTML = `<p>Quem nasceu em ${nas} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}