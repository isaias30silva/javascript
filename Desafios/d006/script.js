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

/*
var km = (metro/1000).toFixed(3).replace('.',',')
var hec = (metro/100).toFixed(3).replace('.',',')
var dec = (metro/10).toFixed(3).replace('.',',')
var deci = (metro*10).toLocaleString('pt-BR')
var cen = (metro*100).toLocaleString('pt-BR')
var mil = (metro*1000).toLocaleString('pt-BR')

res.innerHTML += `<p>${km} quilômetros (Km)</p>`

*/