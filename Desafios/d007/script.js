var d = window.prompt('Antes de mais nada.Quanto está a cotação do dólar agora?')

function converter() {
    var r = window.prompt('Quantos R$ você tem na carteira?')

    var dolar = parseFloat(d.replace(',', '.'))
    var real = parseFloat(r.replace(',', '.')).toFixed(2)

    var res = window.document.getElementById('resultado')

    var conv = (real/dolar).toFixed(2).replace('.',',')

    var cambio
    if (real >= dolar) {
        cambio = `Você tem <strong>R$ ${real.replace('.', ',')}</strong>. Isso corresponde à <strong>
            <mark>US$ ${conv}</mark>
        </strong>.`
    } else {
        cambio = `<p>Você tem <strong>R$ ${real}</strong>.</p><p>Esse valor <mark>não é suficiente para a conversão</mark>.</p>`
    }


    res.innerHTML = `<h2>Aqui está o resultado da conversão:</h2>`
    res.innerHTML += `<p>${cambio}</p>`
    res.innerHTML += `<strong>
        <em>
            <p>Cotação do Dólar: 13/05/2022 = R$ 5,06</p>
    </strong>
    </em>`
}
