function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById ('txtano')
    var res = document.getElementById ('res')

    if(fano.value.legth == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img= document.createElement('img') //Cria a tag img
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10 ){
                //Criança
                img.setAttribute('src', 'img/garoto.jpg')
            } else if ( idade < 21){
                //Jovem
                img.setAttribute('src', 'img/meninoado.jpg')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src', 'img/homema.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }else{
            genero = 'Mulher'
            if (idade >=0 && idade <10 ){
                //Criança
                img.setAttribute('src', 'img/garota.jpg')
            } else if (idade<21){
                //Jovem
                img.setAttribute('src', 'img/meninaado.jpg')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src', 'img/mulhera.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
}