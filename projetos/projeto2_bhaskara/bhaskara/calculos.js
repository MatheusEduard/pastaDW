function delta(a,b,c){
    return Math.pow(b,2) - (4*a*c)
}

function bhaskara(a,b,delta){
    var x1 = 0
    var x2 = 0
    if(delta > 0){
        x1 = ((-b)+Math.sqrt(delta))/(2*a)
        x2 = ((-b)-Math.sqrt(delta))/(2*a)
        return {x1, x2}
    }else if(delta == 0){
        x1 = -b/(2*a)
        x2 = 'Valor Inexistente'
        return {x1, x2}
    }else{
        x1 = 'Valor Inexistente'
        x2 = 'Valor Inexistente'
        return {x1, x2}
    }
}






export {delta, bhaskara}