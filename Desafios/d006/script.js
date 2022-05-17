function converter() {
    var g = window.prompt('Digite uma temperatura em °C (Celsius)')

    var grau = parseFloat(g.replace(',', '.'))

    var res = window.document.getElementById('resultado')

    var k = (grau+273.15).toFixed(2).replace('.',',')
    var f = (grau*1.8+32).toLocaleString()


    res.innerHTML = `<h2>A temperatura de ${grau.toLocaleString('pt-BR')}°C, corresponde a...</h2>`
    res.innerHTML += `<p>${k}°K (Kelvin)</p>`
    res.innerHTML += `<p>${f}°F (Fahrenheit)</p>`
}