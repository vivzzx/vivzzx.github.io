function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var headerTxt = document.getElementById('intro')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 19
   
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#d3d9bc'
        headerTxt.innerText = 'Bom dia!'

    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#8498b1'
        headerTxt.innerText = 'Boa tarde!'
    }
    else {
        //Boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#011F39'
        headerTxt.innerText = 'Boa noite!'
    }
}

