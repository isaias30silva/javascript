function clicou() {
    var mes = window.prompt('Digite o mês em extenso (ex: Setembro)')

    var res = window.document.getElementById('resultado')

    var estacao 
    switch (mes.toUpperCase()) {
            case'JANEIRO': case'FEVEIRO': case'MARÇO':
            estacao = 'INVERNO'
            break

        case'ABRIL': case'MAIO': case'JUNHO':
            estacao = 'PRIMAVERA'
            break

        case'JULHO': case'AGOSTO': case'SETEMBRO': 
            estacao = 'VERÃO'
            break

        case'OUTUBRO': case'NOVEMBRO': case'DEZEMBRO':
            estacao = 'OUTONO'
            break

        default:
            estacao = 'INDEFINIDA'
            break
    }

    res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark></p>`
}