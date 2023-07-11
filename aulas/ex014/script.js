function carregar(){
    var msg =window.document.getElementById('msg')
    var img =window.document.getElementById('imagem')
    var data =new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora>=0 && hora <12){
        img.src = 'img/manhã.jpg'
        document.body.style.background='#f9cb97'
    } else if(hora >=12 && hora <18){
        img.src = 'img/tarde.jpg'
        document.body.style.background='#d3d0c9'
    } else{
        img.src = 'img/noite.jpg'
        document.body.style.background='#1b3244'
    }

}