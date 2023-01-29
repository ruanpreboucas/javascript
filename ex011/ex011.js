var idade = 89

console.log(`Você tem ${idade} anos`)
if (idade <16){
    console.log('Não pode votar')
}

else if (idade <18 || idade >=65){
    console.log('Voto não obrigatório')
}

else{
    console.log('Voto obrigatório')
}