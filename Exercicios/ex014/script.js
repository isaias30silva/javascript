function clicar() {

    var data = new Date()
    var res = window.document.getElementById('mostrar')

    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${data}</mark></p>`
}