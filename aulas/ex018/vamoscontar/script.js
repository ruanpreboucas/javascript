function verificar(){
    var inicio= document.getElementById ('txtinicio')
    var fim= document.getElementById ('txtfim')
    var passo= document.getElementById ('txtpasso')
    var res = document.getElementById ('res')

    if(inicio.value.legth == 0 || fim.value.legth == 0 || passo.value.legth == 0){
        window.alert('Verifique os dados e tente novamente')
    } else{
        res.innerHTML = ` Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i>f){
            for (let c=i; c>=f; c-=p){
                res.innerHTML+=` ${c}`
            }
        }else{
            for (let c=i; c<=f; c+=p){
                res.innerHTML+=` ${c}`
            }
        }
       
    }
    
   
}