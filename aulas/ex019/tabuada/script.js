function tabuada() {
    let numb = document.getElementById('txtnum')
    let res = document.getElementById('res')
    let sel = document.getElementById('seltab')

    if (numb.value.length == 0) {
        window.alert('valor nulo')
    } else {
        let n = Number(numb.value)
        sel.innerHTML= ''
        res.innerHTML = `Tabuada do ${n}<br>`
        for (let c = 1; c <= 10; c++) {
            prod = c * n 
            let item =document.createElement('option')
            item.text= `${n}*${c}=${prod}`
            item.value=`sel${c}`
            sel.appendChild(item)
        }
    }
}
   /*
 res.innerHTML = ` Tabuada do ${n}: `
     let n= Number(n.value)
     for (let c=1; c<=10; c++){
         prod=c*n
         console.log(`Tabuada do ${num}: ${num}*${c}= ${prod}`)
         res.innerHTML+=` ${n}*${c}=${prod}`
     }
*/









/*
 let num= 8
        for (let c=1; c<=10; c++){
            prod=c*num
            console.log(`Tabuada do ${num}: ${num}*${c}= ${prod}`)
        }

*/


