import { bhaskara, delta } from './calculos.js'

function calcular(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let c = document.getElementById("c").value

    let valor_Delta = delta(a,b,c)
    let valor_Bhaskara = bhaskara(a,b,valor_Delta)

    document.getElementById("resultado").innerHTML = "x1 = "+valor_Bhaskara.x1+" e x2 = "+valor_Bhaskara.x2

}

document.getElementById("bhaskaraCalc").addEventListener("click",calcular)