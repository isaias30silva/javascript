function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade <=12) {
                img.setAttribute('src', 'criancah.png')
            } else if (idade < 20) {
                img.setAttribute('src','jovemh.png')
            } else if (idade <= 59) {
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade <=12) {
                img.setAttribute('src', 'criancam.png')
            } else if (idade < 20) {
                img.setAttribute('src','jovemm.png')
            } else if (idade <= 59) {
                img.setAttribute('src', 'adulta.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}