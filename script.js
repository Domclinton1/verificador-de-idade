function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        
        img.setAttribute('id', 'imagem')
       
        if (fsex[0].checked) {
            genero = 'homem'
            criança = 'criança'
            jovem = 'jovem'
            adulto = 'adulto'
            idoso = 'idoso'
            document.body.style.background = 'rgb(70, 142, 236)'
            if (idade >= 0 && idade < 10) {
                res.innerHTML = `Você é uma ${criança} com ${idade} anos! `
                img.setAttribute('src', './image/cria-man.png')
            } else if (idade < 21) {
                res.innerHTML = `Você é um ${jovem} ${genero} com ${idade} anos!`
                img.setAttribute('src', './image/jovem-homem.png')
            } else if (idade < 50) {
                res.innerHTML = `Você é um ${genero} ${adulto} com ${idade} anos!`
                img.setAttribute('src', './image/homem-adulto.png')
            } else {
                res.innerHTML = `Você é um ${genero} ${idoso} com ${idade} anos!`
                img.setAttribute('src', './image/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            criança = 'criança'
            jovem = 'jovem'
            adulto = 'adulta'
            idosa = 'idosa'
            document.body.style.backgroundColor = 'pink'
            if (idade >= 0 && idade < 10) {
                res.innerHTML = `Você é uma ${criança} com ${idade} anos! `
                img.setAttribute('src', './image/cria-girl.png')
            } else if (idade < 21) {
                res.innerHTML = `Você é uma ${genero} ${jovem} com ${idade} anos!`
                img.setAttribute('src', './image/jovem-mulher.png')
            } else if (idade < 50) {
                res.innerHTML = `Você é uma ${genero} ${adulto} com ${idade} anos!`
                img.setAttribute('src', './image/mulher-adulta.png')
            } else {
                res.innerHTML = `Você é uma ${genero} ${idosa} com ${idade} anos!`
                img.setAttribute('src', './image/mulher-idosa.png')
            }
        }
       
        res.style.textAlign = 'center'
       // res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    
    }
}