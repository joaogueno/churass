let adultInput = document.getElementById("adult")

let childrenInput = document.getElementById("children")

let durationInput = document.getElementById("duration")

let calc = document.getElementById("calc")

// console.log(adult.value, duration.value, children.value)

function calcResult() {

    // alert("verificação")

    if (adultInput.value == "" , childrenInput.value == "" , durationInput.value == ""){

        document.getElementById("null").innerHTML = "Preencha todos os campos"
        
    }

    else {

    document.getElementById("null").innerHTML = ""

    let adult = adultInput.value 
    let children = childrenInput.value  
    let duration = durationInput.value 

    let qdtCarne = carnePP(duration) * adult + (carnePP(duration) / 2 * children) 
    
    let qdtCerveja = cervejaPP(duration) * adult
    
    let qdtRefri = refriPP(duration) * adult + (refriPP(duration) / 2 * children) 

    carneResult.innerHTML = `<p>${qdtCarne/1000} Kg de Carne</p>`
    
    cervejaResult.innerHTML = `<p>${Math.ceil(qdtCerveja/355)} Latas (355ml) de Cerveja</p>`
    
    refriResult.innerHTML = `<p>${Math.ceil(qdtRefri/ 2000)} Garrafas (2L) de Refri</p>`

  }


}

function carnePP (duration) { //função para saber se devemos usar 400g ou 650g

    let carne = 400;

    if (duration >= 6) {
        return 650;
    } else {
        return 400;
    }

}

function cervejaPP (duration) { 

    let carne = 400;

    if (duration >= 6) {
        return 2000;
    } else {
        return 1200;
    }

}

function refriPP (duration) { 

    let carne = 400;

    if (duration >= 6) {
        return 1500;
    } else {
        return 1000;
    }

}

