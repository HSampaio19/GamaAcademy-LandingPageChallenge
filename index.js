
const form = document.getElementById('formularioCadastro')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nome = document.getElementById('nomeCliente').value
    const email = document.getElementById('emailCliente').value
    let cliente = {
        nome : nome ,
        email : email , 
    }
    localStorage.setItem('Cliente', JSON.stringify(cliente))
})

function cronometro(){
    let resto = 0
    let blackFriday
    let now = Date.now()
    let dDif 
    let hDif
    let mDif
    let sDif
    let controle = 1
    let container = document.getElementById('cronometro')
    let dias = document.createElement('span')
    let horas = document.createElement('span')
    let minutos = document.createElement('span')
    let segundos = document.createElement('span')


    dias.className = 'contadores'
    horas.className = 'contadores'
    minutos.className = 'contadores'
    segundos.className = 'contadores'

    let contRegressiva = setInterval(function(){
        if(controle <= 0){
            clearInterval(contRegressiva)
            return
        }
        let resto = 0
        blackFriday = new Date(2021,10,26)
        blackFriday = blackFriday.getTime()
        let now = Date.now()
        dDif = (blackFriday - now )/(24*60*60*1000)
        resto = ((blackFriday - now )%(24*60*60*1000))
        hDif = resto/(60*60*1000)
        resto = resto%(60*60*1000)
        mDif = resto/(60*1000)
        resto = resto%(60*1000)
        sDif = resto/1000
        dias.innerHTML = parseInt(dDif)
        container.appendChild(dias)
        horas.innerHTML = parseInt(hDif)
        container.appendChild(horas)
        minutos.innerHTML = parseInt(mDif)
        container.appendChild(minutos)
        segundos.innerHTML = parseInt(sDif)
        container.appendChild(segundos)

        controle = (dDif+hDif+mDif+sDif)
    },1000)

}
