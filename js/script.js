const form = document.getElementById("form")

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value

    const imc = (peso/altura**2).toFixed(2)

    const valor = document.getElementById("valor")
    let descricao = ''

    valor.classList.add('cuidadonaomininu')
    document.getElementById("informacoes").classList.remove("hidden")
    
    if (imc < 18.5) {
        descricao =  "Cuidado! Você está abaixo do peso!"
    }else if(imc >= 18.5 && imc < 25 ) {
        valor.classList.remove("cuidadonaomininu")
        valor.classList.add("normal")
        descricao = "Você está no peso ideal!"
    }else if(imc >=25 && imc < 30){
        descricao = "Cuidado! Você está com sobrepeso"
    } else if(imc >= 30 && imc < 35){
        descricao = "Cuidado! Você está com obesidade grau I"
    } else if(imc >= 35 && imc < 40){
        descricao = "Cuidado! Você está com obesidade grau II"
    }else{
        descricao = "Cuidado! Você está com obesidade grau III"
    }

    valor.textContent = imc.replace(".", ",")
    document.getElementById("descricao").textContent = descricao
    
})